"use client";

import { BLUR_DATA_URL } from "@/lib/blur-data-url";
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-background-secondary/20 backdrop-blur-md min-h-70 w-80 p-5 rounded-2xl border shadow-lg shadow-brand-primary/20 border-brand-primary/50">
      <Image
        className="pb-2 aspect-video rounded-lg"
        alt={t("projects.screenshotAlt", { title: props.title })}
        src={props.imageUrl}
        width={300}
        height={200}
        loading="lazy"
        quality={75}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="320px"
      />
      <h3 className="font-montserrat font-bold pb-1 text-4xl text-foreground">
        {props.title}
      </h3>
      <h2 className="font-montserrat">{props.description}</h2>
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
          className="font-montserrat border border-brand-primary/50 text-foreground bg-background-secondary text-sm px-4 py-1.5 rounded-full hover:bg-brand-primary hover:text-background transition-colors cursor-pointer"
          href={props.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projects.liveSite")}
        </a>
        <a
          className="font-montserrat border border-brand-primary/50 text-foreground bg-background-secondary text-sm px-4 py-1.5 rounded-full hover:bg-brand-primary hover:text-background transition-colors cursor-pointer"
          href={props.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projects.github")}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
