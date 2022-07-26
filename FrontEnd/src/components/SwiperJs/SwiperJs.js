import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperJs.css';
import { spiderscard } from '../../assets/image'

function SwiperJs() {

    return ( 
       <Swiper
          pagination
          navigation
          autoplay
          className="swiper-module"
          modules={[Pagination, Navigation, Autoplay]}
       >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 1</h1></SwiperSlide>
       </Swiper>
    );
}

export default SwiperJs;