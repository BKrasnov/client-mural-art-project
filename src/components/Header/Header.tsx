import { FC, memo } from "react";

import "./Header.css";

const HeaderComponent: FC = () => {
  return (
    <header className="header">
      <div className="header-title">Header</div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
