import { FC } from "react";

import cn from "classnames"

import styles from "./UiButton.module.css";

interface UiSubmitButtonProps {

  classes?: string;
  children: React.ReactNode;
}

export const UiSubmitButton: FC<UiSubmitButtonProps> = ({ children, classes }) => {
  return (
    <button type="submit" className={cn(classes,  styles.uiButton)}>
      {children}
    </button>
  );
};
