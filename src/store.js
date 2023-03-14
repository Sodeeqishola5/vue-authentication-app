import Vuex from 'vuex'


export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null
  },
  mutations: {
    SET_IS_LOGGED_IN(state, value) {
      state.isLoggedIn = value
    },
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      // Simulate a login request to your API
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'user' && password === 'password') {
            const user = { username }
            commit('SET_IS_LOGGED_IN', true)
            commit('SET_USER', user)
            resolve(user)
          } else {
            reject(new Error('Invalid username or password'))
          }
        }, 1000)
      })
    },
    logout({ commit }) {
      commit('SET_IS_LOGGED_IN', false)
      commit('SET_USER', null)
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
  }
})
