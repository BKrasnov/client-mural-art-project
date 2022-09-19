import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const MuralPage = lazy(() =>
  import("./pages/MuralPage").then((module) => ({ default: module.MuralPage }))
);

export const muralRoutes: RouteObject[] = [
  {
    path: "mural",
    element: <MuralPage />,
  },
];
