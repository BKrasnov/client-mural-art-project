import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { AppDispatch, useAppSelector } from "src/store";
import { getUserFromCache } from "src/store/auth/dispatchers";
import { selectIsAuthLoading } from "src/store/auth/selectors";

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
