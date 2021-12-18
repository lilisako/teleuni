module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['tailwindcss'],
  // カスタムルールを追記
  rules: {
  }
}
