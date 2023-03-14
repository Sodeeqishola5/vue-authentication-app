import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
    products: []
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.isLoggedIn = value
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    login({ commit }, credentials) {
      // In a real app, this would send a request to a server to log the user in
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (credentials.username === 'user' && credentials.password === 'password') {
            const user = { username: credentials.username }
            commit('SET_LOGGED_IN', true)
            commit('SET_USER', user)
            resolve(user)
          } else {
            reject(new Error('Invalid username or password'))
          }
        }, 1000)
      })
    },
    logout({ commit }) {
      // In a real app, this would send a request to a server to log the user out
      commit('SET_LOGGED_IN', false)
      commit('SET_USER', null)
    },
    signup({ commit }, credentials) {
      // In a real app, this would send a request to a server to create a new user
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (credentials.username && credentials.email && credentials.password) {
            const user = { username: credentials.username }
            commit('SET_LOGGED_IN', true)
            commit('SET_USER', user)
            resolve(user)
          } else {
            reject(new Error('Invalid user information'))
          }
        }, 1000)
      })
    },
    loadProducts({ commit }) {
      // In a real app, this would send a request to a server to load products for the user
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(products => {
          commit('SET_PRODUCTS', products)
        })
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user,
    products: state => state.products
  }
})

export default store
