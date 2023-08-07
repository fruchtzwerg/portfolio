/** @type {() => import('vite').Plugin} */
export const monorepoFix = () => ({
  name: 'monorepo-fix',
  apply: 'build',
  transform(code, id) {
    console.log(id);
    return null;
  },
});
