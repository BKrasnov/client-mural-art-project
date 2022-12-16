import { FC, memo } from "react";

import styles from "./Footer.module.css";


const FooterComponent: FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}></div>
    </footer>
  );
};  

export const Footer = memo(FooterComponent);
