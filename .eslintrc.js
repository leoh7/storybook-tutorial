module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      'warn',
      'as-needed',
    ],
    'class-methods-use-this': 1,
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'curly': [
      2,
      'all',
    ],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-default': 0,
    'indent': [
      2,
      2,
    ],
    'camelcase': 'off',
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/interactive-supports-focus': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/control-has-associated-label': 1,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'max-len': [
      2,
      120,
      4,
      {
        'ignoreUrls': true,
      },
    ],
    'no-alert': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-else-return': 0,
    'no-inner-declarations': 1,
    'no-lonely-if': 0,
    'no-mixed-requires': [
      1,
      {
        'grouping': true,
      },
    ],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 1,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': [
      2,
      {
        'allow': [],
      },
    ],
    'no-unused-vars': 1,
    'object-curly-newline': [
      2,
      {
        'consistent': true,
      },
    ],
    'prefer-destructuring': 1,
    'prefer-template': 0,
    'quote-props': 0,
    'react/button-has-type': 0,
    'react/jsx-closing-tag-location': 0,
    'react/default-props-match-prop-types': 1,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      {
        'extensions': [
          '.js',
          '.jsx',
        ],
      },
    ],
    // "react/jsx-first-prop-new-line": 0,
    'react/jsx-no-bind': [
      1,
      {
        'allowArrowFunctions': true,
      },
    ],
    'react/jsx-no-target-blank': 1,
    'react/jsx-one-expression-per-line': [
      1,
      {
        'allow': 'single-child',
      },
    ],
    'react/no-access-state-in-setstate': 1,
    'react/no-array-index-key': 1,
    'react/no-string-refs': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 1,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
