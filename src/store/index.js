import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedulePosts: [],
  },
  mutations: {
    schedulePost(state, post) {
      state.schedulePosts.push(post);
    },
  },
  actions: {
    schedulePost({ commit }, post) {
      commit('schedulePost', post);
    },
  },
  modules: {
  },
});
