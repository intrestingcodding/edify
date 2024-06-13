"use client"
import React from 'react'
import { Star, User, UserCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules"

import 'swiper/css';
import "swiper/css/pagination"


const Slider2 = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={20}

            breakpoints={{

                768: {
                    slidesPerView: "3"
                },
                630: {
                    slidesPerView: "2"
                },
                0: {
                    slidesPerView: "1"
                }

            }
            }

            pagination={true}
            modules={[Pagination]}
        >
            <SwiperSlide>
                <div className="bg-white">
                    <div className="py-[30px] px-5 bg-[#f7f8fd] flex flex-col gap-3 rounded-[40px]">
                        <div className="flex">
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                        </div>
                        <p className='line-clamp-4 text-lg  text-gray-400'>
                            The Common App felt like a labyrinth, and applying to  Yale seemed like a distant dream. Edify Elite became my guiding light! Their team,   particularly their understanding of Pakistani cultural nuances, helped me confidently navigate the application. They didn't just focus on forms; they helped me craft a compelling narrative that resonated with admissions officers. I'm convinced Edify Elite played a major role in my acceptance to Yale!

                            Amina Khan
                            Yale University
                            Ivy League dreams were always on my mind, but standing out in the competitive pool felt impossible. Partnering with Edify Elite was a game-changer. Their expert team provided valuable insights on impressing admissions committees at top universities. They helped me refine my essays and activities section to highlight my strengths and achievements while showcasing my Pakistani background positively. Thanks to Edify Elite, I'm celebrating my acceptance to Cornell University! I highly recommend them to any student aiming for an Ivy League education.

                            Bilal Ahmed
                            Cornell University
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="border p-3 rounded-[50%] bg-white text-gray-400">
                                <User />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'> Zara Husain</h3>
                                <p className='text-gray-400  '>Harvard University</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white">
                    <div className="py-[30px] px-5 bg-[#f7f8fd] flex flex-col gap-3 rounded-[40px]">
                        <div className="flex">
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                        </div>
                        <p className='line-clamp-4 text-lg  text-gray-400'>
                            The Common App felt like a labyrinth, and applying to  Yale seemed like a distant dream. Edify Elite became my guiding light! Their team,   particularly their understanding of Pakistani cultural nuances, helped me confidently navigate the application. They didn't just focus on forms; they helped me craft a compelling narrative that resonated with admissions officers. I'm convinced Edify Elite played a major role in my acceptance to Yale!

                            Amina Khan
                            Yale University
                            Ivy League dreams were always on my mind, but standing out in the competitive pool felt impossible. Partnering with Edify Elite was a game-changer. Their expert team provided valuable insights on impressing admissions committees at top universities. They helped me refine my essays and activities section to highlight my strengths and achievements while showcasing my Pakistani background positively. Thanks to Edify Elite, I'm celebrating my acceptance to Cornell University! I highly recommend them to any student aiming for an Ivy League education.

                            Bilal Ahmed
                            Cornell University
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="border p-3 rounded-[50%] bg-white text-gray-400">
                                <User />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'> Zara Husain</h3>
                                <p className='text-gray-400  '>Harvard University</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white">
                    <div className="py-[30px] px-5 bg-[#f7f8fd] flex flex-col gap-3 rounded-[40px]">
                        <div className="flex">
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                        </div>
                        <p className='line-clamp-4 text-lg  text-gray-400'>
                            The Common App felt like a labyrinth, and applying to  Yale seemed like a distant dream. Edify Elite became my guiding light! Their team,   particularly their understanding of Pakistani cultural nuances, helped me confidently navigate the application. They didn't just focus on forms; they helped me craft a compelling narrative that resonated with admissions officers. I'm convinced Edify Elite played a major role in my acceptance to Yale!

                            Amina Khan
                            Yale University
                            Ivy League dreams were always on my mind, but standing out in the competitive pool felt impossible. Partnering with Edify Elite was a game-changer. Their expert team provided valuable insights on impressing admissions committees at top universities. They helped me refine my essays and activities section to highlight my strengths and achievements while showcasing my Pakistani background positively. Thanks to Edify Elite, I'm celebrating my acceptance to Cornell University! I highly recommend them to any student aiming for an Ivy League education.

                            Bilal Ahmed
                            Cornell University
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="border p-3 rounded-[50%] bg-white text-gray-400">
                                <User />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'> Zara Husain</h3>
                                <p className='text-gray-400  '>Harvard University</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white">
                    <div className="py-[30px] px-5 bg-[#f7f8fd] flex flex-col gap-3 rounded-[40px]">
                        <div className="flex">
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                        </div>
                        <p className='line-clamp-4 text-lg  text-gray-400'>
                            The Common App felt like a labyrinth, and applying to  Yale seemed like a distant dream. Edify Elite became my guiding light! Their team,   particularly their understanding of Pakistani cultural nuances, helped me confidently navigate the application. They didn't just focus on forms; they helped me craft a compelling narrative that resonated with admissions officers. I'm convinced Edify Elite played a major role in my acceptance to Yale!

                            Amina Khan
                            Yale University
                            Ivy League dreams were always on my mind, but standing out in the competitive pool felt impossible. Partnering with Edify Elite was a game-changer. Their expert team provided valuable insights on impressing admissions committees at top universities. They helped me refine my essays and activities section to highlight my strengths and achievements while showcasing my Pakistani background positively. Thanks to Edify Elite, I'm celebrating my acceptance to Cornell University! I highly recommend them to any student aiming for an Ivy League education.

                            Bilal Ahmed
                            Cornell University
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="border p-3 rounded-[50%] bg-white text-gray-400">
                                <User />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'> Zara Husain</h3>
                                <p className='text-gray-400  '>Harvard University</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white">
                    <div className="py-[30px] px-5 bg-[#f7f8fd] flex flex-col gap-3 rounded-[40px]">
                        <div className="flex">
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                            <Star size={20} className='text-yellow-400 ' />
                        </div>
                        <p className='line-clamp-4 text-lg  text-gray-400'>
                            The Common App felt like a labyrinth, and applying to  Yale seemed like a distant dream. Edify Elite became my guiding light! Their team,   particularly their understanding of Pakistani cultural nuances, helped me confidently navigate the application. They didn't just focus on forms; they helped me craft a compelling narrative that resonated with admissions officers. I'm convinced Edify Elite played a major role in my acceptance to Yale!

                            Amina Khan
                            Yale University
                            Ivy League dreams were always on my mind, but standing out in the competitive pool felt impossible. Partnering with Edify Elite was a game-changer. Their expert team provided valuable insights on impressing admissions committees at top universities. They helped me refine my essays and activities section to highlight my strengths and achievements while showcasing my Pakistani background positively. Thanks to Edify Elite, I'm celebrating my acceptance to Cornell University! I highly recommend them to any student aiming for an Ivy League education.

                            Bilal Ahmed
                            Cornell University
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="border p-3 rounded-[50%] bg-white text-gray-400">
                                <User />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'> Zara Husain</h3>
                                <p className='text-gray-400  '>Harvard University</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>


        </Swiper>
    )
}

export default Slider2