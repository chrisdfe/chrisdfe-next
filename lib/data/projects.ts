import slugify from 'slugify';

import { ProjectInput, Project } from '../types/Project';

export const getProjectSlugFromName = (name: string) =>
  'projects/' +
  slugify(name || "", { lower: true });

const createProject = (projectInput: ProjectInput): Project => {
  const slug = getProjectSlugFromName(projectInput.name);

  return {
    ...projectInput,
    slug
  };
};

const createProjects = (projectInputs: ProjectInput[]): Project[] =>
  projectInputs.map(createProject);

export const designProject = createProject(
  {
    name: "Valerie Madison Fine Jewelry",
    type: "client",
    description: "Redesigning and rebuilding valeriemadison.com",
    tools: ['Shopify', 'Liquid', 'SCSS', 'Typescript', 'UI Design', 'Design Systems', "Adobe Illustrator/Photoshop/XD"],
    skills: ['UI/UX Design', 'Front End Development'],
    links: [
      {
        title: "site",
        href: "http://valeriemadison.com"
      },
    ],
    blocks: []
  },
);

export const projects = createProjects([
  designProject,
  {
    name: "sweaterparrot",
    type: "personal",
    description: "personal art & illustration",
    tools: ["Cinama4D", "Illustrator", "Photoshop"],
    skills: ['art'],
    links: [
      {
        title: "instagram",
        href: "https://instagram.com/sweaterparrot",
      },
      {
        title: "twitter",
        href: "https://twitter.com/sweaterparrot",
      },
    ],
    blocks: []
  },
  {
    name: "OoT Tracker",
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
    links: [
      {
        title: "live",
        href: "http://poke-pod.herokuapp.com/",
      },
      {
        title: "repo",
        href: "https://github.com/chrisdfe/pokepod",
      },
    ],
    blocks: []
  },
  {
    name: "Ziggy",
    type: "personal",
    description: "An experimental MIDI sequencer made with Vue.js",
    tools: ["Vue.js"],
    links: [
      {
        title: "live",
        href: "http://ziggy-sequencer.herokuapp.com/",
      },
      {
        title: "repo",
        href: "https://github.com/chrisdfe/ziggy",
      },
    ],
    blocks: []
  },
  {
    name: "treeify-tabbed-file",
    type: "personal",
    description: "A small node utility",
    tools: ["Vue.js"],
    links: [
      {
        title: "repo",
        href: "https://github.com/chrisdfe/treeify-tabbed-file",
      },
    ],
    blocks: []
  },
  // {
  //   name: "Unannounced Game",
  //   type: "personal",
  //   description: "Release date, title, and most other things about this game TBA",
  //   tools: ["Unity", "C#", "Cinema4D"],
  //   skills: ['UI/UX Design', 'Front End Development'],
  //   blocks: []
  // },
]);

export const getProjectFromSlug = (slug: string) => projects.find(project => project.slug === slug);