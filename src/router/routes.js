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
      {
        path: 'breakpoints',
        component: () => import('pages/study/quasar/Breakpoints.vue'),
      },
      {
        path: 'helper-classes',
        component: () => import('pages/study/quasar/HelperClasses.vue'),
      },
      {
        path: 'flex-grid-1',
        component: () => import('pages/study/quasar/FlexGrid1.vue'),
      },
      {
        path: 'flex-grid-2',
        component: () => import('pages/study/quasar/FlexGrid2.vue'),
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
