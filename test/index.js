'use strict'

/* eslint-env mocha */
/* eslint no-console: 0 */

const execFile = require('child_process').execFile
const path = require('path')
const fs = require('fs')

const fixtures = path.join(__dirname, 'fixtures')

fs.readdirSync(fixtures).forEach(file => {
  if (file[0] === '.') return

  it(`Fixture: ${file}`, done => {
    execFile('./node_modules/.bin/stylelint', [
      '--config', './lib/index.js',
      path.join(fixtures, file)
    ], (err, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      done(err)
    })
  })
})
