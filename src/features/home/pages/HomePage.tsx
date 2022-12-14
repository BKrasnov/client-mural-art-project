import { FC, memo } from "react";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import { Home } from "../components/Home";

import styles from "./HomePage.module.css";

const HomePageComponent: FC = () => (
  <div className={styles.container}>
    <Header />
    <Home />
    <Footer />
  </div>
);

export const HomePage = memo(HomePageComponent);
