module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  globals: {
    Ai: true,
    AIGIS: true
  },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['warn', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': ['warn', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-lonely-if': 'error',
    'no-useless-return': 'error',
    'no-else-return': 'error',
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'no-undef-init': 'error',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-useless-concat': 'warn',
    'rest-spread-spacing': ['error', 'never'],
    'prefer-template': 'warn',
    'no-useless-rename': 'error',
    'no-useless-computed-key': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error', 'time', 'timeEnd', 'info'] }] : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prettier/prettier': 'off'
  }
}
