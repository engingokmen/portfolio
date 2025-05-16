import { settings } from "@/app/settings";
import { ProfileImage } from "../profileImage";
import styles from "./styles.module.css";
import Image from "next/image";
import linkedinImage from "@/app/images/linkedin.png";
import { getLogo, Logo } from "../logos";

const {
  firstName,
  lastName,
  emailLink,
  emailDisplay,
  phoneLink,
  phoneDisplay,
  linkedinLink,
  linkedinDisplay,
  githubLink,
  githubDisplay,
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
        <a href={`${linkedinLink}`} className={styles.link}>
          <Image width={20} src={linkedinImage} alt="linkedin" />{" "}
          {linkedinDisplay}
        </a>
        <a href={`${githubLink}`} className={styles.link}>
          <Image
            width={20}
            height={20}
            src={getLogo(Logo.github).src}
            alt="github"
          />{" "}
          {githubDisplay}
        </a>
      </div>
    </footer>
  );
};
