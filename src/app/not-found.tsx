import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold font-montserrat text-brand-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-montserrat mb-4">Page Not Found</h2>
        <p className="text-text-secondary mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-brand-primary text-background rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
