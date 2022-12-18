export const capitalize = (value: string) =>
  value
    .split(' ')
    .map(part => [part[0].toUpperCase(), part.slice(1).toLocaleLowerCase()].join(''))
    .join(' ');
