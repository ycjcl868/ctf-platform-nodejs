module.exports = {
  extends: "eslint-config-umi",
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'babel',
    'react',
    'compat',
  ],
  rules: {
    camelcase: 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { args: 'none' }],
    'max-len': 0,
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    "jsx-a11y/href-no-hash": "off",
    "react/no-deprecated": "off",
    'react/no-danger': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/no-find-dom-node': 0,
    'react/no-did-mount-set-state': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-did-update-set-state': 0,
    'react/prop-types': ['warn'],
    'react/jsx-filename-extension': 0,
    'react/sort-comp': 0,
    'react/require-default-props': 0,
    'react/no-typos': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'no-param-reassign': 0,
    'consistent-return': 0,
    'arrow-parens': ['warn'],
    'arrow-body-style': ['warn'],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],
  },
  globals: {
    appData: false,
  },
}