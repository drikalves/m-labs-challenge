import Vue from 'vue';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('datetime', Datetime);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
