import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedulePosts: [
      {
        socialMedia: 'instagram',
        date: '09/09/2020',
        time: '14:45h',
        text: 'Aqui vai o texto descritivo desse post',
        image: '../assets/images/photo1.jpg',
        status: 'scheduled',
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
