import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight, HiCalendar, HiTag } from "react-icons/hi";
import { getBlogPostBySlug, getAllBlogSlugs, getAdjacentPosts, type BlogPost } from "../../../../lib/blog";
import { MarkdownRenderer } from "../../../../components/blog/MarkdownRenderer";
import { getTranslation } from "../../../../translations";
import { LanguageSync } from "../../../../components/blog/LanguageSync";

interface BlogPostPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<{ lang: string; slug: string }[]> {
  const slugs = await getAllBlogSlugs();
  return slugs.map(({ lang, slug }) => ({ lang, slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = await getBlogPostBySlug(lang as "en" | "ro", slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog | Stefan Nasturas`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps): Promise<React.ReactElement> {
  const { lang, slug } = await params;

  if (lang !== "en" && lang !== "ro") {
    notFound();
  }

  const post = await getBlogPostBySlug(lang, slug);

  if (!post) {
    notFound();
  }

  const t = getTranslation(lang);
  const { previous, next } = await getAdjacentPosts(lang, slug);

  const formattedDate = new Date(post.date).toLocaleDateString(lang === "ro" ? "ro-RO" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate reading time
  const wordCount = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      <LanguageSync lang={lang} />
      <article className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog */}
          <Link
            href={`/blog/${lang}`}
            className="inline-flex items-center text-text-secondary hover:text-brand-primary transition-colors mb-8"
          >
            <HiArrowLeft className="mr-2 h-5 w-5" />
            <span>{t.blog.backToBlog}</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            {post.coverImage && (
              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/60 to-transparent" />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="flex items-center text-sm text-text-secondary">
                <HiCalendar className="mr-2 h-4 w-4" />
                {formattedDate}
              </span>
              <span className="text-text-secondary">•</span>
              <span className="text-sm text-text-secondary">
                {readingTime} {t.blog.minuteRead}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-text-secondary max-w-3xl">
              {post.description}
            </p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-6">
                <HiTag className="h-4 w-4 text-brand-primary" />
                <span className="text-sm text-text-secondary mr-2">{t.blog.tags}:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-background-secondary text-text-secondary rounded-full border border-brand-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="mb-16">
            <MarkdownRenderer contentHtml={post.contentHtml} />
          </div>

          {/* Navigation */}
          <nav className="border-t border-brand-primary/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {previous ? (
                <Link
                  href={`/blog/${lang}/${previous.slug}`}
                  className="group flex items-center text-text-secondary hover:text-brand-primary transition-colors"
                >
                  <HiArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  <div className="text-left">
                    <span className="text-sm block text-text-secondary/70">
                      {t.blog.previousPost}
                    </span>
                    <span className="font-medium line-clamp-1">{previous.title}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  href={`/blog/${lang}/${next.slug}`}
                  className="group flex items-center text-text-secondary hover:text-brand-primary transition-colors text-right sm:text-left"
                >
                  <div className="text-left sm:text-right">
                    <span className="text-sm block text-text-secondary/70">
                      {t.blog.nextPost}
                    </span>
                    <span className="font-medium line-clamp-1">{next.title}</span>
                  </div>
                  <HiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>
        </div>
      </article>
    </>
  );
}
