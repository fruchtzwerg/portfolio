module.exports = {
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 100,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
