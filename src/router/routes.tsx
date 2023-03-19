import { RouteObject } from 'react-router-dom';
import Pages from '../pages';
import { PatternLayout } from '../util';

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
    element: (
      <PatternLayout>
        <Pages.FragmentPage />
      </PatternLayout>
    ),
    id: 'Fragment',
    routerGroup: 'Components',
  },
  {
    path: '/profiler',
    element: (
      <PatternLayout>
        <Pages.ProfilerPage />
      </PatternLayout>
    ),
    id: 'Profiler',
    routerGroup: 'Components',
  },
];

export default ROUTES;
