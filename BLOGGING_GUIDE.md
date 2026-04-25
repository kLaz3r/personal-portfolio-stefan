# Blog Writing & Publishing Guide

This guide explains how to write, manage, and publish blog posts on your Next.js portfolio website.

## Overview

The blog uses **markdown files** stored in `src/content/blog/` with static site generation (SSG). Posts are organized by language:

```
src/content/blog/
├── en/          # English posts
│   └── *.md
└── ro/          # Romanian posts
    └── *.md
```

## File Structure

Each blog post is a markdown file (`.md`) with YAML frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO and previews (1-2 sentences)"
date: "2026-04-25"           # YYYY-MM-DD format
lang: "en"                   # "en" or "ro"
tags: ["tag1", "tag2", "tag3"]
coverImage: "/images/blog/optional-cover.jpg"  # Optional
---

# Your Post Content

Write your article here using **Markdown** syntax...
```

## Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title (max 100 chars) |
| `description` | Yes | SEO meta description and preview text |
| `date` | Yes | Publication date in `YYYY-MM-DD` format |
| `lang` | Yes | Language code: `"en"` or `"ro"` |
| `tags` | Yes | Array of tags (at least 1 recommended) |
| `coverImage` | No | Path to cover image, relative to `public/` |

## Writing a New Post

### Step 1: Create the File

Create a new `.md` file in the appropriate language folder:

```bash
# For English posts
src/content/blog/en/your-post-slug.md

# For Romanian posts
src/content/blog/ro/your-post-slug.md
```

**File naming conventions:**
- Use lowercase letters
- Replace spaces with hyphens
- Keep it short and descriptive (this becomes the URL slug)
- Example: `building-with-nextjs.md` → URL: `/blog/en/building-with-nextjs`

### Step 2: Add Frontmatter

Copy the template below and fill in your values:

```markdown
---
title: "Building Responsive Layouts with Tailwind CSS"
description: "Learn how to create beautiful, responsive layouts using Tailwind CSS utility classes and modern CSS techniques."
date: "2026-04-25"
lang: "en"
tags: ["tailwind", "css", "web development", "tutorial"]
coverImage: "/images/blog/tailwind-cover.jpg"
---
```

### Step 3: Write Content

Use standard **Markdown** syntax. Here are the supported elements:

#### Headers
```markdown
# H1 - Main title (use once)
## H2 - Section headings
### H3 - Subsections
#### H4 - Small headings
```

#### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

#### Lists
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list
2. Second item
3. Third item
```

#### Links
```markdown
[Link text](https://example.com)
[Internal link](/blog/en/another-post)
```

#### Images
```markdown
![Alt text](/images/blog/my-image.jpg)
```

**Note:** Store images in `public/images/blog/` and reference them with `/images/blog/filename.jpg`

#### Code Blocks

Inline: `const x = 5`

Block with language highlighting:
```markdown
    ```typescript
    function greet(name: string): string {
      return `Hello, ${name}!`;
    }
    ```
```

Supported languages: `typescript`, `javascript`, `jsx`, `tsx`, `css`, `html`, `json`, `bash`, `markdown`

#### Blockquotes
```markdown
> This is a blockquote with an important quote or note.
> It can span multiple lines.
```

#### Horizontal Rules
```markdown
---
```

#### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Step 4: Test Locally

Run the development server to preview your post:

```bash
npm run dev
```

Visit `http://localhost:3000/blog` to see the listing, or navigate directly to:
- `/blog/[lang]/[your-post-slug]` for the full post

### Step 5: Build & Deploy

Once satisfied with your post:

```bash
npm run build
npm start
```

Deploy your site with the new content.

## Sample Post Template

See `src/content/blog/_template.md` for a ready-to-use template.

## Best Practices

### SEO
- Write descriptive titles (50-60 characters ideal)
- Include relevant keywords in descriptions
- Use header hierarchy properly (one H1, logical H2/H3 flow)
- Add alt text to images

### Writing
- Keep paragraphs short (2-4 sentences)
- Use lists to break up dense content
- Include code examples for technical posts
- Add a cover image for visual appeal

### Images
- Optimize images before adding (WebP preferred, max 1920px width)
- Store in `public/images/blog/`
- Use descriptive filenames: `responsive-design-screenshot.jpg`
- Recommended aspect ratio for covers: 2:1

### Language Versions
- If you write in both languages, create matching posts
- Same slug for both versions: `hello-world.md` (en) + `buna-ziua.md` (ro)
- Keep content consistent but culturally appropriate

## Updating Posts

Simply edit the `.md` file and rebuild. The changes will be reflected after deployment.

**Note:** Once published, avoid changing the slug (filename) as it will break existing links.

## Troubleshooting

### Build Errors
- Check that all required frontmatter fields are present
- Ensure `date` is in `YYYY-MM-DD` format
- Verify `lang` is either `"en"` or `"ro"`

### Posts Not Showing
- Check file is in correct directory (`en/` or `ro/`)
- Verify file has `.md` extension
- Ensure date is not in the future

### Images Not Loading
- Verify image is in `public/images/blog/`
- Check path starts with `/images/blog/`
- Confirm file extension matches (.jpg, .png, .webp)

## Quick Reference

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Available at
http://localhost:3000/blog

# Post locations
src/content/blog/en/*.md    # English posts
src/content/blog/ro/*.md    # Romanian posts
```

---

Happy writing! 📝
