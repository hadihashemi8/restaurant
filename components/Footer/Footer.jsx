import Link from 'next/link'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <footer className=" pt-20 flex flex-col items-center justify-center ">
                <div className="w-full pt-24  bg-main-color1 relative flex flex-col items-center" >
                    <img className=" w-full absolute -top-1 left-0 rotate-180" src="/images/svg/wave-haikei.png" alt="wave" />
                    <img className="w-52  md:hidden" src="/images/logo.png" alt="logo" />

                    <div className="grid gap-4 w-full p-4 lg:px-14 mt-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                        <div className="px-5 flex flex-col items-center">
                            <h3 className="text-2xl  text-main-color4">رستوران نمونه</h3>
                            <p className="mt-4 text-justify text-main-color4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </div>

                        <div className="px-5 flex flex-col items-center mt-6 md:mt-0">
                            <h3 className="text-2xl text-main-color4 ">دسترسی سریع</h3>

                            <ul className="flex  items-center justify-between  mt-4">
                                <Link className="text-start p-2 py-4  text-main-color4 mx-2 menu-item relative  " href="/">
                                    خانه
                                </Link>
                                <Link className="text-start p-2 py-4  text-main-color4 mx-2 menu-item relative  " href="/">
                                    منو غذا

                                </Link>
                                <Link className="text-start p-2 py-4  text-main-color4 mx-2 menu-item relative  " href="/">
                                    درباره ما
                                </Link>
                                <Link className="text-start p-2 py-4  text-main-color4 mx-2 menu-item relative  " href="/">
                                    تماس با ما
                                </Link>
                            </ul>

                            <img className=" md:w-24 hidden md:block " src="/images/logo.png" alt="" />

                        </div>

                        <div className="px-5 flex flex-col items-center md:items-start mt-6 md:mt-0">
                            <h3 className="text-2xl  text-main-color4">تماس با ما</h3>
                            <ul className="flex  flex-wrap items-center justify-between w-full  mt-4">
                                <Link className="text-center   m-1 w-full flex items-center justify-center md:justify-start  md:w-[47%]   text-main-color4   " href="/">
                                    09111111111
                                    <PhoneIcon className="text-lg mr-1" />
                                </Link>
                                <Link className="text-center   m-1 w-full flex items-center justify-center md:justify-start  md:w-[47%]   text-main-color4   " href="/">
                                    09222222222
                                    <PhoneIcon className="text-lg mr-1" />
                                </Link>
                                <Link className="text-center   m-1 md:w-[47%] w-full flex items-center justify-center md:justify-start  text-main-color4   " href="/">
                                    @instagram
                                    <InstagramIcon className="text-lg mr-1" />
                                </Link>
                                <Link className="text-center   m-1 md:w-[47%]  w-full flex items-center justify-center md:justify-start text-main-color4   " href="/">
                                    @telegram
                                    <TelegramIcon className="text-lg mr-1" />
                                </Link>
                                <Link className="text-center md:text-start  m-1 w-full md:w-full   text-main-color4   " href="/">
                                    این یک آدرس تستی است
                                    <LocationOnIcon className="text-lg mr-1" />
                                </Link>

                            </ul>
                        </div>

                    </div>

                </div>
                <div className="p-2 bg-main-color4">
                    <h3>طراحی شده توسط هادی هاشمی</h3>
                </div>
            </footer>
  )
}
