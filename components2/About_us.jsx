import styles from "./About_us.module.css";
import Image from "next/image";
import ancmem from "../public/image 1.png";

export default function About_us() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box1}>
          <div className={styles.text}>
            <h2>About</h2>
            <p>
              A food website called ANC, or AdoboNiChing, was developed by four
              college students named Christine, Kyrus, Jimwel, and Zhan. It
              allows you to browse menus, view recipes, and order traditional
              Filipino food online.
            </p>
          </div>
          <div>
            <Image src={ancmem} />
          </div>
        </div>
        <div className={styles.box2}></div>
      </div>
    </div>
  );
}
