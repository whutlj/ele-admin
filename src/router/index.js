import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 *  hidden: true if `hidden:true` will not show in the sidebar(default: flase)
 */
export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/redirect',
    component: () => import('@/views/redirect/index'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/Helloworld'),
    name: 'Helloworld'
  }
];
export default new Router({
  routes: constantRouter
});
