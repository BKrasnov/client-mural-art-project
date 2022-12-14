import { FC, memo } from "react";

import styles from "./Header.module.css";

const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <ul className={styles.header__list}>
          <li className={styles.header__link}>
            <a href="/">
              <span>Художникам</span>
            </a>
          </li>
          <li className={styles.header__link}>
            <a href="/">
              <span>Заказчикам</span>
            </a>
          </li>
          <li className={styles.header__link}>
            <a href="/auth/login">
              <span>Войти</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
