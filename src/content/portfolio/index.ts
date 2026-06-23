import hero from "@/src/content/portfolio/hero.json";
import stats from "@/src/content/portfolio/stats.json";
import services from "@/src/content/portfolio/services.json";
import projects from "@/src/content/portfolio/projects.json";
import playground from "@/src/content/portfolio/playground.json";
import stack from "@/src/content/portfolio/stack.json";
import career from "@/src/content/portfolio/career.json";
import resume from "@/src/content/portfolio/resume.json";
import achievements from "@/src/content/portfolio/achievements.json";
import type {
  AchievementEntry,
  CareerEntry,
  PlaygroundCard,
  PortfolioHero,
  PortfolioStat,
  ProjectCard,
  ResumeData,
  ServiceCard,
  TechCategory,
} from "@/src/types/portfolio";

export const portfolioHero = hero as PortfolioHero;
export const portfolioStats = stats as PortfolioStat[];
export const portfolioServices = services as ServiceCard[];
export const portfolioProjects = projects as ProjectCard[];
export const portfolioPlayground = playground as PlaygroundCard[];
export const portfolioStack = stack as TechCategory[];
export const portfolioCareer = career as CareerEntry[];
export const portfolioResume = resume as ResumeData;
export const portfolioAchievements = achievements as AchievementEntry[];

export function sortPortfolioProjects(projects: ProjectCard[] = portfolioProjects) {
  return [...projects].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    if (left.heroPriority !== right.heroPriority) {
      return left.heroPriority - right.heroPriority;
    }

    return left.name.localeCompare(right.name);
  });
}

export function getFeaturedPortfolioProjects(limit = 2) {
  return sortPortfolioProjects().filter((project) => project.featured).slice(0, limit);
}

export function getProjectPreviewSrc(project: ProjectCard) {
  if (project.image) {
    return project.image;
  }

  if (project.url) {
    return `https://image.thum.io/get/width/1600/${project.url}`;
  }

  return "";
}
