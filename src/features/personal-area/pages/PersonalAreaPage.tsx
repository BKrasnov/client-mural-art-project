import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

const PersonalAreaPageComponent: FC = () => (
  <>
    <Outlet />
  </>
);

export const PersonalAreaPage = memo(PersonalAreaPageComponent);