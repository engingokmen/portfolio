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
    <footer className={styles.footer}>
      <ProfileImage />
      <p>{`${firstName} ${lastName}`}</p>
      <div className={styles.textGroup}>
        <a href={`email:${emailLink}`} className={styles.link}>
          {emailDisplay}
        </a>
        <a href={`tel:${phoneLink}`} className={styles.link}>
          {phoneDisplay}
        </a>
      </div>
    </footer>
  );
};
