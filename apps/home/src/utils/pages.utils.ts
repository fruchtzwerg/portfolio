type Frontmatter = Record<string, unknown> & { title: string; order: number };

type MaybePage = Record<string, unknown> & {
  url: string;
  frontmatter?: Frontmatter;
  title?: string;
  order?: number;
};

type Page = Required<Pick<MaybePage, 'title' | 'order'>> & MaybePage;

const isPage = (page: MaybePage): page is Page => 'title' in page && 'order' in page;

export const getPages = (globs: Page[]) =>
  globs
    .filter(page => !page.url.includes('_'))
    .map(({ frontmatter, ...props }) => ({ ...props, ...frontmatter }))
    .filter(isPage)
    .sort((a, b) => a.order - b.order);
