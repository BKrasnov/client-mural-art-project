import { memo } from "react";

import { Events } from "./components/Events";
import { Info } from "./components/Info";
import { Quote } from "./components/Quote";

import styles from "./Home.module.css";

const HomeComponent = () => (
  <main className={styles.content}>
    <div>
      <img className={styles.content__image} alt="" />
    </div>
    <Info />
    <Quote />
    <Events/>
  </main>
);

export const Home = memo(HomeComponent);
