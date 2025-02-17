import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/shedule',
      name: 'shedule',
      component: () => import('../pages/ShedulePage.vue'),
    },
    {
      path: '/training_sessions',
      name: 'training_sessions',
      component: () => import('../pages/TrainingSessionsPage.vue'),
    },
    {
      path: '/rooms_list',
      name: 'rooms_list',
      component: () => import('../pages/RoomsListPage.vue'),
    },
    {
      path: '/users_list',
      name: 'users_list',
      component: () => import('../pages/UsersPage.vue'),
    },
    {
      path: '/study_groups',
      name: 'study_groups',
      component: () => import('../pages/StudyGroupsPage.vue'),
    },
    {
      path: '/devices_list',
      name: 'devices_list',
      component: () => import('../pages/DevicesListPage.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/SettingsPage.vue'),
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../pages/ArchivePage.vue'),
    },
    
  ],
})

export default router
