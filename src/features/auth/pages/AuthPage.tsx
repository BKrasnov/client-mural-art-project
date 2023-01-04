import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

import styles from "./AuthPage.module.css";

export const AuthPageComponent: FC = () => (
  <div className={styles.container}>
    <div className={styles.wrapperForm}>
      <Outlet />
    </div>
  </div>
);

export const AuthPage = memo(AuthPageComponent);
