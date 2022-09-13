import { FC, memo } from "react";

import { CircularProgress } from "@mui/material";

const LoaderComponent: FC = () => {
  return <CircularProgress color="secondary" />;
};

export const Loader = memo(LoaderComponent);
