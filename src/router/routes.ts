import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Shop.vue') }],
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },
  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/KontaktPage.vue') }],
  },
  {
    path: '/impressum',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ImpressumPage.vue') },
    ],
  },
  {
    path: '/datenschutz',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/DPage.vue') }],
  },
  {
    path: '/um',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Maintanance.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
