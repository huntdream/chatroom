import { lazy } from 'react';

/**
 * route config
 * path
 * name
 * component
 * exact
 * children
 */

const routes = [
  {
    path: '/',
    name: 'Index',
    exact: true,
    nav: true,
    component: lazy(() => import('../containers/Index/index'))
  },
  {
    path: '/new',
    name: 'New',
    exact: true,
    nav: true,
    component: lazy(() => import('../containers/New'))
  },
  {
    path: '/article/:link',
    name: 'Page',
    exact: false,
    nav: false,
    component: lazy(() => import('../containers/Page'))
  }
  /**
   * {
   *  name:'诗意'
   * }
   */
];

export default routes;
