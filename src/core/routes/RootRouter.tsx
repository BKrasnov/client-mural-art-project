import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { personalAreaRoutes } from '../../features/personal-area/routes';
import { homeRoutes } from '../../features/home/routes';
import { authRoutes } from 'src/features/auth/routes';


const routes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to="/" />,
  },
  ...homeRoutes,
  ...authRoutes,
  ...personalAreaRoutes
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
