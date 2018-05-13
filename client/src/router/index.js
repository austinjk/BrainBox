import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage/HomePage.vue';
import MRIPage from '@/components/MRIPage/MRIPage.vue';
import NewProjectPage from '@/components/NewProjectPage/NewProjectPage.vue';
import ProjectPage from '@/components/ProjectPage/ProjectPage.vue';
import ProjectSettingsPage from '@/components/ProjectSettingsPage/ProjectSettingsPage.vue';


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
    {
      path: '/project/new',
      name: 'NewProject',
      component: NewProjectPage
    },
    {
      path: '/project/',
      name: 'Project',
      component: ProjectPage
    },
    {
      path: '/project/:id/settings',
      name: 'ProjectSettings',
      component: ProjectSettingsPage
    }
  ],
});
