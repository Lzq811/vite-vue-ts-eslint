// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-labels': ['warn', { allowLoop: true }],
    'no-unused-vars': 'off',
    'vue/no-mutating-props': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-vars': 'off',
    'vue/prop-name-casing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-template-shadow': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
