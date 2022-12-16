import { FC, memo } from "react";
import { useLocation } from "react-router-dom";

import styles from "./TitleBox.module.css";

const location = {
  title: "",
  profile: "/personal-area/profile",
  murals: "/personal-area/murals",
  apply: "/personal-area/apply",
};

const TitleBoxComponent: FC = () => {
  const currentLocation = useLocation();
  if (currentLocation.pathname === location.profile) {
    location.title = "Галерея работ";
  }
  if (currentLocation.pathname === location.murals) {
    location.title = "Галерея работ";
  }
  if (currentLocation.pathname === location.apply) {
    location.title = "Подать заявку";
  }

  return (
    <>
      <div className={styles.titleBox}>
        <h1>{location.title}</h1>
        <h2>id</h2>
      </div>
    </>
  );
};

export const TitleBox = memo(TitleBoxComponent);
