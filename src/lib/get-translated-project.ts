import { graphicsProjects, GraphicsProject } from "@/data/graphics-projects";
import { projects as webProjects } from "@/data/projects";
import { getTranslation, Language } from "@/translations";

export interface TranslatedWebProject {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

export function getWebProjects(lang: Language): TranslatedWebProject[] {
  const t = getTranslation(lang);

  return webProjects.map((project, index) => {
    const projectKey =
      index === 0
        ? "photoweave"
        : index === 1
          ? "nuvtra"
          : "retroweb";

    return {
      ...project,
      title: t.projectData[projectKey].title,
      description: t.projectData[projectKey].description,
    };
  });
}

export interface TranslatedGraphicsProject extends GraphicsProject {
  translatedTitle: string;
  translatedType: string;
  translatedFinish: string;
  translatedDescription: string;
}

export function getGraphicsProjects(lang: Language): TranslatedGraphicsProject[] {
  const t = getTranslation(lang);

  return graphicsProjects.map((project) => {
    const projectTranslation =
      t.graphicsProjects[project.id as keyof typeof t.graphicsProjects];

    if (projectTranslation) {
      return {
        ...project,
        translatedTitle: projectTranslation.title,
        translatedType:
          t.graphicsTypes[project.type as keyof typeof t.graphicsTypes] ||
          project.type,
        translatedFinish:
          t.graphicsFinishes[project.finish as keyof typeof t.graphicsFinishes] ||
          project.finish,
        translatedDescription: projectTranslation.description,
      };
    }

    return {
      ...project,
      translatedTitle: project.title,
      translatedType: project.type,
      translatedFinish: project.finish,
      translatedDescription: project.description,
    };
  });
}

export function getGraphicsProject(
  id: string,
  lang: Language,
): TranslatedGraphicsProject | undefined {
  const projects = getGraphicsProjects(lang);
  return projects.find((p) => p.id === id);
}
