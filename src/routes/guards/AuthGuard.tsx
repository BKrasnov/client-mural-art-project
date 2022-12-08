import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "src/store";
import { selectIsAuth } from "src/store/auth/selectors";

const AuthGuardComponent = () => {
  const isSignedIn = useAppSelector(selectIsAuth);
  if (!isSignedIn) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export const AuthGuard = memo(AuthGuardComponent);
