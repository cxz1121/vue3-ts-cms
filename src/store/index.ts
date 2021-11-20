import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'state.name'
    }
  }
})

export default store
