import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { getBlogPostsByLanguage } from "../../../lib/blog";
import { PostCard } from "../../../components/blog/PostCard";
import { getTranslation } from "../../../translations";
import { LanguageSync } from "../../../components/blog/LanguageSync";

interface BlogLangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams(): Promise<{ lang: string }[]> {
  return [{ lang: "en" }, { lang: "ro" }];
}

export async function generateMetadata({
  params,
}: BlogLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const t = getTranslation(lang as "en" | "ro");

  return {
    title: `${t.blog.title} | Stefan Nasturas`,
    description: t.blog.subtitle,
  };
}

export default async function BlogLangPage({
  params,
}: BlogLangPageProps): Promise<React.ReactElement> {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ro") {
    notFound();
  }

  const posts = await getBlogPostsByLanguage(lang);
  const t = getTranslation(lang);

  return (
    <>
      <LanguageSync lang={lang} />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-text-secondary hover:text-brand-primary transition-colors mb-6"
          >
            <HiArrowLeft className="mr-2 h-5 w-5" />
            <span>{t.blog.backToHome}</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.blog.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            {t.blog.subtitle}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">{t.blog.noPosts}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </main>
    </>
  );
}
