import { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { getUserFromCache } from "src/store/auth/dispatchers";
import { selectIsAuthLoading } from "src/store/auth/selectors";

import { Loader } from "@components/Loader";

/** Check if the user is authorized to access the cache.  */
const AuthStateProviderComponent = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);

  useEffect(() => {
    dispatch(getUserFromCache());
  }, [dispatch]);

  return isLoading ? <Loader /> : <Outlet />;
};

export const AuthStateProvider = memo(AuthStateProviderComponent);
