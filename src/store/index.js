import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedulePosts: [
      {
        socialMedia: 'instagram', date: '2020-11-02T00:00:00.000Z', time: '2020-11-02T23:50:00.000Z', text: 'lorem', image: '', status: 'scheduled',
      },
    ],
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
