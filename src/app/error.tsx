"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold font-montserrat text-brand-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-text-secondary mb-6">
          An error occurred while loading the page.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-primary text-background rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
