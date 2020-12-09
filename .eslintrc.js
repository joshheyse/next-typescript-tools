module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['*.js'],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],

    'quotes': ['error', 'single'],

    'linebreak-style': ['error', 'unix'],

    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',

    // Why would you want unused vars?
    '@typescript-eslint/no-unused-vars': ['error'],

    // I suggest this setting for requiring return types on functions only where useful
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
  },
};

// .eslintrc.js
// module.exports = {
//   root: true,
//   env: {
//     node: true,
//     es6: true,
//   },
//   parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
//   ignorePatterns: ['node_modules[>', '.next/*', '.out/*', '.prettierrc.js', '.eslintrc.js', 'lint-staged.config.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
//   extends: ['eslint:recommended'],
//   overrides: [
//     // This configuration will apply only to TypeScript files
//     {
//       files: ['**/*.ts', '**/*.tsx'],
//       parser: '@typescript-eslint/parser',
//       parserOptions: {
//         project: './tsconfig.json'
//       },
//       settings: { react: { version: 'detect' } },
//       env: {
//         browser: true,
//         node: true,
//         es6: true,
//       },
//       extends: [
//         'airbnb-typescript',
//         'plugin:@typescript-eslint/recommended', // TypeScript rules
//         'plugin:react/recommended', // React rules
//         'plugin:react-hooks/recommended', // React hooks rules
//         'plugin:jsx-a11y/recommended', // Accessibility rules
//         'prettier/@typescript-eslint', // Prettier plugin
//         'plugin:prettier/recommended', // Prettier recommended rules
//       ],
//       rules: {
//         // We will use TypeScript's types for component props instead
//         'react/prop-types': 'off',
//
//         // No need to import React when using Next.js
//         'react/react-in-jsx-scope': 'off',
//
//         // This rule is not compatible with Next.js's <Link /> components
//         'jsx-a11y/anchor-is-valid': 'off',
//
//         // Why would you want unused vars?
//         '@typescript-eslint/no-unused-vars': ['error'],
//
//         // I suggest this setting for requiring return types on functions only where useful
//         '@typescript-eslint/explicit-function-return-type': [
//           'warn',
//           {
//             allowExpressions: true,
//             allowConciseArrowFunctionExpressionsStartingWithVoid: true,
//           },
//         ],
//         'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
//       },
//     },
//   ],
// }
