export default {
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/dva', '@umijs/plugins/dist/request'],
  dva: {},
  request: {},
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
    { path: '/detail/:id', component: 'detail' },
  ],
};
