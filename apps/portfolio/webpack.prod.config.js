const {
  SvgGeneratorWebpackPlugin,
} = require('@ngneat/svg-generator/webpack-plugin');

module.exports = (config, context) => {
  return {
    ...config,
    plugins: [
      new SvgGeneratorWebpackPlugin({
        watch: false,
        srcPath: './apps/portfolio/src/assets/icons',
        outputPath: './apps/portfolio/src/icons',
        svgoConfig: {
          plugins: ['removeDimensions'],
        },
      }),
    ],
  };
};
