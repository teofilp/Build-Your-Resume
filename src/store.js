import Vue from 'vue'
import Vuex from 'vuex'
import { strictEqual } from 'assert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: {
      title: 'Untitled'
    }
  },
  getters: {
    getTitle(state) {
      return state.resume.title;
    }
  },
  mutations: {

  },
  actions: {

  }
})
