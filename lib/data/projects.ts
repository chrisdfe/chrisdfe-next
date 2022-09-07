import slugify from 'slugify';

import { ProjectInput, Project } from '../types/Project';

export const getProjectSlugFromName = (name: string) => slugify(name || "", { lower: true });

const createProject = (projectInput: ProjectInput): Project => {
  const slug = getProjectSlugFromName(projectInput.name);

  return {
    ...projectInput,
    slug
  };
};

const createProjects = (projectInputs: ProjectInput[]): Project[] =>
  projectInputs.map(createProject);

export const featuredProject = createProject(
  {
    name: "Valerie Madison Fine Jewelry",
    type: "freelance",
    description: "Redesigning and rebuilding valeriemadison.com",
    tools: ['Shopify', 'Liquid', 'SCSS', 'Typescript', 'UI Design', 'Design Systems', "Adobe Illustrator/Photoshop/XD"],
    skills: ['UI/UX Design', 'Front End Development'],
    links: [
      {
        title: "site",
        href: "http://valeriemadison.com"
      }
    ],
    blocks: []
  },
);

export const projects = createProjects([
  {
    name: "OOT Tracker",
    type: "personal",
    description: "A personal app for tracking collectables in Ocarina of Time",
    tools: ["React.js", "styled-components", "node.js"],
    skills: ['UI/UX Design', 'Front End Development'],
    links: [
      {
        title: "live",
        href: "http://oot-tracker.herokuapp.com/",
      },
      {
        title: "repo",
        href: "https://github.com/chrisdfe/oot-tracker",
      },
    ],
    blocks: []
  },
  {
    name: "Poképod",
    type: "personal",
    description: "A tiny showcase app",
    tools: ["Vue.js", "styled-components", "node.js"],
    skills: ['UI/UX Design', 'Front End Development'],
    blocks: []
  },
  {
    name: "sweaterparrot",
    type: "personal",
    description: "An ongoing personal art project",
    tools: ['Cinema4D', 'Adobe Illustrator'],
    skills: ['UI/UX Design', 'Front End Development'],
    blocks: []
  },
]);

export const getProjectFromSlug = (slug: string) => projects.find(project => project.slug === slug);