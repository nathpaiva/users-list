// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'import',
    'react',
    'react-hooks',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-children-prop': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-empty-pattern': 'warn',
    'react/display-name': 'warn',
    // Right error rules
    'import/no-unresolved': 'error',
    '@typescript-eslint/ban-types': ['warn'],
    'prettier/prettier': ['error'],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './test/**/*',
          './testsConfig/**/*.ts',
          '**/*.test.tsx',
          '**/*.test.ts',
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}
