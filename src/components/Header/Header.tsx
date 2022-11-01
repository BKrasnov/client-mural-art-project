import { FC, memo } from "react";

import styles from "./Header.module.css";


const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>

    </header>
  );
};

export const Header = memo(HeaderComponent);
