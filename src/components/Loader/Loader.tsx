import { LinearProgress } from "@mui/material";
import { FC, memo } from "react";

const LoaderComponent: FC = () => {
  return (
    <>
      <LinearProgress></LinearProgress>
    </>
  );
};

export const Loader = memo(LoaderComponent);
