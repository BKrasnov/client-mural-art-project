import { FC, memo } from "react";

import styles from "./EventCard.module.css";

interface IEventCard {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly link: string;
}

const EventCardComponent: FC<IEventCard> = IEventCard => {
  const { title, date, link } = IEventCard;
  const style = { backgroundImage: `url(${link})` } as React.CSSProperties;
  return (
    <div style={style} className={styles.eventCard}>
      <div className={styles.eventCard__info}>
        <div>
          <span>{date}</span>
        </div>
        <div className={styles.eventCard__title}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export const EventCard = memo(EventCardComponent);
