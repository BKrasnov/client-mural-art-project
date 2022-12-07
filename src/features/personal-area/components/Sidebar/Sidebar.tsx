import { FC, memo } from "react";
import { Link } from "react-router-dom";

import logotype from "@static/logotype.png";
import { authLogout } from "@core/store/auth/dispatchers";
import { useAppDispatch } from "@core/store";

import styles from "./Sidebar.module.css";

const menuItem = [
  {
    name: "Главная",
    address: "personal-area/profile",
  },
  {
    name: "Подать заявку",
    address: "/",
  },
  {
    name: "Галерея работ",
    address: "/personal-area/murals",
  },
  {
    name: "Настройки",
    address: "/",
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
        <img className={styles.logo} src={logotype} alt="" />
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
