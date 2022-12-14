import { memo } from "react";

import styles from "./Quote.module.css";

function getQuote() {
  return (
    <>
      раскрасим <mark className={styles.grey}>серые</mark> будни <mark className={styles.pink}>ярким </mark>муралом!
    </>
  );
}

const quote = getQuote();

const QuoteComponent = () => (
  <div className={styles.quote}>
    <span>{quote}</span>
  </div>
);

export const Quote = memo(QuoteComponent);
