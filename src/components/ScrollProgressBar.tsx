"use client";

import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-[var(--background-tertiary)] z-[60]">
            <div
                className="h-full bg-[var(--brand-primary)]"
                style={{ width: `${scroll}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
