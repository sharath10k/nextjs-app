import styles from "./page.module.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(()=> import ("@/components/Footer"))
const DynamicMainBanner = dynamic(()=> import ("../shared/mainBanner"))

export default function Home() {

  return (<>
  <Header/>
    <main >
      <div className={styles.description}>
        <h1>hi hello world</h1>
      </div>
    </main>
    <DynamicMainBanner/>
    <DynamicFooter/>
    </>
  );
}
