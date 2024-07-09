import styles from "./page.module.css";
import Header from "@/components/Header";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.description}>
        <h1>hi hello world</h1>
      </div>
    </main>
  );
}
