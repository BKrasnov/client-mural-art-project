import { FC, memo } from "react";

import styles from "./EventItem.module.css";

interface IEventItemProps {
  readonly title: string;
  readonly description: string;
  readonly link: string | undefined;
  readonly location: string;
  readonly date: string;
}

const EventItemComponent: FC<IEventItemProps> = IEventItemProps => {
  const { title, description, link, location, date } = IEventItemProps;

  return (
    <div className={styles.event}>
      <div className={styles.event__content}>
        <img className={styles.event__image} src={link} alt="event" />
        <div>
          <div className={styles.event__date}>
            <span>{date}</span>
          </div>
          <div className={styles.event__location}>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.event__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.event__description}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.event__buttonDetails}>
        Узнать подробности 
      </div>
    </div>
  );
};

export const EventItem = memo(EventItemComponent);
