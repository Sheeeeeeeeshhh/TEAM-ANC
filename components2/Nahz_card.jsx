import styles from "./Nahz_card.module.css";
import Image from "next/image";
import nahz from "../public/nahz.jpg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Nahz_card() {
  return (
    <div className={styles.container}>
      <Image src={nahz} />
      <h3>Zhan Cyrus Fabian</h3>
      <h4>Web Designer</h4>

      <div className={styles.socmed}>
        <div>
          <a href="https://www.facebook.com/Zhan.Fabian/">
            <BsFacebook size={30} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com">
            <BsInstagram size={30} />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/home">
            <BsTwitter size={30} />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com">
            <BsYoutube size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
