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
    // {
    //   files: '*.json',
    //   parser: 'jsonc-eslint-parser',
    //   rules: {},
    // },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: 'typescript-eslint-parser-for-extra-files',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        ...recommended,
      },
    },
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
    },
    {
      // <script>
      files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['*.svelte'],
      extends: ['plugin:svelte/prettier'],
      parser: 'svelte-eslint-parser',
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: 'typescript-eslint-parser-for-extra-files',
        extraFileExtensions: ['.svelte'],
      },
      rules: {
        ...recommended,
      },
    },
  ],
};
