import axios from 'axios'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperJs.css';
import { spiderscard } from '../../assets/image'
import { spiderman } from '../../assets/thumbail'

function SwiperJs() {

    return ( 
       <Swiper
          pagination
          navigation
          autoplay
          className="swiper-module"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(" + spiderman + ")" }}
          modules={[Pagination, Navigation, Autoplay]}
       >
            <SwiperSlide>
               <SlideMovieItem />
            </SwiperSlide>
            <SwiperSlide><SlideMovieItem /></SwiperSlide>
            <SwiperSlide><SlideMovieItem /></SwiperSlide>
            <SwiperSlide><SlideMovieItem /></SwiperSlide>
       </Swiper>
    );
}

const SlideMovieItem = () => {
   return (
      <div className="wrapper-swiper-slide">
         <div>
            <div className="movie-card-swiper">
               <img className="image-movie-swiper" src={spiderscard} alt="Watch Spider-Man: No Way Home Online" />
            </div>
         </div>
         <div className="content-name-movie">
            <h1>Spider-Man: No Way Home</h1>
            <div className="introduce-content-movie">
               <div className="language-movie">
                  <div>
                     <a href="https://in.bookmyshow.com/explore/stream-movies-english">English</a>
                  </div>
                  <span>•</span>
                  <div className="language-movie-two">
                     <a>Languages:</a>
                     <span>Audio(4), Subtitles(1)</span>
                  </div>
               </div>
               <div>
               </div>
            </div>
         </div>
         <div></div>
      </div>
   )
}

export default SwiperJs;