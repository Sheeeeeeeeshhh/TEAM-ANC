import styles from "./Content.module.css";
import Image_slider from "./Image_slider";

export default function Content() {
  return (
    <div className={styles.container}>
      <h3>
        Homemade food <br /> directly to your <br />
        home
      </h3>
      <button>Order Now</button>
      <div className={styles.swiper}>
        <Image_slider />
      </div>
    </div>
  );
}
