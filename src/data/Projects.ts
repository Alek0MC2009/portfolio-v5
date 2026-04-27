export interface Project {
  name: string;
  description: string;
  url: string;
  languages: string[];
  img: string;
}

export const ProjectsList: Project[] = [
  {
    name: "Este portfolio",
    description: "Un portfolio simple hecho con astro",
    url: "https://github.com/Alek0MC2009/portfolio-v5",
    languages: ["Html", "css", "typescript", "astro"],
    img: "../../public/favicon.svg",
  },
];
