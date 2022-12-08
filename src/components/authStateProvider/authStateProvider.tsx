import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { AppDispatch, useAppSelector } from "@core/store";
import { getUserFromCache } from "@core/store/auth/dispatchers";
import { selectIsAuthLoading } from "@core/store/auth/selectors";

import { Loader } from "@components/Loader";

const AuthStateProviderComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useAppSelector(selectIsAuthLoading);
  
  useEffect(() => {
    dispatch(getUserFromCache());
  }, [dispatch]);

  if(isLoading) {
    return (
      <Loader/>
    )
  }

  return <Outlet />;
};

export const AuthStateProvider = memo(AuthStateProviderComponent);
