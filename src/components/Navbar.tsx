"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
HiBriefcase,
HiCamera,
HiColorSwatch,
HiHome,
HiMenu,
HiMoon,
HiSun,
HiUser,
HiX,
} from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

// Simple Hamburger Menu Button
const HamburgerButton = ({
isOpen,
onClick,
}: {
isOpen: boolean;
onClick: () => void;
}) => {
return (
<motion.button
onClick={onClick}
className="text-foreground hover:text-brand-primary inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
aria-expanded={isOpen}
aria-controls="mobile-menu"
animate={{ rotate: isOpen ? 180 : 0 }}
transition={{ duration: 0.3 }}
>
<span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
{isOpen ? (
<HiX className="block h-12 w-12" aria-hidden="true" />
) : (
<HiMenu className="block h-12 w-12" aria-hidden="true" />
)}
</motion.button>
);
};

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const { theme, toggleTheme } = useTheme();
const [isMounted, setIsMounted] = useState(false);
const mobileMenuRef = useRef<HTMLDivElement>(null);
const firstFocusableRef = useRef<HTMLAnchorElement>(null);

useEffect(() => {
setIsMounted(true);
}, []);

// Focus trap for mobile menu
useEffect(() => {
if (!isOpen) return;

const handleKeyDown = (e: KeyboardEvent) => {
if (e.key === "Escape") {
setIsOpen(false);
return;
}

if (e.key !== "Tab") return;

const focusableElements = mobileMenuRef.current?.querySelectorAll(
'a[href], button:not([disabled])'
);
if (!focusableElements || focusableElements.length === 0) return;

const firstElement = focusableElements[0] as HTMLElement;
const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

if (e.shiftKey && document.activeElement === firstElement) {
e.preventDefault();
lastElement.focus();
} else if (!e.shiftKey && document.activeElement === lastElement) {
e.preventDefault();
firstElement.focus();
}
};

document.addEventListener("keydown", handleKeyDown);

// Focus first element when menu opens
setTimeout(() => {
firstFocusableRef.current?.focus();
}, 100);

return () => document.removeEventListener("keydown", handleKeyDown);
}, [isOpen]);

const navItems = [
{ name: "Home", href: "/#home", icon: HiHome },
{ name: "Graphics", href: "/#graphics", icon: HiColorSwatch },
{ name: "Web Dev", href: "/#webdev", icon: HiBriefcase },
{ name: "Photography", href: "/#photos", icon: HiCamera },
{ name: "About", href: "/#about", icon: HiUser },
];

const toggleMenu = () => {
setIsOpen(!isOpen);
};

return (
<nav className="gpu-accelerated fixed w-screen top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-brand-primary/50">
<div className="container mx-auto w-screen">
<div className="flex px-4 justify-between items-center h-16 md:h-20">
{/* Logo/Brand */}
<div className="pl-2 flex-shrink-0">
<Link
href="/"
className="text-xl font-bold text-foreground hover:text-brand-primary transition-colors"
>
{isMounted ? (
<Image
src={
theme == "light"
? "/Logo-light.svg"
: "/Logo-dark.svg"
}
alt="Logo"
className="h-10 w-10 md:h-14 md:w-14"
width={40}
height={40}
/>
) : (
<div style={{ width: 40, height: 40 }} />
)}
</Link>
</div>

{/* Desktop Navigation and Theme Toggle */}
<div className="hidden md:flex items-center space-x-8">
<div className="flex items-baseline space-x-8">
{navItems.map((item) => (
<Link
key={item.name}
href={item.href}
className="text-foreground hover:text-brand-primary px-1 py-2 rounded-md text-xl font-montserrat transition-all duration-200 hover:underline"
>
{item.name}
</Link>
))}
</div>

{/* Theme Toggle Button */}
{isMounted && (
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
)}
</div>

{/* Mobile menu button and theme toggle */}
<div className="md:hidden flex items-center space-x-2">
{isMounted && (
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
)}
<HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
</div>
</div>
</div>

{/* Mobile Navigation */}
<AnimatePresence>
{isOpen && (
<motion.div
ref={mobileMenuRef}
id="mobile-menu"
role="dialog"
aria-modal="true"
aria-label="Mobile navigation menu"
className="md:hidden"
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.3, ease: "easeInOut" }}
>
<div className="px-2 pt-2 pb-3 flex flex-col justify-center items-start space-y-1 sm:px-3 border-t border-foreground/10">
{navItems.map((item, index) => (
<motion.div
key={item.name}
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{
duration: 0.3,
delay: index * 0.1,
}}
>
<Link
ref={index === 0 ? firstFocusableRef : undefined}
href={item.href}
className="text-foreground hover:text-brand-primary hover:bg-foreground/5 px-3 py-6 rounded-md text-7xl font-montserrat transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
onClick={() => setIsOpen(false)}
scroll={true}
>
<item.icon className="mr-3 h-20 w-20" aria-hidden="true" />
{item.name}
</Link>
</motion.div>
))}
</div>
</motion.div>
)}
</AnimatePresence>
</nav>
);
};

export default Navbar;
