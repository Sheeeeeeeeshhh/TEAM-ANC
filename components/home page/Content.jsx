import Link from "next/link";
import styles from "./Content.module.css";
import Image_slider from "./Image_slider";

export default function Content() {
  return (
    <div className={styles.container}>
      <h3>
        Homemade food <br /> directly to your <br />
        home
      </h3>
      <button>
        <Link href="/menu_page">Order Now</Link>
      </button>
      <div className={styles.swiper}>
        <Image_slider />
      </div>
    </div>
  );
}
