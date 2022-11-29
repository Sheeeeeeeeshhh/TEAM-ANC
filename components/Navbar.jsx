import Link from "next/link";

import styles from "./Navbar.module.css";
import Weblogo1 from "./Weblogo1";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.webname}>
        <Weblogo1 />
      </div>
      <div className={styles.ref_buttons}>
        <Link href="/anc">
          <h2>HOME</h2>
        </Link>

        <h2>MENU</h2>

        <Link href="/about_us">
          <h2>ABOUT US</h2>{" "}
        </Link>
      </div>
    </div>
  );
}
