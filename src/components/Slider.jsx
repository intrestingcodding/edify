"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"
// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={8}

            breakpoints={{
                900: {
                    slidesPerView: "8"
                },
                768: {
                    slidesPerView: "6"
                },
                600: {
                    slidesPerView: "5"
                },
                0: {
                    slidesPerView: "4"
                }


            }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            speed="3000"
            autoplay={{
                delay: "2000"

            }}

            modules={[Autoplay]}

        >
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src="https://edifyelite.com.pk/images/uni-logos/3.png" alt="" className='py-6' />
                    <img src="https://edifyelite.com.pk/images/uni-logos/49.png" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;