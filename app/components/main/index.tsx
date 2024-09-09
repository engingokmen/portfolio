import styles from "./styles.module.css";
import { settings } from "@/app/settings";

const { projectList } = settings;

export const Main = () => {
  const listItems = projectList.map((i) => <li key={i}>{i}</li>);

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>{listItems}</ul>
    </div>
  );
};
