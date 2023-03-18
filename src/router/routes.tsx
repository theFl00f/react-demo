import React, { RouteObject } from 'react-router-dom';
import Pages from '../pages';

export type RouterGroupType = 'Components' | 'Ungrouped';

export type RouteType = Required<
  Pick<RouteObject, 'path' | 'element' | 'id'> & {
    routerGroup: RouterGroupType;
  }
>;

export const ROUTES: RouteType[] = [
  {
    path: '/',
    element: <Pages.HomePage />,
    id: 'Home',
    routerGroup: 'Ungrouped',
  },
  {
    path: '/fragment',
    element: <Pages.FragmentPage />,
    id: 'Fragment',
    routerGroup: 'Components',
  },
];

export default ROUTES;
