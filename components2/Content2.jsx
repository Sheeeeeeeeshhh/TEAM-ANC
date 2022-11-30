import styles from "./Content2.module.css";
import Vision_mission from "./Vision_mission";
import Hr_line from "../components/Hr_line";

export default function Content2() {
  return (
    <div className={styles.container}>
      <div className={styles.container_text}>
        <h1>About us</h1>
        <p>
          A food website called ANC, or AdoboNiChing, was developed by four
          college students named Christine, Kyrus, Jimwel, and Zhan. It allows
          you to browse menus, view recipes, and order traditional Filipino food
          online.
        </p>
        <Hr_line />
      </div>
      <div>
        <Vision_mission />
        <Hr_line />
      </div>
      <h1>Meet Our People</h1>
    </div>
  );
}
