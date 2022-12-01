import styles from "./Content2.module.css";
import About_us from "./About_us";
import Vision_mission from "./Vision_mission";
import Meet_our_peeps from "./Meet_our_peeps";
import Contact_us from "./Contact_us";

export default function Content2() {
  return (
    <div className={styles.container}>
      <About_us />
      <Vision_mission />
      <Meet_our_peeps />
      <Contact_us />
    </div>
  );
}
