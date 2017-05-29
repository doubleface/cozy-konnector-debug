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
  if (requiredFields.login === 'OK') {
    return next()
  }
  next(requiredFields.login)
}
