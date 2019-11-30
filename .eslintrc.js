module.exports = {
  env: {
    'es6': true,
    'browser': true,
    'jest/globals': true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
        paths: ['src', 'assets']
      }
    }
  },
  globals: {
    __DEV__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'better-styled-components',
    'import',
    'jest',
    'jsx-a11y',
    'react-hooks',
    'react-native',
    'react'
  ],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 'warn',
    'comma-dangle': ['error', 'never'],
    'global-require': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'no-return-assign': ['error', 'except-parens'],
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'react/forbid-foreign-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'warn',
    'semi': ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ]
  }
}
