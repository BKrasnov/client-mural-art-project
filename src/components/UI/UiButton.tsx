import { FC } from "react";

import styles from "./UiButton.module.css";

interface UiButtonProps {
  children: React.ReactNode;
}

export const UiButton: FC<UiButtonProps> = ({ children }) => {
  return (
    <button type="submit" className={styles.uiButton}>
      {children}
    </button>
  );
};
