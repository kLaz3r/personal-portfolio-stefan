"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";
import { useTranslation } from "../../hooks/useTranslation";
import type { BlogPostMetadata } from "../../lib/blog";

interface PostCardProps {
  post: BlogPostMetadata;
  index: number;
}

export const PostCard = ({ post, index }: PostCardProps): React.ReactElement => {
  const { t } = useTranslation();

  const formattedDate = new Date(post.date).toLocaleDateString(
    post.lang === "ro" ? "ro-RO" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link
        href={`/blog/${post.lang}/${post.slug}`}
        className="block h-full bg-background-secondary rounded-xl overflow-hidden border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/5"
      >
        {post.coverImage && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={75}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent" />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-sm text-brand-primary font-medium">
              {formattedDate}
            </span>
            {post.tags.length > 0 && (
              <>
                <span className="text-text-secondary">•</span>
                <span className="text-sm text-text-secondary">
                  {post.tags.slice(0, 3).join(", ")}
                </span>
              </>
            )}
          </div>
          <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-brand-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-text-secondary mb-4 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center text-brand-primary font-medium">
            <span>{t("blog.readMore")}</span>
            <HiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
