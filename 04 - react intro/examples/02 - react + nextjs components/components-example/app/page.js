import Image from "next/image";
import styles from "./page.module.css";
import hello from "@/components/Hello.js"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My React App hehe</h1>
        <p>hello</p>
        <HelloGroup></HelloGroup>
      </main>
    </div>
  );
}
