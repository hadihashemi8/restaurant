import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import QuieckMenuCard from '../QuieckMenuCard/QuieckMenuCard';




export default function QuieckMenu() {
    return (
        <div className='w-full h-96 mt-4 relative  text-center'>
            <ul className='w-full h-14  grid grid-cols-6 gap-2 '>
                <li className=' col-span-1 group/inner flex items-center justify-center text-lg text-main-color1 '>
                    پیتزا
                    <ArrowDropDownIcon className="rotate-180 group-hover/inner:rotate-0 transition-all duration-300" />

                    <div className='absolute top-14 right-0 w-full h-0 group-hover/inner:h-auto  duration-300 group-hover/inner:py-4 z-50 bg-main-color4  overflow-hidden flex items-center px-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                               
                            }}
                            // modules={[Pagination]}
                            className="mySwiper w-full  h-full "
                        >
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                           
                     
                        </Swiper>
                    </div>
                </li>
                <li className=' col-span-1 group/inner flex items-center justify-center text-lg text-main-color1'>
                    همبرگر
                    <ArrowDropDownIcon className="rotate-180 group-hover/inner:rotate-0 transition-all duration-300" />

                    <div className='absolute top-14 right-0 w-full h-0 group-hover/inner:h-auto  duration-300 group-hover/inner:py-4 z-50 bg-main-color4  overflow-hidden flex items-center px-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                               
                            }}
                            // modules={[Pagination]}
                            className="mySwiper w-full  h-full "
                        >
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                           
                     
                        </Swiper>
                    </div>
                </li>
                <li className=' col-span-1 group/inner flex items-center justify-center text-lg text-main-color1'>
                    کباب
                    <ArrowDropDownIcon className="rotate-180 group-hover/inner:rotate-0 transition-all duration-300" />

                    <div className='absolute top-14 right-0 w-full h-0 group-hover/inner:h-auto  duration-300 group-hover/inner:py-4 z-50 bg-main-color4  overflow-hidden flex items-center px-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                               
                            }}
                            // modules={[Pagination]}
                            className="mySwiper w-full  h-full "
                        >
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                           
                     
                        </Swiper>
                    </div>
                </li>
                <li className=' col-span-1 group/inner flex items-center justify-center text-lg text-main-color1'>
                    پاستا
                    <ArrowDropDownIcon className="rotate-180 group-hover/inner:rotate-0 transition-all duration-300" />

                    <div className='absolute top-14 right-0 w-full h-0 group-hover/inner:h-auto  duration-300 group-hover/inner:py-4 z-50 bg-main-color4  overflow-hidden flex items-center px-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                               
                            }}
                            // modules={[Pagination]}
                            className="mySwiper w-full  h-full "
                        >
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                           
                     
                        </Swiper>
                    </div>
                </li>
                <li className=' col-span-1 group/inner flex items-center justify-center text-lg text-main-color1'>
                    مرغ
                    <ArrowDropDownIcon className="rotate-180 group-hover/inner:rotate-0 transition-all duration-300" />

                    <div className='absolute top-14 right-0 w-full h-0 group-hover/inner:h-auto  duration-300 group-hover/inner:py-4 z-50 bg-main-color4  overflow-hidden flex items-center px-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                               
                            }}
                            // modules={[Pagination]}
                            className="mySwiper w-full  h-full "
                        >
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                           
                     
                        </Swiper>
                    </div>
                </li>
                <li className=' col-span-1 group/inner flex items-center justify-center text-lg text-main-color1'>
                    دسر
                    <ArrowDropDownIcon className="rotate-180 group-hover/inner:rotate-0 transition-all duration-300" />

                    <div className='absolute top-14 right-0 w-full h-0 group-hover/inner:h-auto  duration-300 group-hover/inner:py-4 z-50 bg-main-color4  overflow-hidden flex items-center px-4 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                               
                            }}
                            // modules={[Pagination]}
                            className="mySwiper w-full  h-full "
                        >
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                            <SwiperSlide className='p-1'>
                                <QuieckMenuCard/>
                            </SwiperSlide>
                           
                     
                        </Swiper>
                    </div>
                </li>


            </ul>

            <img className='w-52 mx-auto' src="/images/logo.png" alt="logo" />

        </div>
    )
}
