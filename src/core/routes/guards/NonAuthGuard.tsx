import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "@core/store";
import { selectIsAuth } from "@core/store/auth/selectors";

const NonAuthGuardComponent = () => {
  const isAuthUser = useAppSelector(selectIsAuth);
  if (isAuthUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export const NonAuthGuard = memo(NonAuthGuardComponent);
