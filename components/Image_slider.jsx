//npm i swiper
// import Swiper core and required modules
import { Autoplay, Pagination, EffectCreative } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

//Import ang mga images
import Image from "next/image";
import image1 from "../public/2020_01_21_chicken_adobo_1.jpg";
import image2 from "../public/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-19-12ce105a2e1a44dfb1e2673775118064.jpg";
import image3 from "../public/128699-famous-hicken-adobo-ddmfs-117-1x1-1-3bef902d58434edfa04a4f1cb7d1a208.jpg";

import styles from "./Image_slider.module.css";

export default function Image_slider() {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Autoplay, Pagination, EffectCreative]}
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide className={styles.swiperslide}>
        <Image src={image1} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
        <Image src={image2} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
        <Image src={image3} />
      </SwiperSlide>
    </Swiper>
  );
}
