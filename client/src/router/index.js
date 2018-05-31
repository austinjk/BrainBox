import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage/HomePage';
import MRIPage from '@/components/MRIPage/MRIPage';
import NewProjectPage from '@/components/NewProjectPage/NewProjectPage';
import ProjectPage from '@/components/ProjectPage/ProjectPage';
import ProjectSettingsPage from '@/components/ProjectSettingsPage/ProjectSettingsPage';
import UserPage from '@/components/UserPage/UserPage';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
      component: NewProjectPage,
    },
    {
      path: '/project/:name',
      name: 'Project',
      component: ProjectPage,
    },
    {
      path: '/project/:id/settings',
      name: 'ProjectSettings',
      component: ProjectSettingsPage,
    },
    {
      path: '/user/:id',
      name: 'User',
      props: true,
      component: UserPage,
    },
  ],
});
