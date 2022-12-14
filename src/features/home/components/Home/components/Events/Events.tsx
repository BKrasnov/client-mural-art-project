import { memo } from "react";

import { eventsInfo, events } from "./eventsText";

import { EventItem } from "../EventItem";

import styles from "./Events.module.css";

const EventsComponent = () => {
  return (
    <section className={styles.events}>
      <div className={styles.events__info}>
        <h1 className={styles.events__title}>{eventsInfo.title}</h1>
        <div className={styles.events__types}>
          <span className={styles.events__type}>{eventsInfo.type[0]}</span>
          <span className={styles.events__type}>{eventsInfo.type[1]}</span>
        </div>
        <div className={styles.events__list}>
          {events.map(event => {
            return <EventItem title={event.title} description={event.description} link={event.link} location={event.location} date={event.date} />;
          })}
        </div>
      </div>
    </section>
  );
};

export const Events = memo(EventsComponent);
