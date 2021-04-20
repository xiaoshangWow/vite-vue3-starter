import { createStore } from 'vuex'

const defaultStore = {
  count: 0
}

// Create a new store instance
export default createStore({
  state() {
    return defaultStore
  },
  mutations: {
    increment(state: typeof defaultStore) {
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultStore) {
      return state.count * 2
    }
  }
})
