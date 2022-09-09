import { FC, memo } from "react";

import "./Footer.css";


const FooterComponent: FC = () => {

  return (
    <footer className="footer">
      Footer
    </footer>
  );
};  

export const Footer = memo(FooterComponent);
