import { settings } from "@/app/settings";
import { ProfileImage } from "../profileImage";
import styles from "./styles.module.css";

const {
  firstName,
  lastName,
  emailLink,
  emailDisplay,
  phoneLink,
  phoneDisplay,
} = settings;

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <ProfileImage />
      <p>{`${firstName} ${lastName}`}</p>
      <div className={styles.textGroup}>
        <a href={`email:${emailLink}`}>{emailDisplay}</a>
        <a href={`tel:${phoneLink}`}>{phoneDisplay}</a>
      </div>
    </div>
  );
};
