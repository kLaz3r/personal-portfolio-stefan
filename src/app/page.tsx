import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
    const projects = [
        {
            title: "Nuvtra",
            description: "Where Thoughts Take Flight.",
            imageUrl: "/images/nuvtra-screenshot.png",
            tags: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL"],
            liveUrl: "https://nuvtra.stefannasturas.com",
            repoUrl: "https://github.com/kLaz3r/nuvtra",
        },
        {
            title: "Retroweb",
            description: "Plei gayms",
            imageUrl: "/images/nuvtra-screenshot.png",
            tags: ["Yahoo Messenger", "Gruntz"],
            liveUrl: "https://nuvtra.stefannasturas.com",
            repoUrl: "https://github.com/kLaz3r/nuvtra",
        },
        {
            title: "Nuvtra",
            description: "Where Thoughts Take Flight.",
            imageUrl: "/images/nuvtra-screenshot.png",
            tags: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL"],
            liveUrl: "https://nuvtra.stefannasturas.com",
            repoUrl: "https://github.com/kLaz3r/nuvtra",
        },
    ];
    return (
        <div className="max-w-screen">
            <div className="flex items-center gap-20 justify-center mt-20 min-h-[calc(100vh-5rem)] text-foreground color-background">
                {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                })}
            </div>
        </div>
    );
}
