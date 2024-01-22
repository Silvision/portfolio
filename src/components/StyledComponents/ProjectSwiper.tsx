import { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs, Scrollbar, Navigation, Keyboard} from 'swiper/modules';
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
                modules={[Thumbs, Keyboard]}
                thumbs={{swiper: thumbsSwiper  && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                grabCursor
                keyboard
                onSlideChange={(swiper) =>{
                    thumbsSwiper?.slideTo(swiper.activeIndex);
                }}
                className="swiperMain"
            >

                {
                    projectMedia.map((_, index) => {return <SwiperSlide key={index}> <img src={projectMedia[index]}/> </SwiperSlide>})
                }

            </Swiper>

            {/*Thumbs Swiper*/}
            <Swiper
                modules={[Thumbs, Scrollbar, Navigation]}
                navigation={{prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'}}
                scrollbar={{el: '.swiperThumbs-scrollbar', draggable: true, hide: false}}
                slidesPerView={5}
                spaceBetween={10}
                onSwiper={setThumbsSwiper}
                centeredSlides
                centeredSlidesBounds
                grabCursor
                onClick={(swiper) => {
                    swiper.slideTo(swiper.clickedIndex);
                }}
                className="swiperThumbs"
            > 

                {      
                    projectMedia.map((_, index) => {return <SwiperSlide key={index}> <img src={projectMedia[index]}/> </SwiperSlide>})
                }

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