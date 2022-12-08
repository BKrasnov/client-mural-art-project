import { FC, memo } from "react";

import { Outlet } from "react-router-dom";

const GalleryMuralsComponent: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const GalleryMurals = memo(GalleryMuralsComponent);
