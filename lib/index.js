'use strict'

const standard = require('stylelint-config-standard')

module.exports = {
  rules: Object.assign({}, standard.rules, {
    // don't care about these
    'color-hex-case': null,
    'color-hex-length': null,
    'string-quotes': null, // who cares
    'block-no-empty': null, // need this for CSS modules sometimes

    // CSS modules support
    'selector-pseudo-class-no-unknown': [
      true, {
        ignorePseudoClasses: [
          'local',
          'global'
        ]
      }
    ],

    // does not handle specific cases
    'selector-pseudo-class-parentheses-space-inside': null,

    'property-no-unknown': [true, {
      ignoreProperties: [
        'composes',
        'backdrop-filter'
      ]
    }],

    'declaration-empty-line-before': null,

    // stricter rules
    'function-url-quotes': "never",
    'function-url-scheme-whitelist': ["https", "data"]
  })
}
