import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const PersonalAreaPage = lazy(() =>
  import("./pages/PersonalAreaPage").then((module) => ({ default: module.PersonalAreaPage }))
);

export const personalAreaRoutes: RouteObject[] = [
  {
    path: "personal-area",
    element: <PersonalAreaPage />,
  },
];
