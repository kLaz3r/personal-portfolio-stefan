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
    title: "Personal Portfolio - Stefan Nasturas",
    description: "Showcase website for a developer and designer",
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
