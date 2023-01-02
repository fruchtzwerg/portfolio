export const byDate = (
  a: { frontmatter: { date: string | Date } },
  b: { frontmatter: { date: string | Date } }
) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();

export const formatDate = (date: Date | string) =>
  Intl.DateTimeFormat(['en-US'], {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
