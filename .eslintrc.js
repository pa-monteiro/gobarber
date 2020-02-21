module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", //para não usar o this.model
    "no-param-reassign": "off", //para manipular os req
    "camelcase": "off", //não necessário ser camelcase
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], //unica variavel para deixar no código sem usar é a do next (middlewares)
  },
};
