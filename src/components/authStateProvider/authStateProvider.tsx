import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { getUserFromCache } from "@core/store/auth/dispatchers";
import { AppDispatch } from "@core/store";

const AuthStateProviderComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserFromCache());
  });

  return <Outlet />;
};

export const AuthStateProvider = memo(AuthStateProviderComponent);
