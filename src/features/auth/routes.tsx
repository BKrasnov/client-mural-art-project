import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { NonAuthGuard } from "@core/routes/guards/NonAuthGuard";

import { LoginForm } from "./components/LoginForm";
import { RegistrarionForm } from "./components/RegisterForm/RegisterForm";

const AuthPage = lazy(() => import("./pages/AuthPage").then(module => ({ default: module.AuthPage })));

export const authRoutes: RouteObject[] = [
  {
    element: <NonAuthGuard />,
    children: [
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
    ],
  },
];
