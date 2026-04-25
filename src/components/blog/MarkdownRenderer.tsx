"use client";

import React from "react";
import "highlight.js/styles/github-dark.css";

interface MarkdownRendererProps {
  contentHtml: string;
}

export const MarkdownRenderer = ({ contentHtml }: MarkdownRendererProps): React.ReactElement => {
  return (
    <div
      className="prose prose-lg prose-slate max-w-none dark:prose-invert
        prose-headings:font-bold prose-headings:text-foreground
        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:text-text-secondary prose-p:leading-relaxed
        prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground prose-strong:font-semibold
        prose-code:text-brand-primary prose-code:bg-background-tertiary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-background-tertiary prose-pre:border prose-pre:border-brand-primary/20
        prose-blockquote:border-l-brand-primary prose-blockquote:bg-background-secondary/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
        prose-img:rounded-lg prose-img:shadow-md
        prose-ul:text-text-secondary prose-ol:text-text-secondary
        prose-li:marker:text-brand-primary
        prose-hr:border-brand-primary/30"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
};
