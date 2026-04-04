export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"
          aria-label="Loading"
        />
        <p className="text-text-secondary font-montserrat">Loading...</p>
      </div>
    </div>
  );
}
