import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios'
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
        subtitle
    } = props

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios
            .get('https://backendmoviebookingv001.herokuapp.com/movie/all')
            .then(function (res) {
                setMovies(res.data.data)
            })
            .catch((error) => console.log(error))
    }, []);

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
                    { loading && movies.map((movie) => (
                        <SwiperSlide>
                            <img src={movie?.poster_path?.w500} alt="movie" />
                        </SwiperSlide>
                    ))}

                    {/* <SwiperSlide>
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
                    </SwiperSlide> */}
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