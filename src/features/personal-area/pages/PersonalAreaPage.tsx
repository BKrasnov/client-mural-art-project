import { FC, memo } from "react";

import { Sidebar } from "@components/Sidebar";

import { Outlet } from "react-router-dom";

import styles from "./PersonalAreaPage.module.css"

const PersonalAreaPageComponent: FC = () => (
  <div className={styles.container}>
    <Sidebar />
    <Outlet />
  </div>
);

export const PersonalAreaPage = memo(PersonalAreaPageComponent);
