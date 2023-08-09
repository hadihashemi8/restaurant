import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { useRouter } from "next/router"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import Title from '../../components/Title/Title';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useFormik } from "formik"
import * as Yup from "yup"



const Login = () => {

    const router = useRouter()


    const formik = useFormik({
        initialValues: {
            name: '',
            userName: '',
            phoneNumber: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5, "تعداد کاراکترها باید بیشتر از 5 باشد").required("فیلد را پر کنید"),
            userName: Yup.string().min(4, "تعداد کاراکترها باید بیشتر از 4 باشد").required("فیلد را پر کنید "),
            phoneNumber: Yup.string().min(11, "تعداد کاراکترها باید بیشتر از 11 باشد").required("فیلد را پر کنید"),
            password: Yup.string().min(8, "تعداد کاراکترها باید بیشتر از 8 باشد").required("فیلد را پر کنید")
        }),
        onSubmit: value => {
            console.log(value);
        }
    })


    return (
        <div className='min-h-screen w-full relative max-w-screen-2xl mx-auto'>
            <Image className='blur-sm' alt="login-bg" src="/images/login-bg.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />

            <div className=' rounded-xl overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-2/3 h-[570px]  '>

                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    loop={true}
                    modules={[EffectCreative]}
                    className="mySwiper3 w-full h-full flex  "
                >
                    <SwiperSlide className='w-full rounded-xl  h-full border-[2px] border-main-color4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 h-full   bg-white'>
                            <div className={`relative  duration-200 hidden sm:flex col-span-1 w-full`}>
                                <Image alt="login-img" src="/images/login-form-bg2.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='bg-main-color4 w-full  h-full p-5 flex flex-col items-center justify-center  col-span-1'>
                                {/* <h2 className='text-xl'>صفحه ثبت نام</h2> */}
                                <Title title='ثبت نام' theme="bg-main-color1" />
                                <form onSubmit={formik.handleSubmit} className='  h-full w-3/4 sm:w-2/3 flex mt-2 flex-col items-center ' dir='rtl'>
                                    <div className='flex flex-col w-full relative mt-9'>
                                        <input
                                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.name && formik.errors.name ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                                            type="text"
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.name && formik.errors.name ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>نام و نام خانوادگی</label>
                                        {formik.touched.name && formik.errors.name ? (
                                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.name}</span>
                                        ) : null}
                                    </div>

                                    <div className='flex flex-col w-full relative mt-9'>
                                        <input
                                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.userName && formik.errors.userName ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                                            type="text"
                                            name="userName"
                                            onChange={formik.handleChange}
                                            value={formik.values.userName}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.userName && formik.errors.userName ? (
                                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.userName}</span>
                                        ) : null}
                                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.userName && formik.errors.userName ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>نام کاربری</label>
                                    </div>

                                    <div className='flex flex-col w-full relative mt-9'>
                                        <input
                                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                                            type="text"
                                            name="phoneNumber"
                                            onChange={formik.handleChange}
                                            value={formik.values.phoneNumber}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.phoneNumber}</span>
                                        ) : null}
                                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>شماره تلفن</label>
                                    </div>

                                    <div className='flex flex-col w-full relative mt-9 '>
                                        <input
                                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.password && formik.errors.password ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}

                                            type="password"
                                            name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.password}</span>
                                        ) : null}
                                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.password && formik.errors.password ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>رمز عبور</label>
                                    </div>




                                    <div className='w-full mt-10 flex flex-col  items-center justify-between '>
                                        <div className='flex items-center '>
                                            <button type="submit" className=' px-4 py-2 bg-main-color1 text-main-color4 mx-1'>ثبت نام</button>
                                            <button onClick={() => router.push('/')} className=' px-4 py-2 bg-main-color1 text-main-color4  mx-1'>برگشت</button>
                                        </div>
                                        <span className='mt-4 text-sm text-center flex items-center justify-between'>
                                            <ArrowForwardIosIcon className="text-sm " />
                                            جهت ورود به صفحه ورود بکشید</span>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full rounded-xl border-[2px] border-main-color4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2  h-full  bg-white'>
                            <div className={`relative  duration-200 hidden sm:flex col-span-1 w-full`}>
                                <Image alt="login-img" src="/images/login-form-bg3.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='bg-main-color4 w-full p-5 flex flex-col items-center justify-center  col-span-1'>
                                {/* <h2 className='text-xl'>صفحه ورود</h2> */}
                                <Title title=' ورود' theme="bg-main-color1" />

                                <form className=' h-full w-3/4 sm:w-2/3 flex mt-2 flex-col items-center ' dir='rtl'>
                                    <div className='flex w-full relative mt-7'>
                                        <input
                                            className='p-2 w-full outline-none focus:border-[1px]  border-b-gray-500 duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4  valid:border-main-color1 focus:border-main-color1'
                                            type="text"
                                            required />
                                        <label className='absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1 px-2  peer-focus:top-0 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:top-0 peer-valid:bg-main-color4'>نام کاربری</label>
                                    </div>



                                    <div className='flex items-center justify-between w-full relative mt-7 '>
                                        <input
                                            className='p-2 w-full outline-none focus:border-[1px]  border-b-gray-500 duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4  valid:border-main-color1 focus:border-main-color1'
                                            type="password"
                                            required />

                                        <label className='absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1 px-2  peer-focus:top-0 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:top-0 peer-valid:bg-main-color4'>رمز عبور</label>
                                    </div>

                                    <div className='w-full mt-8 flex flex-col  items-center justify-between '>
                                        <div className='flex items-center '>
                                            <button type="submit" className=' px-4 py-2 bg-main-color1 text-main-color4 mx-1'>ورود</button>
                                            <button onClick={() => router.push('/')} className=' px-4 py-2 bg-main-color1 text-main-color4  mx-1'>برگشت</button>
                                        </div>
                                        <span className='mt-4  text-sm text-center flex items-center justify-between'>
                                            <ArrowForwardIosIcon className="text-sm " />
                                            جهت ورود به صفحه ثبت نام بکشید</span>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>


            

        </div>
    )
}

export default Login