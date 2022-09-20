import { FC, memo } from "react";

import "../../Header.css";

const HeaderPanelComponent: FC = () => {
  return (
    <div className="header__panel">
      HeaderPanel
    </div>
  );
};

export const HeaderPanel = memo(HeaderPanelComponent);
