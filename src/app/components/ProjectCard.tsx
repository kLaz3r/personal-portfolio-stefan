import Image from "next/image";
import Link from "next/link";

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
        <div className="bg-background-secondary min-h-60 w-80 p-5 rounded-2xl border-1 shadow-lg shadow-brand-primary/20 border-brand-primary/50">
            <Image
                className="pb-2"
                alt={props.title}
                src={props.imageUrl}
                width={300}
                height={200}
            />
            <h1 className=" font-italiana pb-1 text-4xl text-foreground">
                {props.title}
            </h1>
            <h2 className="font-base">{props.description}</h2>
            {props.tags.map((tag) => {
                return (
                    <span
                        className="text-xs pr-2 text-text-secondary"
                        key={tag}
                    >
                        {tag}
                    </span>
                );
            })}
            <div className="flex pt-2 w-full items-center justify-between">
                <Link
                    className="text-sora border-1 border-brand-primary/50 text-foreground bg-background-secondary font-xl px-4 py-1.5 rounded-full"
                    href={props.liveUrl}
                >
                    Live Site
                </Link>
                <Link
                    className="text-sora border-1 border-brand-primary/50 text-foreground bg-background-secondary font-xl px-4 py-1.5 rounded-full"
                    href={props.repoUrl}
                >
                    Github
                </Link>
            </div>
        </div>
    );
};
export default ProjectCard;
