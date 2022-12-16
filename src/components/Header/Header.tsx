import { FC, memo } from "react";

import { Link } from "react-router-dom";

import { useAppSelector } from "src/store";
import { selectIsAuth } from "src/store/auth/selectors";

import styles from "./Header.module.css";

const HeaderComponent: FC = () => {
  const isSignedIn = useAppSelector(selectIsAuth);

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
              <span>{isSignedIn ? "Личный кабинет" : "Войти"}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
