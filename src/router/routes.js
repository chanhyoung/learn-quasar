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
        path: 'profile',
        component: () => import('pages/study/quasar/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () =>
              import('pages/study/quasar/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () =>
              import('pages/study/quasar/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () =>
              import('pages/study/quasar/profile/ProfileTagged.vue'),
          },
        ],
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
