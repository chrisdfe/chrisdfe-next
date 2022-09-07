export type ProjectLink = {
  title: string,
  href: string,
};

export enum ProjectBlockType {
  Paragraph,
  Image
}

export type ProjectBlockParagraph = {
  type: ProjectBlockType.Paragraph,
  content: string;
};

export type ProjectBlockImage = {
  type: ProjectBlockType.Image,
  src: string,
  alt: string;
};

export type ProjectBlock = ProjectBlockParagraph | ProjectBlockImage;

export type ProjectInput = {
  name: string,
  type: string,
  description: string,
  links?: ProjectLink[],
  skills?: string[],
  tools?: string[],
  blocks: ProjectBlock[];
};

export type Project = ProjectInput & {
  slug: string,
};