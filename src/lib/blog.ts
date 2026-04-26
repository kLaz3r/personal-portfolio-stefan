import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  lang: "en" | "ro";
  tags: string[];
  coverImage?: string;
  content: string;
  contentHtml: string;
};

export type BlogPostMetadata = Omit<BlogPost, "content" | "contentHtml">;

const blogDirectory = path.join(process.cwd(), "src/content/blog");
const validSlugPattern = /^[a-zA-Z0-9_-]+$/;

function validateFrontmatter(data: Record<string, unknown>): {
  title: string;
  description: string;
  date: string;
  lang: "en" | "ro";
  tags: string[];
  coverImage?: string;
} {
  if (!data.title || typeof data.title !== "string") {
    throw new Error("Missing or invalid 'title' in frontmatter");
  }
  if (!data.description || typeof data.description !== "string") {
    throw new Error("Missing or invalid 'description' in frontmatter");
  }
  if (!data.date || typeof data.date !== "string") {
    throw new Error("Missing or invalid 'date' in frontmatter");
  }
  if (!data.lang || (data.lang !== "en" && data.lang !== "ro")) {
    throw new Error("Missing or invalid 'lang' in frontmatter (must be 'en' or 'ro')");
  }

  const tags = Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : [];
  const coverImage = data.coverImage && typeof data.coverImage === "string" ? data.coverImage : undefined;

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    lang: data.lang,
    tags,
    coverImage,
  };
}

export async function getBlogPostsByLanguage(lang: "en" | "ro"): Promise<BlogPostMetadata[]> {
  const langDir = path.join(blogDirectory, lang);

  try {
    await fs.access(langDir);
  } catch {
    return [];
  }

  const files = await fs.readdir(langDir);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  const posts = await Promise.all(
    mdFiles.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(langDir, filename);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);

      const validated = validateFrontmatter(data);

      return {
        slug,
        ...validated,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(lang: "en" | "ro", slug: string): Promise<BlogPost | null> {
  if (!validSlugPattern.test(slug)) return null;

  try {
    const fullPath = path.join(blogDirectory, lang, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const validated = validateFrontmatter(data);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      content,
      contentHtml,
      ...validated,
    };
  } catch {
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<{ lang: "en" | "ro"; slug: string }[]> {
  const slugs: { lang: "en" | "ro"; slug: string }[] = [];
  const languages: ("en" | "ro")[] = ["en", "ro"];

  for (const lang of languages) {
    const langDir = path.join(blogDirectory, lang);
    try {
      await fs.access(langDir);
      const files = await fs.readdir(langDir);
      const mdFiles = files.filter((file) => file.endsWith(".md"));
      mdFiles.forEach((file) => {
        const slug = file.replace(/\.md$/, "");
        if (!validSlugPattern.test(slug)) return;
        slugs.push({
          lang,
          slug,
        });
      });
    } catch {
      // Directory doesn't exist, skip
    }
  }

  return slugs;
}

export async function getAdjacentPosts(
  lang: "en" | "ro",
  currentSlug: string
): Promise<{ previous: BlogPostMetadata | null; next: BlogPostMetadata | null }> {
  const posts = await getBlogPostsByLanguage(lang);
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
}
