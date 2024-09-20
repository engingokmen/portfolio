import { settings } from "@/app/settings";
import { Heading } from "../title/title";
import { TitleType } from "../title/types";
import styles from "./styles.module.css";

const { title } = settings;

export const Header = () => {
  return (
    <header className={styles.header}>
      <Heading type={TitleType.h4}>{title}</Heading>
    </header>
  );
};
