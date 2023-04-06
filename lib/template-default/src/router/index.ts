import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/home';
import Demo from '../views/demo';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  },
];

const router = new VueRouter({ mode: 'hash', routes });

export default router;
