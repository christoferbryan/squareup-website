'use client';
import TestimonyCard from "./Card";
import PersonData from "@/utils/Person";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const Testimony : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex flex-col items-center">
                <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[270px] px-[16px] py-[50px] gap-y-[6px]
                border-b border-zinc-600 lg:w-[1280px] lg:h-[280px] lg:gap-y-[10px] lg:px-[250px] lg:py-[100px]">
                    <h2 className="text-white font-semi-bold text-[26px] lg:text-[38px]">What our Clients say About us</h2>
                    <p className="text-[#E6E6E6] font-normal text-[14px] lg:text-[16px]">
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us
                    </p>
                </div>
                <div className='flex gap-8 w-full items-center justify-center py-5 lg:py-10'>
                    <Swiper
                        effect={'coverflow'}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        initialSlide={1}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                
                            768: {
                                slidesPerView: 2,
                            },

                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={50}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        modules={[ EffectCoverflow, Pagination, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}

                        className="w-full"
                    >       
                        {PersonData.map((person, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center">
                                    <TestimonyCard {...person}/>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="slider-controller">
                            <div className="swiper-pagination"></div>
                        </div> 
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Testimony;