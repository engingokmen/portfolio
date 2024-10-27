import Image from "next/image";
import styles from "./styles.module.css";
import photo from "../../images/profile.jpg";

export const ProfileImage = () => {
  return (
    <Image
      src={photo}
      width={60}
      height={72}
      alt="personal-photo"
      className={styles.profileImage}
    />
  );
};
