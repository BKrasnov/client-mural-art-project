import { FC, memo } from "react";

import { HeaderPanel } from "./components/HeaderPanel";
import { HeaderLine } from "./components/HeaderLine";

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
