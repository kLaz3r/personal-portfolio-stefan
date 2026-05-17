import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a custom quote for graphic design or web development services. Fill out our quick questionnaire to get started on your project.",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
