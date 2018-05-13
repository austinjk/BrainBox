import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage/HomePage.vue';
import MRIPage from '@/components/MRIPage/MRIPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/mri',
      name: 'MRI',
      component: MRIPage,
    },
  ],
});
