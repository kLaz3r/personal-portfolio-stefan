import type { Metadata } from "next";
import { Italiana, Sora } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
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
        <html lang="en">
            <body className={`${sora.variable} antialiased`}>
                <ThemeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
