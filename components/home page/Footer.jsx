import styles from "./Footer.module.css";
import Weblogo2 from "./Weblogo2";
import Socmed from "./Socmed";
import Hr_line from "./Hr_line";

import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Weblogo2 />
      <Hr_line />
      <Socmed />
      <div className={styles.footer_buttons}>
        <button>
          <Link href="/home">Home</Link>
        </button>
        <button>Services</button>
        <button>Branches</button>
        <button>Terms</button>
        <button>Privacy Policy</button>
      </div>
    </div>
  );
}
