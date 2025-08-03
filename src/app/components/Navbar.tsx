"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    HiBriefcase,
    HiCamera,
    HiHome,
    HiMenu,
    HiMoon,
    HiSun,
    HiUser,
    HiX,
} from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: "Home", href: "#home", icon: HiHome },
        { name: "Projects", href: "#projects", icon: HiBriefcase },
        { name: "Photos", href: "#photos", icon: HiCamera },
        { name: "About", href: "#about", icon: HiUser },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-screen top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-brand-primary/50">
            <div className="container mx-auto w-screen">
                <div className="flex px-4 justify-between items-center h-20">
                    {/* Logo/Brand */}
                    <div className="pl-2 flex-shrink-0">
                        <a
                            href="#home"
                            className="text-xl font-bold text-foreground hover:text-brand-primary transition-colors"
                        >
                            <Image
                                src={
                                    theme == "light"
                                        ? "/Logo-light.svg"
                                        : "/Logo-dark.svg"
                                }
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation and Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-foreground hover:text-brand-primary px-3 py-2 rounded-md text-xl font-sora transition-all duration-200 hover:underline"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="text-foreground hover:text-brand-primary p-3 rounded-md transition-colors duration-200"
                            aria-label={`Switch to ${
                                theme === "light" ? "dark" : "light"
                            } mode`}
                        >
                            {theme === "light" ? (
                                <HiMoon className="h-8 w-8" />
                            ) : (
                                <HiSun className="h-8 w-8" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button and theme toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="text-foreground hover:text-brand-primary p-2 rounded-md transition-colors duration-200"
                            aria-label={`Switch to ${
                                theme === "light" ? "dark" : "light"
                            } mode`}
                        >
                            {theme === "light" ? (
                                <HiMoon className="h-8 w-8" />
                            ) : (
                                <HiSun className="h-8 w-8" />
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-foreground hover:text-brand-primary inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <HiX
                                    className="block h-12 w-12"
                                    aria-hidden="true"
                                />
                            ) : (
                                <HiMenu
                                    className="block h-12 w-12"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 flex flex-col justify-center items-start space-y-1 sm:px-3 bg-background border-t border-foreground/10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-foreground hover:text-brand-primary hover:bg-foreground/5 px-3 py-6 rounded-md text-7xl font-italiana transition-colors duration-200 flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <item.icon className="mr-3 h-20 w-20" />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
