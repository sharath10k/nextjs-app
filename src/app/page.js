"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { ClientJS } from "clientjs";

const DynamicFooter = dynamic(() => import("@/components/Footer"));
const DynamicMainBanner = dynamic(() => import("../shared/mainBanner"));
const DynamicRegister = dynamic(() => import("@/comp/register"));
const RouteButton = dynamic(() => import("@/components/RouteButton"));

export default function Home() {
  // Create a new ClientJS object
  const client = new ClientJS();

  // Get the client's fingerprint id
  const fingerprint = client.getFingerprint();

  return (
    <>
    <h1>hello</h1>
    <h1> client fingerprint id {fingerprint} </h1>
    {/* <Header/>
  
  <h1>ddd</h1>
    <main >
      <div className={styles.description}>
        <DynamicRegister/>
      </div>
    </main>
    <DynamicMainBanner/>
    <DynamicFooter/>
    <RouteButton/> */}
    </>
  );
}
