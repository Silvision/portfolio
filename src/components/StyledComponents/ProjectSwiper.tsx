import { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs, Scrollbar, Navigation, Keyboard} from 'swiper/modules';
import './ProjectSwiper.css'

import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

type ProjectSwiperProps = {
    projectMedia: string[]; 
    embededVideo: boolean;
    videoLink: string;
};

function ProjectSwiper({ projectMedia, embededVideo, videoLink}: ProjectSwiperProps) {
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
                    // How to stop the video, thanks to https://gist.github.com/cferdinandi/9044694
                    const iframe = document.querySelector( 'iframe');
                    if ( iframe ) {
                        const iframeSrc = iframe.src;
                        iframe.src = iframeSrc;
                    }
                    thumbsSwiper?.slideTo(swiper.activeIndex);
                }}
                className="swiperMain"
            >

                { embededVideo && 
                        <SwiperSlide> 
                            <iframe src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
                        </SwiperSlide>
                }
                
                {
                    projectMedia.map((_, index) => {
                        if (embededVideo && index === 0) return;
                        return <SwiperSlide key={index}> <img src={projectMedia[index]}/> </SwiperSlide>
                    })
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

                { embededVideo && <SwiperSlide > <img src={projectMedia[0]}/> </SwiperSlide>}  
                {      
                    projectMedia.map((_, index) => {
                        if (embededVideo && index === 0) return;
                        return <SwiperSlide key={index}> <img src={projectMedia[index]}/> </SwiperSlide>
                    })
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