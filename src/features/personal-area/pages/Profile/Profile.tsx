import { FC, memo } from "react";

import { Achievements } from "./components/Achievements";
import { EventList } from "./components/EventList";
import { Info } from "./components/Info";

const ProfileComponent: FC = () => {

  return (
    <main>
      <Info/>
      <Achievements/>
      <EventList/>
    </main>
  );
};

export const Profile = memo(ProfileComponent);
