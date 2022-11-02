import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Profile } from "./components/Profile";

const PersonalAreaPage = lazy(() =>
  import("./pages/PersonalAreaPage").then((module) => ({ default: module.PersonalAreaPage }))
);


export const personalAreaRoutes: RouteObject[] = [
  {
    path: "personal-area",
    element: <PersonalAreaPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      }
    ]
  },
];
