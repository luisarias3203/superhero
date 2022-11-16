module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'init-declarations': ['error', 'always'],
    'no-unused-vars': ['error', { args: 'all' }],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/no-unused-state': 'error',
    'no-confusing-arrow': [
      'error',
      { allowParens: true, onlyOneSimpleParam: false },
    ],
  },
};
