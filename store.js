var createStore = require('store-emitter')

var initialState = {
  dataSet: []
}

function modifier (action, state) {
  if (action.type === 'LOAD_DATASET') {

  }
}

var store = createStore(modifier, initialState)

module.exports = store
