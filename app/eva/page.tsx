import styles from "./styles.module.css";

export default function EvaPage() {
  return (
    <section className={styles.container}>
      <iframe
        title="Eva"
        src="/eva-app/index.html"
        className={styles.frame}
        allow="camera; microphone"
      />
    </section>
  );
}
