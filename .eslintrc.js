module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
  ],
  plugins: ['prettier', 'vue'],
  rules: {
    semi: 2, // 行末分号，根据编码习惯选择添加，这里配置的不加分号
    'no-console': 0,
    'prettier/prettier': 2,
    'comma-dangle': [2, 'always-multiline'],
    'max-len': 0,
    'space-before-function-paren': [0, 'always'],
    'no-unused-expressions': [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'arrow-body-style': [0, 'never'],
    'vue/multi-word-component-names': 0,
    'func-names': 0,
    'prefer-const': 0,
    'no-extend-native': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-eval': 0,
    'no-continue': 0,
    'no-unused-vars': [
      0,
      {
        ignoreRestSiblings: true,
      },
    ],
    quotes: 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  parserOptions: {
    // parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 8,
    // requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': 'node',
  },
};
