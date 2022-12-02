import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "@core/store";
import { selectIsAuth } from "@core/store/auth/selectors";

const AuthGuardComponent = () => {
  const isSignedIn = useAppSelector(selectIsAuth);
  if (!isSignedIn) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export const AuthGuard = memo(AuthGuardComponent);
