

/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 100,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
