import { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

import { AuthStateProvider } from "@components/authStateProvider";
import { ErrorPage } from "@components/ErrorPage";

import { personalAreaRoutes } from "src/features/personal-area/routes";
import { homeRoutes } from "src/features/home/routes";
import { authRoutes } from "src/features/auth/routes";

const routes: RouteObject[] = [
  {
    element: <AuthStateProvider />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      ...homeRoutes,
      ...authRoutes,
      ...personalAreaRoutes,
    ],
  },
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
