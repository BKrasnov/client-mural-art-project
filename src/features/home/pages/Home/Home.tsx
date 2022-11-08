import { FC, memo } from "react";

import styles from "./Home.module.css";


const HomeComponent: FC = () => (
  <main className={styles.main}>
    <img className={styles.main__image}alt="" />
  </main>
);

export const Home = memo(HomeComponent);
