import styles from "./Ky_card.module.css";
import Image from "next/image";
import ky from "../../public/ky.jpg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Ky_card() {
  return (
    <div className={styles.container}>
      <Image src={ky} />
      <h3>Kyrus Amir Lumagui</h3>
      <h4>Web Developer</h4>

      <div className={styles.socmed}>
        <div>
          <a href="hhttps://www.facebook.com/Kyrus.Lumagui">
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
