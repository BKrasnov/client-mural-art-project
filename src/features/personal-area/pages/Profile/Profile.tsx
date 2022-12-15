import { FC, memo } from "react";

import { Achievements } from "./components/Achievements";
import { EventList } from "./components/EventList";
import { Info } from "./components/Info";

import styles from "./Profile.module.css";

const ProfileComponent: FC = () => {

  return (
    <main className={styles.profile}>
      <Info/>
      <Achievements/>
      <EventList/>
    </main>
  );
};

export const Profile = memo(ProfileComponent);
