import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

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
        element: <LoginForm />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" />,
      },
    ],
  },
];
