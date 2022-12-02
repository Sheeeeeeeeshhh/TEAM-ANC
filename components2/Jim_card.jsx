import styles from "./Jim_card.module.css";
import Image from "next/image";
import jim from "../public/jim.jpg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Jim_card() {
  return (
    <div className={styles.container}>
      <Image src={jim} />
      <h3>Jimwel Dagarag</h3>
      <h4>Web Developer</h4>

      <div className={styles.socmed}>
        <div>
          <a href="https://www.facebook.com/jimweldagarag">
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
