import styles from "./page.module.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Main />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
