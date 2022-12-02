import styles from "./Vision_mission.module.css";
import Hr_line from "../components/Hr_line";

export default function Vision_mission() {
  return (
    <div className={styles.container}>
      <div className={styles.vision}>
        <h2>Our Vision</h2>
        <Hr_line />
        <p>
          To provide our customers with delicious, high-quality meals and a
          memorable dining experience while working to improve the lives of our
          staff, the community, and the environment.
        </p>
      </div>
      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <Hr_line />
        <p>
          To satisfy and nourish our customers with wholesome, high-quality, and
          delectable food and outstanding service at a fair price.
        </p>
        <p>
          To comprehend the shifting needs of our customers and continually
          enhance the customer experience.
        </p>
        <p>
          To make a positive social impact through programs that are in line
          with our corporate social responsibility program.
        </p>
      </div>
    </div>
  );
}
