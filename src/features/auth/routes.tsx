import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { RegistrarionForm } from "./components/RegisterForm/RegisterForm";

const AuthPage = lazy(() => import("./pages/AuthPage").then((module) => ({ default: module.AuthPage })));

export const authRoutes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        path: "registration",
        element: <RegistrarionForm />,
      },
      {
        path: "login",
        // element: <LoginPage />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" />,
      },
    ],
  },
];
