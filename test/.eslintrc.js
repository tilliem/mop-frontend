/* eslint-disable prefer-object-spread/prefer-object-spread */
const parent = require('../.eslintrc')

module.exports = Object.assign({}, parent, {
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  rules: Object.assign({}, parent.rules, {
    'no-unused-expressions': ['off']
  })
})
