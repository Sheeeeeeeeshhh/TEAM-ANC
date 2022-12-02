import styles from "./Ching_card.module.css";
import Image from "next/image";
import ching from "../public/ching.jpg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Ching_card() {
  return (
    <div className={styles.container}>
      <Image src={ching} />
      <h3>Christine De Luna</h3>
      <h4>Project Manager</h4>

      <div className={styles.socmed}>
        <div>
          <a href="https://www.facebook.com/christinejhane.deluna">
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
