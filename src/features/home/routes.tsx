import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import { ErrorPage } from "@components/ErrorPage";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage }))
);

export const homeRoutes: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
];
