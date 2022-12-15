import { FC, memo } from "react";

import { useAppSelector } from "src/store";
import { selectUser } from "src/store/auth/selectors";

import logoVk from "src/static/logoVk.svg";
import logoTg from "src/static/logoTg.svg";

import styles from "./Info.module.css";

const InfoComponent: FC = () => {
  const socialLink = {
    vk: "https://vk.com/",
    tg: "https://web.telegram.org/",
  };

  const userDefault = {
    id: "1",
    firstName: "Имя",
    lastName: "Фамилия",
    nickname: "Никнейм",
    avatar: "https://clck.ru/32sHcA",
  };
  const user = useAppSelector(selectUser);

  if (user === null) return null;

  return (
    <div className={styles.profile__details}>
      <img className={styles.profile__avatar} src={user.avatar ?? userDefault.avatar} alt="avatar" />
      <div className={styles.profile__content}>
        <div className={styles.profile__names}>
          <div>
            <span>{user.firstName + " " + user.lastName}</span>
          </div>
          <div>
            <span>{user.nickName ?? "Ник отсутствует"}</span>
          </div>
        </div>
        <div className={styles.social}>
          <a href={socialLink.tg} className={styles.social__itemTg}>
            <img src={logoTg} alt="logoTg" />
          </a>
          <a href={socialLink.vk} className={styles.social__itemVk}>
            <img src={logoVk} alt="logoVk" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Info = memo(InfoComponent);
