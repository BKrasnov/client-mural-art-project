import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { homeRoutes } from '../../features/home/routes';
import { muralRoutes } from '../../features/mural/routes';

// import { animeRoutes } from '../features/anime/routes';

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to="/" />,
  },
  ...muralRoutes,
  ...homeRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
