import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

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
    element: <Navigate to="HomePage" />,
  },
];
