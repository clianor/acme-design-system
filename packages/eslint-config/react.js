const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/typescript',
      '@vercel/style-guide/eslint/react',
    ].map(require.resolve),
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project,
  },
  plugins: ['only-warn'],
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    '**/*.css',
    'tsup.config.ts',
    'vitest.config.ts',
    'vitest.setup.ts',
  ],
  // add rules configurations here
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: ['key', 'ref'],
      },
    ],
    'import/no-default-export': 'off',
    'import/order': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'eslint-comments/require-description': 'off',
    'unicorn/filename-case': 'off',
    'no-console': 'warn',
    'no-alert': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'react/jsx-pascal-case': ['warn', { allowNamespace: true }],
    'react/hook-use-state': 'off',
  },
};
