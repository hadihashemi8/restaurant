import Link from "next/link"
import styles from "../../styles/Home.module.css"
import Button from "../Button/Button"
import NavBar from "../NavBar/NavBar"
// import wave from "../../public/images/svg/wave-haikei.png"
import Image from "next/image"
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';




export default function Layout({ children }) {


    return (
        <div className="max-w-screen-2xl  min-h-screen mx-auto bg-main-color4 " dir="rtl">
            <header >
                <NavBar />
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4  relative h-[600px]" >
                    <Image alt="bg" src="/images/header-bg3-min.jpg" loading="eager" fill sizes="100vw" style={{ objectFit: "cover" }} />
                    <div className="z-40 p-2 flex items-center justify-center  col-span-1 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4   ">
                        <div className="bg-[rgba(0,0,0,0.5)] py-5 px-2 flex flex-col items-center  justify-between">
                            <h1 className="text-3xl lg:text-5xl text-main-color4 font-extrabold drop-shadow-lg ">رستوران نمونه</h1>
                            <h2 className="mt-4 lg:mt-6 text-xl text-main-color4 text-center lg:text-3xl">هر زمان غذایی
                                سالم و تازه سفارش دهید</h2>
                            <div className="flex mt-4 lg:mt-6">
                                <Button title=" سفارش دهید " to="#Order-section" />
                            </div>
                        </div>
                    </div>
                   
                    <img className=" w-full absolute -bottom-1 left-0 " src="/images/svg/wave-haikei.png" alt="wave" />
                </div>
            </header>
            <div className="container mx-auto">
                {children}
            </div>
            <footer className=" pt-20 flex flex-col items-center justify-center ">
                <div className="w-full pt-24  bg-main-color1 relative flex flex-col items-center" >
                    <img className=" w-full absolute -top-1 left-0 rotate-180" src="/images/svg/wave-haikei.png" alt="wave" />
                    <img className="w-52  md:hidden" src="/images/logo.png" alt="" />

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
                    <h3>طراحی شده توسط hadi</h3>
                </div>
            </footer>
        </div>
    )
}
