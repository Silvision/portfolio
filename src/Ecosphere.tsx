import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { ecosphereMedia } from "./assets/images";
import "./Ecosphere.css";
import 'swiper/css';

function Ecosphere() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-project">
        <div className="container-project-description"> EcoSphere </div>
        <div className="container-project-slider">
          {/*Main Swiper*/}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Thumbs]}
            thumbs={{swiper: thumbsSwiper  && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiperMain"
          >

            <SwiperSlide> <img src={ecosphereMedia[0]}/> </SwiperSlide>
            <SwiperSlide> Slide 2 </SwiperSlide>
            <SwiperSlide> Slide 3 </SwiperSlide>

          </Swiper>

          {/*Thumbs Swiper*/}
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            className="swiperThumbs"
          > 
            <SwiperSlide> <img src={ecosphereMedia[0]}/> </SwiperSlide>
            <SwiperSlide> Slide 2 </SwiperSlide>
            <SwiperSlide> Slide 3 </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
