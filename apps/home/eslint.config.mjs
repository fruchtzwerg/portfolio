import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

const recommendedRules = {
  'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  'no-unused-vars': 'error',
  '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
  '@typescript-eslint/no-explicit-any': 'warn',
  'import-x/order': [
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

export default tseslint.config(
  // Global ignores (replaces ignorePatterns)
  {
    ignores: ['**/icons/**', '**/public/**', '**/.astro/**', 'env.d.ts'],
  },

  // Base configs
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,

  // Prettier (disables conflicting rules)
  eslintConfigPrettier,
  eslintPluginPrettier,

  // Import-x plugin registration
  {
    plugins: {
      'import-x': eslintPluginImportX,
    },
  },

  // Custom rules for JS/TS/Vue files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      ...recommendedRules,
    },
  },

  // Astro files — use astro-eslint-parser with typescript-eslint inside
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...recommendedRules,
    },
  },

  // Svelte files — eslint-plugin-svelte recommended + typescript parser
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
    rules: {
      ...recommendedRules,
    },
  },

  // .cjs files — allow require()
  {
    files: ['**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Astro <script> tags (virtual .js/.ts files)
  {
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'off',
      'no-unused-vars': 'off',
    },
  },
);
