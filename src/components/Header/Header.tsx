import { FC, memo } from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <ul className={styles.header__list}>
          <li className={styles.header__link}>
            <Link to={"/artists"}>
              <span>Художникам</span>
            </Link>
          </li>
          <li className={styles.header__link}>
            <Link to={"/clients"}>
              <span>Заказчикам</span>
            </Link>
          </li>
          <li className={styles.header__link}>
            <Link to={"/auth/login"}>
              <span>Войти</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
