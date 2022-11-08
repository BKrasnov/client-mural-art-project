import { FC, memo } from "react";

import styles from "./Footer.module.css";


const FooterComponent: FC = () => {

  return (
    <footer className={styles.footer}>
      Footer
    </footer>
  );
};  

export const Footer = memo(FooterComponent);
