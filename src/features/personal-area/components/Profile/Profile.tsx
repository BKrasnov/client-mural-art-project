import { FC, memo } from "react";

import styles from "./Profile.module.css";

const ProfileComponent: FC = () => (
    <div>
      <div>Profile</div>
    </div>
);

export const Profile = memo(ProfileComponent);
