///npm install react-icons --save

import styles from "./Socmed.module.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Socmed() {
  return (
    <div className={styles.socmed}>
      <div>
        <a href="https://www.facebook.com">
          <BsFacebook size={30} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com">
          <BsInstagram size={30} />{" "}
        </a>
      </div>
      <div>
        <a href="https://twitter.com/home">
          <BsTwitter size={30} />{" "}
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com">
          <BsYoutube size={30} />
        </a>
      </div>
    </div>
  );
}
