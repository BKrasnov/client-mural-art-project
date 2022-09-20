import { FC, memo } from "react";

import "../../Header.css";

const HEADER_ITEM = {
  line: "header__line",
  container: "header__container",
  logo: "header__logo",
  menu: "header__menu",
};

const menuItem = ["Events", "Murals", "For Painters", "Contacts"];

const HeaderLineComponent: FC = () => {
  return (
    <div className={HEADER_ITEM.line}>
      <div className={HEADER_ITEM.container}>
        <a href="/" className={HEADER_ITEM.logo}>
          <img src="" alt="logo" />
        </a>
        <ul className={HEADER_ITEM.menu}>
          {menuItem.map((item) => (
            <li className="menu__item">{item}</li>
          ))}
        </ul>
        <div>Authorization</div>
      </div>
    </div>
  );
};

export const HeaderLine = memo(HeaderLineComponent);
