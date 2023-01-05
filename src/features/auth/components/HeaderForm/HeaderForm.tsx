import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderForm.module.css";

export const HeaderForm: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <ul className={styles.header__list}>
          <li className={styles.header__link}>
            <Link to={"/"}>
              <span>Logo</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
