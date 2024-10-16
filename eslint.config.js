import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];
