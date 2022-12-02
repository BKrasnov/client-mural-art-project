import { FC, memo } from "react";

import styles from "./Sidebar.module.css";

import logotype from "@static/logotype.png";
import { authLogout } from "@core/store/auth/dispatchers";
import { useAppDispatch } from "@core/store";

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
            <li className={styles.sidebar__link}>
              <a href={item.address}>
                <button className={styles.sidebar__button}>
                  <span>{item.name}</span>
                </button>
              </a>
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
