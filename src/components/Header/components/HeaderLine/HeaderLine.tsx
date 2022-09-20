import { FC, memo } from "react";

import "../../Header.css";


const HEADER_ITEM = {
  line: "header__line",
  container: "header__container",
  logo: "header__logo",
  menu: "header__menu", 
};

const HeaderLineComponent: FC = () => {

  return (
    <div className={HEADER_ITEM.line}>
      <div className={HEADER_ITEM.container}>
        <a href="/" className={HEADER_ITEM.logo}>
          <img src="" alt="logo" />
        </a>
        <ul className={HEADER_ITEM.menu}>
          <li className="menu__item">Events</li>
          <li className="menu__item">Murals</li>
          <li className="menu__item">For Painters</li>
          <li className="menu__item">Contact</li>
        </ul>
        <div>Authorization</div>
      </div>
    </div>
  );
};

export const HeaderLine = memo(HeaderLineComponent);
