import { FC, memo } from "react";

import { Sidebar } from "src/features/personal-area/components/Sidebar";

import { Outlet } from "react-router-dom";

import styles from "./PersonalAreaPage.module.css";

import { TitleBox } from "../../components/TitleBox";

const PersonalAreaPageComponent: FC = () => (
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

export const PersonalAreaPage = memo(PersonalAreaPageComponent);
