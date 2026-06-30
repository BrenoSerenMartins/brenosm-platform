import projectsData from "@/src/content/projects.json";

export type ProjectType = "project" | "experience";

type RawProject = {
  id?: unknown;
  title?: unknown;
  role?: unknown;
  period?: unknown;
  description?: unknown;
  image?: unknown;
  url?: unknown;
  technologies?: unknown;
  type?: unknown;
};

export type ProjectItem = {
  id: string;
  title: string;
  role?: string;
  period?: string;
  description: string;
  image: string;
  url?: string;
  technologies: string[];
  type: ProjectType;
};

function readText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : fallback;
}

function readOptionalText(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

const projectFallbackImage = "/projects/platform-portfolio/cover.svg";

function normalizeProject(project: RawProject, index: number): ProjectItem {
  const title = readText(project.title, "Projeto em destaque");

  return {
    id: readText(project.id, `project-${index}`),
    title,
    role: readOptionalText(project.role),
    period: readOptionalText(project.period),
    description: readText(
      project.description,
      "Projeto digital desenvolvido com foco em execução, produto e experiência de uso.",
    ),
    image: readText(project.image, projectFallbackImage),
    url: readOptionalText(project.url),
    technologies: Array.isArray(project.technologies)
      ? project.technologies
        .filter((technology): technology is string => typeof technology === "string")
        .map((technology) => technology.trim())
        .filter(Boolean)
      : [],
    type: project.type === "experience" ? "experience" : "project",
  };
}

const normalizedProjects = (projectsData as RawProject[]).map(normalizeProject);
export const portfolioProjects = normalizedProjects.filter((project) => project.type === "project");
export const experienceProjects = normalizedProjects.filter((project) => project.type === "experience");
