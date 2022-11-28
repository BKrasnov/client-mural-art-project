import { AuthGuard } from "@core/routes/guards/AuthGuard";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Profile } from "./pages/Profile";

const PersonalAreaPage = lazy(() => import("./pages/PersonalAreaPage").then(module => ({ default: module.PersonalAreaPage })));

export const personalAreaRoutes: RouteObject[] = [
  {
    element: <AuthGuard />,
    children: [
      {
        path: "personal-area",
        element: <PersonalAreaPage />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="personal-area/profile" />,
  },
];
