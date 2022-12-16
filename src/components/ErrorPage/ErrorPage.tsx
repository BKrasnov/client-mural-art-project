import { FC, memo } from "react";

import { Link } from "react-router-dom";

import { useAppSelector } from "src/store";
import { selectIsAuth } from "src/store/auth/selectors";

import styles from "./ErrorPage.module.css";

const ErrorPageComponent: FC = () => {
  const isSignedIn = useAppSelector(selectIsAuth);

  return (
    <div className={styles.wrapper}>
      <h1>Этой страницы временно не существует</h1>
      {isSignedIn ? (
        <Link to={"/personal-area/profile"}>
          <h2>Вернуться в профиль</h2>
        </Link>
      ) : (
        <Link to={"/"}>
          <h2>Вернуться на главную</h2>
        </Link>
      )}
    </div>
  );
};

export const ErrorPage = memo(ErrorPageComponent);
