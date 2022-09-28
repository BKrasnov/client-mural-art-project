import { FC, memo } from "react";

const LoaderComponent: FC = () => {
  return <div>Loading...</div>
};

export const Loader = memo(LoaderComponent);
