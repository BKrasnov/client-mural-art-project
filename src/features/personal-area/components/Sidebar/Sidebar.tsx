import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { authLogout } from "src/store/auth/dispatchers";
import { useAppDispatch } from "src/store";

import logo from "@static/logoSibirianMural.png";

import styles from "./Sidebar.module.css";

const menuItem = [
  {
    name: "Личный кабинет",
    address: "personal-area/profile",
  },
  {
    name: "Подать заявку",
    address: "/personal-area/apply",
  },
  {
    name: "Галерея работ",
    address: "/personal-area/murals",
  },
  {
    name: "Настройки",
    address: "/settings",
  },
];

const SidebarComponent: FC = () => {
  const dispatch = useAppDispatch();

  /** User logout */
  const handleSubmitUserLogout = () => {
    dispatch(authLogout());
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <img className={styles.logo} src={logo} alt="" />
      </div>
      <ul className={styles.sidebar__menu}>
        {menuItem.map(item => {
          return (
            <li key={item.name} className={styles.sidebar__link}>
              <Link to={item.address}>
                <button className={styles.sidebar__button}>
                  <span>{item.name}</span>
                </button>
              </Link>
            </li>
          );
        })}
        <li className={styles.sidebar__link}>
          <a href="/">
            <button onClick={handleSubmitUserLogout} className={styles.sidebar__button}>
              <span>Выход</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Sidebar = memo(SidebarComponent);
