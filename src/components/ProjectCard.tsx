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
    return (
        <div className="bg-background-secondary/20 backdrop-blur-md min-h-70 w-80 p-5 rounded-2xl border shadow-lg shadow-brand-primary/20 border-brand-primary/50">
            <Image
                className="pb-2 aspect-video rounded-lg"
                alt={`${props.title} - Project Screenshot`}
                src={props.imageUrl}
                width={300}
                height={200}
                loading="lazy"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB//2Q=="
                sizes="320px"
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
