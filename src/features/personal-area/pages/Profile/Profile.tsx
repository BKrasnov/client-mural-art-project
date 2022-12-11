import { FC, memo } from "react";

import { Achievements } from "./components/Achievements";
import { Events } from "./components/Events";
import { Info } from "./components/Info";

import styles from "./Profile.module.css";

const ProfileComponent: FC = () => {

  return (
    <main className={styles.profile}>
      <Info/>
      <Achievements/>
      <Events/>
    </main>
  );
};

export const Profile = memo(ProfileComponent);
