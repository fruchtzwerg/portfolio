import { basename } from 'path';
import Matter from 'gray-matter';

interface Slide {
  title: string;
  background: string;
  info: string;
}

export const getSlides = (files: string[]) =>
  files
    .map(file => {
      const slug = basename(file, '.md');
      const frontmatter = Matter.read(file).data as Slide;

      return {
        ...frontmatter,
        slug,
        order: parseInt(slug.split('-')[0]),
      };
    })
    .sort((a, b) => a.order - b.order);
