const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/quasar',
    component: () => import('layouts/QuasarLayout.vue'),
    children: [
      {
        path: 'typography',
        component: () => import('pages/study/quasar/Typography.vue'),
      },
      {
        path: 'colors',
        component: () => import('pages/study/quasar/Colors.vue'),
      },
      {
        path: 'spacing',
        component: () => import('pages/study/quasar/Spacing.vue'),
      },
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
