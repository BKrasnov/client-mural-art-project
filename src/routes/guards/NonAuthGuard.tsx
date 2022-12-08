import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "src/store";
import { selectIsAuth } from "src/store/auth/selectors";

const NonAuthGuardComponent = () => {
  const isAuthUser = useAppSelector(selectIsAuth);
  if (isAuthUser) {
    return <Navigate to="/personal-area/profile" />;
  }
  return <Outlet />;
};

export const NonAuthGuard = memo(NonAuthGuardComponent);
