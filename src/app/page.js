import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Images from "@/components/Images";
import dynamic from "next/dynamic";

export default function Home() {
  const MainBanner = dynamic(()=> import ("../shared/mainBanner"))
  const Footer = dynamic(()=> import ("@/components/Footer"))

  return (<>
  <Header/>
    <main >
      <div className={styles.description}>
        <h1>hi hello world</h1>
      </div>
    </main>
    <Images/>
    <MainBanner/>
    <Footer/>
    </>
  );
}
