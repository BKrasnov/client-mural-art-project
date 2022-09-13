import { FC, memo, useState } from "react";

import { BiAlignJustify } from "react-icons/bi";
import { AiFillCaretLeft } from "react-icons/ai";

import "./Header.css";

const HeaderComponent: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="header">
      <div className="icon" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <AiFillCaretLeft /> : <BiAlignJustify />}
      </div>
      <div className="header-title">Header</div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
