export const byDate = (
  a: { data: { date: string | Date } },
  b: { data: { date: string | Date } }
) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime();

export const formatDate = (date: Date | string) =>
  Intl.DateTimeFormat(['en-US'], {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
