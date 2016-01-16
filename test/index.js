'use strict'

const execFile = require('child_process').execFile
const path = require('path')
const fs = require('fs')

const fixtures = path.join(__dirname, 'fixtures')

fs.readdirSync(fixtures).forEach(file => {
  if (file[0] === '.') return

  it(`Fixture: ${file}`, done => {
    execFile('./node_modules/.bin/stylelint', [
      '--config', 'lib/index.js',
      path.join(fixtures, file),
    ], (err, output) => {
      if (output[0]) console.error(output[0])
      if (output[1]) console.log(output[1])
      done(err)
    })
  })
})
