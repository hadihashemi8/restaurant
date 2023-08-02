import Title from "../Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function OfferSection() {
    return (
        <div className="pt-24  ">
            <div className="flex flex-col items-center justify-between w-full">
                <div className="flex items-center justify-center w-full">
                    <Title title="تخفیف های جذاب" theme="bg-red-800" />
                </div>
                <div className="w-full mt-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                           
                        }}
                        
                        className="mySwiper w-full h-full"
                    >
                        <SwiperSlide className="text-center flex items-center justify-center bg-red-200">Slide 1</SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center bg-red-200">Slide 1</SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center bg-red-200">Slide 1</SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center bg-red-200">Slide 1</SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center bg-red-200">Slide 1</SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center bg-red-200">Slide 1</SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
