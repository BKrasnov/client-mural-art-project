import { FC, memo } from "react";

import { useAppSelector } from "src/store";
import { selectUser } from "src/store/auth/selectors";

import styles from "./Info.module.css";

const InfoComponent: FC = () => {
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
      <div>
        <img className={styles.profile__avatar} src={user.avatar ?? userDefault.avatar} alt="avatar" />
      </div>
      <div className={styles.profile__content}>
        <div className={styles.profile__names}>
          <div>
            <span className="profileInfo__fullname">
              {user.firstName} {user.lastName}
            </span>
          </div>
          <div>
            <span className="profileInfo__username">{user.nickName ?? "Ник отсутствует"}</span>
          </div>
        </div>
        <div className={styles.social}>
          <a href="https://web.telegram.org/" className={styles.social__itemTg}>
            <span>VK</span>
          </a>
          <a href="https://vk.com/" className={styles.social__itemVk}>
            <span>TG</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Info = memo(InfoComponent);
