import { FC, memo } from "react";

import styles from "./Profile.module.css"

import avatar from "@static/avatar.jpg"

const ProfileComponent: FC = () => (
  <div className={styles.profileInfo}>
    <div>
      <img className={styles.profileInfo__avatar} src={avatar} alt="" />
    </div>
    <div className={styles.profileInfo__content}>
    </div>
  </div>
);

export const Profile = memo(ProfileComponent);
