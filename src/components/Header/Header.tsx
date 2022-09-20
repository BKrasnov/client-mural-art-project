import { FC, memo } from "react";

import { HeaderLine } from "./components/HeaderLine";
import { HeaderPanel } from "./components/HeaderPanel";

import "./Header.css";

const HEADER = "header";

const HeaderComponent: FC = () => {
  return (
    <header className={HEADER}>
      <HeaderPanel/>
      <HeaderLine/>
    </header>
  );
};

export const Header = memo(HeaderComponent);
