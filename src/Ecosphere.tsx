import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ecosphereMedia } from "./assets/images";
import "./Ecosphere.css";
import 'swiper/css';

function Ecosphere() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-project">
        <div className="container-project-description"> EcoSphere </div>
        <div className="container-project-slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
