import styles from "./Meet_our_peeps.module.css";
import Profile_cards from "./Profile_cards";

export default function Meet_our_peeps() {
  return (
    <div className={styles.container}>
      <h2>Meet Our People</h2>
      <Profile_cards />
    </div>
  );
}
