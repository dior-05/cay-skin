import React from 'react'
import "../styles/gallyre.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



function Gallyre() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='container'>
        <div className="gallery">
        
      
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        direction='vertical'
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          350: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          480: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          550: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          640: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          768: {
              slidesPerView: 1,
              spaceBetween: 30,
          },
          890: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          1024: {
              slidesPerView: 1,
              spaceBetween: 40,
          },
          1280: {
              slidesPerView: 1,
              spaceBetween: 50,
          }
      }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

      </Swiper>
      <Swiper
      
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
       
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
     
      </Swiper>
    
        </div>
    </div>
  )
}

export default Gallyre