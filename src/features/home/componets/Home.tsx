import { FC, memo } from "react";

import styles from "./Home.module.css";

const HomeComponent: FC = () => (
    <main className={styles.main}>
      <div>Привет</div>
    </main>
);

export const Home = memo(HomeComponent);
