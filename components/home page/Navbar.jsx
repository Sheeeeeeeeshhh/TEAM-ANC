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
        <Link href="/home">
          <h2>HOME</h2>
        </Link>
        <Link href="/menu_page">
          <h2>MENU</h2>
        </Link>
        <Link href="/about_us">
          <h2>ABOUT US</h2>
        </Link>
      </div>
    </div>
  );
}
