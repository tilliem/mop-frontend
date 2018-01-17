module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'capitalized-comments': ['error', 'always', {
      ignorePattern: '.*',
      ignoreInlineComments: true
    }],
    'no-underscore-dangle': ['off'],
    'no-alert': ['off'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['off']
  }
}
