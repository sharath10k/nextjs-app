import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Images from "@/components/Images";


export default function Home() {
  return (<>
  <Header/>
    <main >
      <div className={styles.description}>
        <h1>hi hello world</h1>
      </div>
    </main>
    <Images/>
    <Footer/>
    </>
  );
}
