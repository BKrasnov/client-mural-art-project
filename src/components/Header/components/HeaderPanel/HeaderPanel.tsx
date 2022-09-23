  import { FC, memo } from "react";

  import { BsTelegram } from 'react-icons/bs';
  import { IoLogoVk } from "react-icons/io";

  import "../../Header.css";

  const HeaderPanelComponent: FC = () => {
    return (
      <div className="header__panel">
        <div className="header__social">
          <a href="/"><IoLogoVk/></a> 
          <a href="/"><BsTelegram/></a>
        </div>
        <div className="header__contact-mobile">
          79999999999
        </div>
        <noindex>
          <a href="/login/" rel="nofollow" className="header__link--cabinet">login</a>
        </noindex>
      </div>
    );
  };

export const HeaderPanel = memo(HeaderPanelComponent);
