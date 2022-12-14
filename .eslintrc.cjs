/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 100,
        semi: false,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
}
