module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': import.meta.env.VITE_APP_ENV === 'production' ? 'off' : 'warn',
    'no-debugger': import.meta.env.VITE_APP_ENV === 'production' ? 'error' : 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['src/api/**/*'],
      rules: {
        camelcase: 0,
      },
    },
  ],
}
