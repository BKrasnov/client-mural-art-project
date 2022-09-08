import { FC, memo, useState } from "react";

import "./Header.css";

const HeaderComponent: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="icon" onClick={() => setIsOpened(!isOpened)}>
           {/* {isOpened ? <ChevronLeftIcon /> : <MenuIcon />} */}
        </div>
        <div className="header-title">Header</div>
      </div>
    </div>
  );
};

export const Header = memo(HeaderComponent);
