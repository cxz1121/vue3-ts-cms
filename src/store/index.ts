import { createStore } from 'vuex'
import { IRootState } from './types'
import loginModule from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'state.name',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export default store
