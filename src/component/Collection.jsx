import React from 'react'
import "../styles/collection.css"
import yellov from "../images/yellov.png"
import girls from "../images/girls.png"

import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import 'swiper/css';

function Collection() {
    return (
        <div className='collections'>
        <div className="big_container">
            <div className="coll_wrapper">
                <div className="container">
                    <h2>Collections</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum, Cream Shop</p>
                </div>
                <div className="rew">

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2.1}
                        onSlideChange={() => 'slide change'}
                        onSwiper={(swiper) => swiper}
                        className='qwwe'
                        breakpoints={{
                            350: {
                                slidesPerView: 1.1,
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
                            1160:{
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1320: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                            1350:{
                                slidesPerView: 2,
                                spaceBetween: 40,
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="coll_imgs">
                                <img src={yellov} alt="" />
                                <h5>Sed ut perspiciatis</h5>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="coll_imgs">
                                <img src={girls} alt="" />
                                <h5>Lorem ipsum dolor</h5>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="coll_imgs">
                                <img className='black' src={yellov} alt="" />
                                <h5>At vero eos</h5>
                            </div>
                        </SwiperSlide>


                    </Swiper>


                </div>
            </div>
        </div></div>
    )
}

export default Collection