const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions((options = { themes: [] }) => ({ addVariant }) => {
  const { themes } = options;

  themes.forEach(theme => addVariant(theme, `[data-theme=${theme}] &`));
});
