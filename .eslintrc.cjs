module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'operator-linebreak': 'off',
    'import/extensions': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-restricted-syntax': 'warn',
    'no-use-before-define': 'off',
    'no-new': 'off',
    'function-paren-newline': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
