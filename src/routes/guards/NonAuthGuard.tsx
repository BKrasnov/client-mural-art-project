import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "src/store";
import { selectIsAuth, selectUser } from "src/store/auth/selectors";
import { selectIsLoadingUser } from "src/store/user/selectors";

const NonAuthGuardComponent = () => {
  const isSignedIn = useAppSelector(selectIsAuth);
  const isLoadingUser = useAppSelector(selectIsLoadingUser)
  const user = useAppSelector(selectUser);

  if(user?.firstName === null && user.lastName === null) {
    return <Navigate to="/auth/profile" />;
  } else {
    if (isSignedIn && !isLoadingUser) {
      return <Navigate to="/personal-area/profile" />;
    }
  }
  return <Outlet />;
};

export const NonAuthGuard = memo(NonAuthGuardComponent);
