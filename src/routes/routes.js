import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('../../src/components/dashboards/student-dashboard/StudentDashboard.js')),
    exact: true
  },
//   {
//     path: 'users',
//     component: lazy(() => import('components/Users')),
//     exact: true
//   }
];

export default routes;