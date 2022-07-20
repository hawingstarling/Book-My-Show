import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperJs.css';

function SwiperJs() {

     // const swiperButtonPrev = useRef(null)
     // const swiperButtonNext = useRef(null)

     // const params = {
     //      navigation: {
     //           nextEl: swiperButtonPrev.current,
     //           prevEl: swiperButtonNext.current
     //      }
     // }

    return ( 
       <Swiper
          pagination
          navigation
          autoplay
          className="swiper-module"
          modules={[Pagination, Navigation, Autoplay]}
       >
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 0</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 1</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 2</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 3</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 4</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 5</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 6</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 7</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 8</h1></SwiperSlide>
            <SwiperSlide><h1 style={{textAlign: 'center', color: 'white'}}>Slide 9</h1></SwiperSlide>
            {/* <div className={cx('swiper-button-prev')} ref={swiperButtonPrev} ></div>
            <div className={cx('swiper-button-next')} ref={swiperButtonNext} ></div> */}
       </Swiper>
    );
}

export default SwiperJs;