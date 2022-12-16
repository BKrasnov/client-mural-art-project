import { FC, memo } from "react";

import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";
import { TitleBox } from "../components/TitleBox";

import styles from "./PersonalAreaPage.module.css";

const PersonalAreaPageComponent: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.wrapper}>
          <TitleBox />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export const PersonalAreaPage = memo(PersonalAreaPageComponent);
