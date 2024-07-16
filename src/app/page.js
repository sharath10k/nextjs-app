import styles from "./page.module.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(()=> import ("@/components/Footer"))
const DynamicMainBanner = dynamic(()=> import ("../shared/mainBanner"))
const DynamicRegister = dynamic(()=> import ("@/comp/register"))
const RouteButton = dynamic( ()=> import ("@/components/RouteButton"))


export default function Home() {

  return (<>
  <Header/>
    <main >
      <div className={styles.description}>
        <DynamicRegister/>
      </div>
    </main>
    <DynamicMainBanner/>
    <DynamicFooter/>
    <RouteButton/>
    </>
  );
}
