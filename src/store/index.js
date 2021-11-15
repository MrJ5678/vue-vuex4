import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      counter: 100,
      books: [
        { name: "book1", price: 20, count: 1 },
        { name: "book2", price: 30, count: 1 },
        { name: "book3", price: 40, count: 1 },
      ],
    }
  },
  getters: {
    totalPrice(state) {
      return state.books.reduce((accumulator, book) => {
        return accumulator + book.price * book.count
      }, 0)
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
})

export default store
