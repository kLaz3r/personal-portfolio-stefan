import type { Metadata } from "next";
import { Italiana, Sora } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

const italiana = Italiana({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-italiana",
});

export const metadata: Metadata = {
    title: "Stefan Nasturas - Web Developer & Designer Portfolio | React, Next.js, UI/UX",
    description:
        "Professional portfolio of Stefan Nasturas, a skilled web developer and designer from Romania. Specializing in React, Next.js, TypeScript, and modern web technologies. View projects, photography, and get in touch.",
    keywords: [
        "web developer",
        "frontend developer",
        "React developer",
        "Next.js",
        "TypeScript",
        "UI/UX designer",
        "portfolio",
        "JavaScript",
        "web design",
        "Romania",
    ],
    authors: [{ name: "Stefan Nasturas" }],
    creator: "Stefan Nasturas",
    publisher: "Stefan Nasturas",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://stefan-nasturas.dev",
        title: "Stefan Nasturas - Web Developer & Designer Portfolio",
        description:
            "Professional portfolio showcasing web development projects, UI/UX design work, and photography by Stefan Nasturas. Expert in React, Next.js, and modern web technologies.",
        siteName: "Stefan Nasturas Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Stefan Nasturas - Web Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Stefan Nasturas - Web Developer & Designer Portfolio",
        description:
            "Professional portfolio showcasing web development projects, UI/UX design work, and photography by Stefan Nasturas.",
        images: ["/og-image.jpg"],
        creator: "@stefannasturas",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content="StefanWebDev"
                />
                <link rel="canonical" href="https://stefan-nasturas.dev" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                (function() {
                  function getInitialTheme() {
                    const persistedColorPreference = window.localStorage.getItem('theme');
                    if (typeof persistedColorPreference === 'string') {
                      return persistedColorPreference;
                    }
                    const mql = window.matchMedia('(prefers-color-scheme: dark)');
                    if (typeof mql.matches === 'boolean') {
                      return mql.matches ? 'dark' : 'light';
                    }
                    return 'light';
                  }
                  const theme = getInitialTheme();
                  document.documentElement.className = theme;
                })();
              `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Person",
                                name: "Stefan Nasturas",
                                jobTitle: "Web Developer & Designer",
                                url: "https://stefan-nasturas.dev",
                                sameAs: [
                                    "https://github.com/kLaz3r",
                                    "https://linkedin.com/in/stefan-nasturas",
                                ],
                                knowsAbout: [
                                    "Web Development",
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "UI/UX Design",
                                    "Photography",
                                    "JavaScript",
                                    "HTML",
                                    "CSS",
                                ],
                                address: {
                                    "@type": "PostalAddress",
                                    addressCountry: "RO",
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                name: "Stefan Nasturas Portfolio",
                                url: "https://stefan-nasturas.dev",
                                description:
                                    "Professional portfolio of Stefan Nasturas, showcasing web development projects, design work, and photography.",
                                author: {
                                    "@type": "Person",
                                    name: "Stefan Nasturas",
                                },
                                potentialAction: {
                                    "@type": "SearchAction",
                                    target: "https://stefan-nasturas.dev/search?q={search_term_string}",
                                    "query-input":
                                        "required name=search_term_string",
                                },
                            },
                        ]),
                    }}
                />
                <script
                    defer
                    src="https://umami.stefann.duckdns.org/script.js"
                    data-website-id="3569f73a-4882-49da-b305-604fdd3b1389"
                />
            </head>
            <body className={`${sora.variable} antialiased`}>
                <ThemeProvider>
                    <ScrollProgressBar />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
