"use client";

import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveUrl: string;
    repoUrl: string;
};

const ProjectCard = (props: ProjectCardProps) => {
    console.log("ProjectCardProps:", props);

    return (
        <div className="bg-background-secondary min-h-60 w-80 p-5 rounded-2xl border shadow-lg shadow-brand-primary/20 border-brand-primary/50">
            <Image
                className="pb-2"
                alt={props.title}
                src={props.imageUrl}
                width={300}
                height={200}
            />
            <h1 className="font-italiana pb-1 text-5xl text-foreground">
                {props.title}
            </h1>
            <h2 className="font-base">{props.description}</h2>
            {props.tags.map((tag) => {
                return (
                    <span
                        className="text-xs pr-2 font-light text-text-secondary"
                        key={tag}
                    >
                        {tag}
                    </span>
                );
            })}
            <div className="flex pt-2 w-full items-center justify-between">
                <a
                    className="font-sora border border-brand-primary/50 text-foreground bg-background-secondary text-sm px-4 py-1.5 rounded-full hover:bg-brand-primary hover:text-background transition-colors cursor-pointer"
                    href={props.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Site
                </a>
                <a
                    className="font-sora border border-brand-primary/50 text-foreground bg-background-secondary text-sm px-4 py-1.5 rounded-full hover:bg-brand-primary hover:text-background transition-colors cursor-pointer"
                    href={props.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
