import { FC, memo } from "react";

import styles from "./Header.module.css";

const menuItem = [
  {
    name: "Художникам",
    address: "/",
  },
  {
    name: "Заказчикам",
    address: "/",
  },
  {
    name: "Личный кабинет",
    address: "/",
  },
];

const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        {menuItem.map(item => {
          return (
            <li className={styles.header__link}>
              <a href={item.address}>
                <span className={styles.header__textName}>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export const Header = memo(HeaderComponent);
