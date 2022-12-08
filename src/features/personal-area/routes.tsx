import { AuthGuard } from "@core/routes/guards/AuthGuard";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { Profile } from "./pages/Profile";
import { GalleryMurals } from "./pages/GalleryMurals";
import { MuralDetails } from "./pages/GalleryMurals/components/MuralDetails";
import { MuralsList } from "./pages/GalleryMurals/components/MuralsList";

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
          {
            path: "murals",
            element: <GalleryMurals />,
            children: [
              {
                path: "",
                element: <MuralsList />,
              },
              {
                path: "mural/:id",
                element: <MuralDetails />,
              },
            ],
          },
          {
            path: "*",
            element: <Navigate to="/personal-area/profile" />,
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
