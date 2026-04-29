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
        {/* Matomo */}
        <Script id="matomo-tracking" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(["setCookieDomain", "*.stefannasturas.vercel.app"]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//matomo.stefann.duckdns.org/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true;
              g.src=u+'matomo.js';
              s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
        <noscript>
          <p>
            <img
              referrerPolicy="no-referrer-when-downgrade"
              src="//matomo.stefann.duckdns.org/matomo.php?idsite=1&amp;rec=1"
              style={{ border: 0 }}
              alt=""
            />
          </p>
        </noscript>
        {/* End Matomo Code */}
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
