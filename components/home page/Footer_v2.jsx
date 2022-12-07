import styles from "./Footer_v2.module.css";
import Weblogo2 from "./Weblogo2";
import Hr_line from "./Hr_line";
import Socmed from "./Socmed";
import Footer_end from "./Footer_end";

import Link from "next/link";

import { MdLocationPin } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer_v2() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column1}>
          <Weblogo2 />
          <Hr_line />
          <div className={styles.mini_navbar}>
            <Link href="/home">
              <p>Home</p>
            </Link>
            <Link href="/menu_page">
              <p>Menu</p>
            </Link>
            <Link href="/about_us">
              <p>About us</p>
            </Link>
          </div>
        </div>
        <div className={styles.column2}>
          <h3>REACH US</h3>
          <p>
            <MdLocationPin size={30} /> Mary Chris Complex Phase 4, General
            Trias City, Cavite
          </p>
          <p>
            <MdPhone size={30} />
            4549751
          </p>
          <p>
            <MdOutlinePhoneAndroid size={30} />
            09675733924
          </p>
          <p>
            <MdOutlineEmail size={30} />
            adoboniching@gmail.com
          </p>
        </div>
        <div className={styles.column3}>
          <p>Follow Us</p>
          <Socmed />
        </div>
      </div>
      <Footer_end />
    </div>
  );
}
