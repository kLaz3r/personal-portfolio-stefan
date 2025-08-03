import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-background border-t-1 border-brand-primary/50 flex items-center justify-center py-8">
            <div className="container flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
                <p className="md:text-left text-center">
                    ©Copyright 2025 Stefan Nasturas.
                    <br />
                    All rights reserved.
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
