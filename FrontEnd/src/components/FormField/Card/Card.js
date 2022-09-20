import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { useRef } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Card.css'
import { arrowLeft, arrowRight } from './../../../assets/icons'
import { Link, Switch, Route } from 'react-router-dom'

function Card(props) {
    const {
        see = false,
        title,
        subtitle,
        movies
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
                    breakpoints={{
                        // when window width is >= 320px
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    }}
                    className="swiper-card"
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = swiperButtonPrev.current;
                        swiper.params.navigation.nextEl = swiperButtonNext.current;
                    }}
                    modules={[Navigation]}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie._id}>
                            <Link 
                                to={`/seat/${movie.id}`}
                                state={movie}
                            >
                                <img src={movie?.poster_path?.w500} alt="movie" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='swiper-button-prev-card' ref={swiperButtonPrev} >
                    <img src={arrowLeft} alt="arrow left" />
                </div>
                <div className='swiper-button-next-card' ref={swiperButtonNext} >
                    <img src={arrowRight} alt="arrow right" />
                </div>
            </div>
        </>
    );
}

export default Card;