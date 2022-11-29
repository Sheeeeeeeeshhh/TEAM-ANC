import styles from "./Weblogo2.module.css";
import weblogo from "../public/anclogo.png";
import Image from "next/image";

export default function Weblogo2() {
  return (
    <div className={styles.weblogo}>
      <Image src={weblogo} alt="weblogo" />

      <div className={styles.name}>
        <h1>ANC</h1>
        <p>Adobo Ni Ching</p>
      </div>
    </div>
  );
}
