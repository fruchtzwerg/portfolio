export type Transformer = ReturnType<typeof scale | typeof translate>;

export const scale = (value: number) => `scale(${value})` as const;
export const translate = (x: number, y: number = 0) =>
  `translate(${x}px, ${y}px)` as const;

export const transform = (...transformers: Transformer[]) =>
  transformers.join(' ');
