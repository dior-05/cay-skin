import React from 'react'
import "../styles/customercss.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import customer1 from "../images/c1.png"
import customer2 from "../images/c2.png"
import customer3 from "../images/c3.png"

function Customer() {
    return (
        <section className='customer'>
            <div className="container">
                <div className="customer_wrapper">
                    <div className="customer_text">
                        <h4>The results</h4>
                        <h2>From our customers</h2>
                    </div>
                    <div className="customer_swiper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}

                            modules={[Pagination]}
                            className="appSwiper2"
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
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <img className='customer1' src={customer1} alt="img" />

                            </SwiperSlide>

                            <SwiperSlide>
                                <img className='customer1' src={customer2} alt="img" />

                            </SwiperSlide>

                            <SwiperSlide>
                                <img className='customer1' src={customer3} alt="img" />

                            </SwiperSlide>

                            <SwiperSlide>
                                <img className='customer1' src={customer3} alt="img" />

                            </SwiperSlide>




                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer