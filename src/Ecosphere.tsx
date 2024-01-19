import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs, Scrollbar, Navigation } from 'swiper/modules';
import { ecosphereMedia } from "./assets/images";
import "./Ecosphere.css";

import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'


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
            modules={[Thumbs]}
            thumbs={{swiper: thumbsSwiper  && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiperMain"
          >

            <SwiperSlide> <img src={ecosphereMedia[0]}/> </SwiperSlide>
            <SwiperSlide> Slide 2 </SwiperSlide>
            <SwiperSlide> Slide 3 </SwiperSlide>
            <SwiperSlide> Slide 4 </SwiperSlide>
            <SwiperSlide> Slide 5 </SwiperSlide>
            <SwiperSlide> Slide 6 </SwiperSlide>
            <SwiperSlide> Slide 7 </SwiperSlide>

          </Swiper>

          {/*Thumbs Swiper*/}
          <Swiper
            modules={[Thumbs, Scrollbar, Navigation]}
            navigation={{prevEl: '.swiperThumbs-prevEl', nextEl: '.swiperThumbs-nextEl', }}
            scrollbar={{el: '.swiperThumbs-scrollbar', draggable: true, hide: false}}
            watchSlidesProgress
            slidesPerView={3}
            onSwiper={setThumbsSwiper}
            className="swiperThumbs"
          > 
            <SwiperSlide> <img src={ecosphereMedia[0]}/> </SwiperSlide>
            <SwiperSlide> Slide 2 </SwiperSlide>
            <SwiperSlide> Slide 3 </SwiperSlide>
            <SwiperSlide> Slide 4 </SwiperSlide>
            <SwiperSlide> Slide 5 </SwiperSlide>
            <SwiperSlide> Slide 6 </SwiperSlide>
            <SwiperSlide> Slide 7 </SwiperSlide>

          </Swiper>

          <div className="swiperThumbs-navigation">
            <div className="swiperThumbs-prevEl">Prev</div>
            <div className="swiperThumbs-scrollbar"></div>
            <div className="swiperThumbs-nextEl">Next</div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
