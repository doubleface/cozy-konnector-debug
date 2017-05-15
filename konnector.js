'use strict'

const {baseKonnector} = require('cozy-konnector-libs')

module.exports = baseKonnector.createNew({
  name: 'error',
  models: [],
  fetchOperations: [
    generateError
  ]
})

function generateError (requiredFields, items, data, next) {
  next('this is an error message')
}
