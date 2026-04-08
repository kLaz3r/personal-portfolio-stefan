"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
    return (
        <footer className="bg-background border-t border-brand-primary/50 flex items-center justify-center py-8 px-8">
            <div className="container font-montserrat flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
                <p className="md:text-left text-center">
                    {t("footer.copyright")}
                    <br />
                    {t("footer.rights")}
                </p>
                <div className="flex items-center justify-center gap-12">
                    <Link
                        className="text-6xl hover:text-brand-primary transition-colors"
                        href="https://github.com/kLaz3r"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        className="text-6xl hover:text-brand-primary transition-colors"
                        href="https://www.linkedin.com/in/stefan-nasturas/"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
