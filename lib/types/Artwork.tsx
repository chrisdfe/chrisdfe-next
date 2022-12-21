export type ArtworkInput = {
  name: string,
  src: string;
};

export type Artwork = ArtworkInput & {
  slug: string,
};