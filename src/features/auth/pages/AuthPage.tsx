import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

import { HeaderForm } from "../components/Header";

import styles from "./AuthPage.module.css";

export const AuthPageComponent: FC = () => (
  <>
    <HeaderForm/>
    <div className={styles.container}>
      <div className={styles.wrapperForm}>
        <Outlet />
      </div>
    </div>
  </>
);

export const AuthPage = memo(AuthPageComponent);
