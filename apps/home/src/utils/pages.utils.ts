type Frontmatter = Record<string, unknown> & { title: string; order: number };

export type MaybePage = Record<string, unknown> & {
  url: string;
  frontmatter?: Frontmatter;
  title?: string;
  order?: number;
};

export type Page = Required<Pick<MaybePage, 'title' | 'order'>> & MaybePage;

const isPage = (page: MaybePage): page is Page => 'title' in page && 'order' in page;

export const getPages = (globs: MaybePage[]) =>
  globs
    .filter(page => !page.url.includes('_'))
    .map(({ frontmatter, ...props }) => ({ ...props, ...frontmatter }))
    .filter(isPage)
    .sort((a, b) => a.order - b.order);
