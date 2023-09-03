import Title from "../Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";





export default function OfferSection() {

    const {data , error} = useFetch("/api/offer")


    return (
        <>
        {data.length > 0 && (
            <div className="p-4 pt-20 flex items-center justify-center   ">
                <div className="flex flex-col items-center justify-between w-full">
                    <div className="flex items-center justify-center w-full">
                        <Title title="تخفیف های امروز" theme="bg-main-color5" />
                    </div>
                    <div className="w-full mt-14  rounded-xl  ">
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
                            className="mySwiper w-full h-full"
                        >
                            {data.map(item => (
                                <SwiperSlide key={item.id} className="text-center flex items-center justify-center py-2 ">
                                    <Card offerCard={true} data={item}/>
                                </SwiperSlide>
                            ))}
    
    
    
                        </Swiper>
                    </div>
                </div>
            </div>

        )}
        </>
    )
}
