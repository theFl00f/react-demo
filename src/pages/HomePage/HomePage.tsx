import { groupBy, toPairs } from 'lodash';
import { FC } from 'react';
import { ROUTES } from '../../router';
import HomePageLink from './HomePageLink';

const HomePage: FC = () => {
  const groupedRoutes = toPairs(groupBy(ROUTES, (route) => route.routerGroup));

  return (
    <ul>
      {groupedRoutes.map(([routerGroup, routes]) => (
        <li key={routerGroup}>
          {routerGroup}
          <ul>
            {routes.map((route, index) => (
              <li key={`${route.id}-home-page-link`}>
                <HomePageLink route={route} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
