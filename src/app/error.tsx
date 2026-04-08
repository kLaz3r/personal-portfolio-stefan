"use client";

import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold font-montserrat text-brand-primary mb-4">
          {t("error.title")}
        </h1>
        <p className="text-text-secondary mb-6">
          {t("error.message")}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-primary text-background rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          {t("error.retry")}
        </button>
      </div>
    </div>
  );
}
