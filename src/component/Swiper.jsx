import React from 'react'

import "../styles/swiper.css"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
function Swipers() {
    return (
        <div className='big_container'>
            <div className="big_container">
                <div className='container'>
                    <div className="swiper_text">
                        <h2>Discover our products</h2>
                        <p>Shop all</p>
                    </div>
                </div>
                <div className="swiper_big">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            350: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            550: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1.2,
                                spaceBetween: 30,
                            },
                            890: {
                                slidesPerView: 2.2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 2.2,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 3.2,
                                spaceBetween: 50,
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="swiper_wrapper">
                                <div className="swiper_card">
                                    <div className="swiper_child pro">
                                        <p className='swip_new'>NEW</p>
                                        {/* <img className='swip' src={img10} alt="" /> */}
                                        <p className='swip_p'>+ Quick Shop</p>
                                    </div>
                                    <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                                    <p>$28.00</p>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="swiper_wrapper">
                                
                                <div className="swiper_card">
                                    <div className="swiper_child max">
                                        <p className='swip_new blu'>SALE</p>
                                        {/* <img className='swip1' src={img9} alt="" /> */}
                                        <p className='swip_p'>+ Quick Shop</p>
                                    </div>
                                    <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                                    <p>$28.00</p>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="swiper_wrapper qwe">

                                <div className="swiper_card">
                                    <div className="swiper_child ultra">
                                        {/* <img className='swip2' src={img8} alt="" /> */}
                                        <p className='swip_p'>+ Quick Shop</p>
                                    </div>
                                    <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                                    <p>$28.00</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper_wrapper">
                                <div className="swiper_card">
                                    <div className="swiper_child pro">
                                        <p className='swip_new'>NEW</p>
                                        {/* <img className='swip' src={img10} alt="" /> */}
                                        <p className='swip_p'>+ Quick Shop</p>
                                    </div>
                                    <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                                    <p>$28.00</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>

    )
}

export default Swipers