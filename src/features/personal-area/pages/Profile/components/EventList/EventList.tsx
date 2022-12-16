import { FC, memo } from "react";

import { EventCard } from "../EventCard";

import styles from "./EventList.module.css";

const eventCards = [
  {
    id: "1",
    title: "Фестиваль 2023 'Юные сердца'",
    date: "20 июля - 27 июня",
    link: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/events%2Fevent_card-2.png?alt=media&token=4f1c065f-e60a-46c3-920c-728537c8483a",
  },
  {
    id: "2",
    title: "Зимний челлендж 2023 'Сибирская зима'",
    date: "15 ноября - 2 декабря",
    link: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/events%2Fevent_card-1.png?alt=media&token=29671158-2e76-4577-9bc3-800448631c3d",
  },
];

const EventListComponent: FC = () => {
  return (
    <div className={styles.events}>
      <h3>Мои завершенные мероприятия</h3>
      <ul className={styles.events__list}>
        {eventCards.map(eventCard => {
          return <EventCard key={eventCard.id} {...eventCard} />;
        })}
      </ul>
    </div>
  );
};

export const EventList = memo(EventListComponent);
