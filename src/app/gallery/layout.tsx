import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Explore my photography collection featuring landscapes, portraits, and creative shots captured with professional equipment.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
