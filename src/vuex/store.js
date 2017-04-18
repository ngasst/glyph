import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./modules'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newModules = require('./modules').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: newModules
    })
  })
}
