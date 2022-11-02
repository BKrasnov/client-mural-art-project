import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Profile } from "./pages/Profile";

const PersonalAreaPage = lazy(() =>
  import("./pages/PersonalAreaShared/PersonalAreaPage").then((module) => ({ default: module.PersonalAreaPage }))
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
