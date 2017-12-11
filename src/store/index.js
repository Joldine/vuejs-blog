import Vue from 'vue'
import Vuex from 'vuex'
import { getArticleListApi } from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    ADD_ARTICLE: (state, article) => {
      state.articles.push(article)
    },
    CLEAR_ARTICLE: (state) => {
      state.articles = []
    }
  },
  actions: {
    getArticleList ({ commit }, page) {
      const pagination = { page: page, size: 10 }
      getArticleListApi(pagination).then(response => {
        response.data.forEach(article => {
          commit('ADD_ARTICLE', article)
        })
      })
    }
  },
  getters: {
    getArticles: state => {
      return state.articles
    },
    getArticleById: (state) => (number) => {
      console.log(state.articles)
      return state.articles.find(article => article.number === parseInt(number))
    }
  }
})

export default store
