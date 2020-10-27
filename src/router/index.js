import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Scheduling from '../views/Scheduling.vue';
import Listing from '../views/Listing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/agendamento',
    name: 'Scheduling',
    component: Scheduling,
  },
  {
    path: '/listagem',
    name: 'Listing',
    component: Listing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
