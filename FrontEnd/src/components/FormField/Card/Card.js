import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Card.css'
import { arrowLeft, arrowRight } from './../../../assets/icons'

function Card(props) {
    const {
        see = false,
        title,
        subtitle,
    } = props

     const swiperButtonPrev = useRef(null)
     const swiperButtonNext = useRef(null)

     const params = {
          navigation: {
               nextEl: swiperButtonPrev.current,
               prevEl: swiperButtonNext.current,
          }
     }

    return (
        <>  
            <div className="wrapper-title">
                <div className="title-poster">
                    <div className="title-name">{title}</div>
                    {see && 
                    <div className="see-all">
                        <a href="">
                            <div>
                                See All ›
                            </div>
                        </a>
                    </div>
                    }
                </div>
                <div className="subtitle-poster">{subtitle}</div>
            </div>
            <div className="parent-swiper">
                <Swiper
                    {...params}
                    spaceBetween={32}
                    slidesPerView={5}
                    className="swiper-card"
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = swiperButtonPrev.current;
                        swiper.params.navigation.nextEl = swiperButtonNext.current;
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327883-dkjdurjkaa-portrait.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327883-dkjdurjkaa-portrait.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327883-dkjdurjkaa-portrait.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327883-dkjdurjkaa-portrait.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327883-dkjdurjkaa-portrait.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327883-dkjdurjkaa-portrait.jpg" alt="poster" />
                    </SwiperSlide>
                </Swiper>
                <div className='swiper-button-prev-card' ref={swiperButtonPrev} >
                    <img src={arrowLeft} alt="" />
                </div>
                <div className='swiper-button-next-card' ref={swiperButtonNext} >
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </>
    );
}

export default Card;