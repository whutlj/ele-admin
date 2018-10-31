import Vue from 'vue';
import Router from 'vue-router';
// 布局文件，这个思想很重要，之前自己理解为，只有有共同的部分，path中某一个路径一定一样，但是，只要那个布局文件一样即可，恍然大悟
import Layout from '@/views/layout/index';

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
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
];

export const asyncRouter = [
  {
    path: '/permission',
    redirect: '/permission/index',
    component: Layout,
    alwayShow: true,
    meta: {
      title: 'permission',
      icon: 'permission',
      noCache: true,
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PerimissionPage',
        meta: {
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'PerimissionDirective'
      }
    ]
  }, {
    path: '/document',
    component: Layout,
    redirect: '/document/index',
    children: [{
      path: 'index',
      component: () => import('@/views/document/index'),
      name: 'Document',
      meta: {title: 'document', icon: 'document', noCache: true}
    }]
  }
]; // always show on the root menu
export default new Router({
  mode: 'history',
  routes: constantRouter.concat(asyncRouter)
});
