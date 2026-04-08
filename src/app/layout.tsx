import type { Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="StefanWebDev"
        />
        <link rel="canonical" href="https://stefan-nasturas.dev" />
        <link rel="preconnect" href="https://umami.stefann.duckdns.org" />
        <link rel="dns-prefetch" href="https://umami.stefann.duckdns.org" />
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
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
          `}
        </Script>
        <Script
          src="https://umami.stefann.duckdns.org/script.js"
          data-website-id="3569f73a-4882-49da-b305-604fdd3b1389"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <ScrollProgressBar />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
