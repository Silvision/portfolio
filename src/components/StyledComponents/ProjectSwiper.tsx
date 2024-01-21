import { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs, Scrollbar, Navigation } from 'swiper/modules';
import './ProjectSwiper.css'

import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

type ProjectSwiperProps = {
    projectMedia: string[]; 
};

function ProjectSwiper({ projectMedia }: ProjectSwiperProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    return (
        <>
            {/*Main Swiper*/}
            <Swiper
                spaceBetween={50}
                modules={[Thumbs]}
                thumbs={{swiper: thumbsSwiper  && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiperMain"
                >

                <SwiperSlide> <img src={projectMedia[0]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[1]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[2]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[3]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[4]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[5]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[6]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[7]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[8]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[9]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[10]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[11]}/> </SwiperSlide>

                </Swiper>

            {/*Thumbs Swiper*/}
            <Swiper
                modules={[Thumbs, Scrollbar, Navigation]}
                navigation={{prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'}}
                scrollbar={{el: '.swiperThumbs-scrollbar', draggable: true, hide: false}}
                watchSlidesProgress
                slidesPerView={4}
                spaceBetween={10}
                onSwiper={setThumbsSwiper}
                className="swiperThumbs"
                > 
                <SwiperSlide> <img src={projectMedia[0]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[1]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[2]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[3]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[4]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[5]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[6]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[7]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[8]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[9]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[10]}/> </SwiperSlide>
                <SwiperSlide> <img src={projectMedia[11]}/> </SwiperSlide>

            </Swiper>

            <div className="swiperThumbs-navigation">
                <div className="swiper-button-prev"></div>
                <div className="swiperThumbs-scrollbar"></div>
                <div className="swiper-button-next"></div>
            </div>
        </>
    )
}

export default ProjectSwiper;