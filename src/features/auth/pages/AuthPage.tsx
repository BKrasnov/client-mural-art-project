import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthPageComponent: FC = () => (
  <>
    <Outlet />
  </>
);

export const AuthPage = memo(AuthPageComponent);
