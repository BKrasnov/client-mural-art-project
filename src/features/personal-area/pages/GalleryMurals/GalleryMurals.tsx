import { FC, memo } from "react";

import { MuralsList } from "./components/MuralsList/MuralsList";
import { Filters } from "./components/Filters/Filters";

const GalleryMuralsComponent: FC = () => {
  return (
    <>
      <Filters />
      <MuralsList />
    </>
  );
};

export const GalleryMurals = memo(GalleryMuralsComponent);
