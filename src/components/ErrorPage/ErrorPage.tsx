import { FC, memo } from "react";

import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.css";

const ErrorPageComponent: FC = () => {
  return (
    <div className={styles.errorPage}>
      <h1>Этой страницы временно не существует</h1>
      <Link to={"/"}>
        <h2>Вернуться на главную</h2>
      </Link>
    </div>
  );
};

export const ErrorPage = memo(ErrorPageComponent);
