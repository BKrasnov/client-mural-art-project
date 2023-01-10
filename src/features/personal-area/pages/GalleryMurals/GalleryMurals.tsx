import { FC, memo } from "react";

import { Outlet } from "react-router-dom";
import { Filters } from "./components/Filters";

const GalleryMuralsComponent: FC = () => {
  return (
    <>
      <Filters />
      <Outlet />
    </>
  );
};

export const GalleryMurals = memo(GalleryMuralsComponent);
