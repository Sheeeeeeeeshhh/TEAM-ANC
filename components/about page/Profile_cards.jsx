import styles from "./Profile_cards.module.css";
import Ching_card from "./Ching_card";
import Jim_card from "./Jim_card";
import Nahz_card from "./Nahz_card";
import Ky_card from "./Ky_card";

export default function Profile_cards() {
  return (
    <div className={styles.container}>
      <Ching_card />
      <Jim_card />
      <Nahz_card />
      <Ky_card />
    </div>
  );
}
