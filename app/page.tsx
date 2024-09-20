import { ListItems } from "./components/linkList";
import { settings } from "./settings";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.listContainer}>
      <ListItems list={settings.projectList} />
    </div>
  );
}
