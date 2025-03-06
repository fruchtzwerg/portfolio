import Matter from 'gray-matter';

interface Slide {
  title: string;
  background: string;
  info: string;
}

export const getSlides = (files: string[]) =>
  files
    .map(file => {
      const frontmatter = Matter.read(file).data as Slide;

      const slug = file.split('/index.md').at(0)?.split('/').at(-1);
      const order = file.split('-')[0].split('/').at(-1);

      return {
        ...frontmatter,
        slug,
        order: parseInt(order ?? '0'),
      };
    })
    .sort((a, b) => a.order - b.order);
