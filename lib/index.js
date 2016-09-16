'use strict'

const standard = require('stylelint-config-standard')

module.exports = {
  rules: Object.assign({}, standard.rules, {
    // don't care about these
    'color-hex-case': null,
    'color-hex-length': null,
    'string-quotes': null, // who cares
    'block-no-empty': null, // need this for CSS modules sometimes

    // ignores comments
    'rule-nested-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment']
    }],
    'rule-non-nested-empty-line-before': ['always-multi-line', {
      ignore: ['after-comment']
    }],

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

    'declaration-empty-line-before': null
  })
}
