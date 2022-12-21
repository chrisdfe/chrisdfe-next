import slugify from 'slugify';

import { ArtworkInput, Artwork } from '../types/Artwork';

export const getArtworkSlugFromName = (name: string) => slugify(name || "", { lower: true });

const createArtwork = (artworkInput: ArtworkInput): Artwork => {
  const slug = getArtworkSlugFromName(artworkInput.name);

  return {
    ...artworkInput,
    slug
  };
};

const createArtworks = (inputs: ArtworkInput[]): Artwork[] =>
  inputs.map(createArtwork);

export const artworks = createArtworks([
  {
    name: "1976 Hitachi portable VTR for Sony 1\" type C",
    src: "325.png"
  },
  {
    name: "1976 Hitachi portable VTR for Sony 1\" type C",
    src: "310-5.png"
  },
  {
    name: "1976 Hitachi portable VTR for Sony 1\" type C",
    src: "309-square.png"
  },
  {
    name: "1976 Hitachi portable VTR for Sony 1\" type C",
    src: "307-5.png"
  },
  {
    name: "1976 Hitachi portable VTR for Sony 1\" type C",
    src: "304_square.png"
  },
  {
    name: "1976 Hitachi portable VTR for Sony 1\" type C",
    src: "300-1.png"
  },
]);

export const getProjectFromSlug = (slug: string) => artworks.find(artwork => artwork.slug === slug);