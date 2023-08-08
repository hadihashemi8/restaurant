import Title from "../Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Card from "../Card/Card";
import Button from "../Button/Button";

export default function TodayMenu() {
  return (
    <div className="p-4 pt-20 flex items-center justify-center   ">
            <div className="flex flex-col items-center justify-between w-full">
                <div className="flex items-center justify-center w-full">
                    <Title title="منوی امروز" theme="bg-main-color2" />
                </div>
                <div className="w-full mt-14  rounded-xl  bg-main-color4">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1000: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },

                        }}
                       loop={true}
                        modules={Autoplay}
                        className="mySwiper w-full h-full "
                    >
                        <SwiperSlide className="text-center flex items-center justify-center p-2 md:px-0 ">
                            <Card offerCard={false} />
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center p-2 md:px-0 ">
                            <Card offerCard={false} />
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center p-2 md:px-0 ">
                            <Card offerCard={false} />
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center p-2 md:px-0 ">
                            <Card offerCard={false} />
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex items-center justify-center p-2 md:px-0 ">
                            <Card offerCard={false} />
                        </SwiperSlide>
                   


                    </Swiper>

                  
                </div>
                    <div className="mt-8">
                    <Button title="مشاهده همه"/>
                    </div>
            </div>
        </div>
  )
}
