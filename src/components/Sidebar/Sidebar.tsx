import { FC, memo } from "react";

import styles from "./Sidebar.module.css";

import logotype from "@static/logotype.png";

const menuItem = [
  {
    name: "Главная",
    address: "#/personal-area/profile",
  },
  {
    name: "Подать заявку",
    address: "/",
  },
  {
    name: "Галерея работ",
    address: "/",
  },
  {
    name: "Настройки",
    address: "/",
  },
  {
    name: "Выход",
    address: "/",
  },
];

const SidebarComponent: FC = () => (
  <div className={styles.sidebar}>
    <div><img className={styles.logo} src={logotype} alt="" /></div>
    <ul className={styles.sidebar__menu}>
      {menuItem.map((item) => {
        return (
          <li className={styles.sidebar__link}>
            <a href={item.address}>
              <button className={styles.sidebar__button}>
                <span>{item.name}</span>
              </button>
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export const Sidebar = memo(SidebarComponent);