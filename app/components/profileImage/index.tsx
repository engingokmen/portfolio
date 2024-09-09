import Image from "next/image";
import styles from "./styles.module.css";
import { settings } from "@/app/settings";

const { photoUrl } = settings;

export const ProfileImage = () => {
  return (
    <Image
      src={photoUrl}
      width={60}
      height={72}
      alt="personal-photo"
      className={styles.profileImage}
    />
  );
};
