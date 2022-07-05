import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [] as any,
    book: {},
  },
  getters: {
    allBooks: (state) => state.books
  },
  mutations: {
    BOOKS_STATE(state, payload) {
      state.books = [...payload];
      console.log("Ciao",state.books)
    }
  },
  actions: {
    async getBooks(context) {  //todo await async --> try catch
      const response = await axios.get('http://localhost:3001/api/books')
      console.log("Test",response)
      context.commit('BOOKS_STATE', response.data);
    },
    async postBooks(context) {  //todo await async --> try catch
      const article = { isbn: Number, title: Number, summary: String, etat: [], status: [], year: Number}
      const response = await axios.post('http://localhost:3001/api/books', article)
      console.log("Test",response)
      context.commit('POSTB_STATE', response.data);
    },
    async putBooks(context) {  //todo await async --> try catch
      const response = await axios.put('http://localhost:3001/api/books/:id')
      console.log("Test",response)
      context.commit('PUTB_STATE', response.data);
    },
    async getSingleBook(context) {  //todo await async --> try catch
      const response = await axios.get('http://localhost:3001/api/books/:id')
      console.log("Test",response)
      context.commit('GETSB_STATE', response.data);
    },
    async deleteBooks(context) {  //todo await async --> try catch
      const response = await axios.delete('http://localhost:3001/api/books/:id')
      console.log("Test",response)
      context.commit('DELB_STATE', response.data);
    },
  },
  modules: {
  }
});