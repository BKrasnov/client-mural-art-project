import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { AuthGuard } from "src/routes/guards/AuthGuard";

import { NonAuthGuard } from "src/routes/guards/NonAuthGuard";

import { LoginForm } from "./components/LoginForm";
import { ProfileForm } from "./components/ProfileForm";
import { RegistrarionForm } from "./components/RegisterForm";

const AuthPage = lazy(() => import("./pages/AuthPage").then(module => ({ default: module.AuthPage })));

export const authRoutes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        element: <NonAuthGuard />,
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
      {
        element: <AuthGuard />,
        children: [
          {
            path: "profile",
            element: <ProfileForm />,
          },
        ],
      },
    ],
  },
];
