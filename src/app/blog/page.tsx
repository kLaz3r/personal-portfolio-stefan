"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage(): null {
  const router = useRouter();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    const lang = storedLang === "ro" ? "ro" : "en";
    router.replace(`/blog/${lang}`);
  }, [router]);

  return null;
}
