const recommended = {
  'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  'no-unused-vars': 'error',
  '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
  '@typescript-eslint/no-explicit-any': 'warn',
  'import/order': [
    'warn',
    {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object'],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'internal',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: [],
    },
  ],
};

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:astro/recommended'],
  ignorePatterns: ['!**/*', '**/icons', '**/public', '**/.astro', 'env.d.ts'],
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.ts', '*.tsx', '*.vue'],
      parser: '@typescript-eslint/parser',
      rules: {
        ...recommended,
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    }
  ],
};
