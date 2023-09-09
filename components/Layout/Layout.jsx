import Link from "next/link"
import styles from "../../styles/Home.module.css"
import Button from "../Button/Button"

// import wave from "../../public/images/svg/wave-haikei.png"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const NavBar = dynamic(() => import("../NavBar/NavBar"), { ssr: false })


export default function Layout({ children }) {

    const router = useRouter()
    const [path, setPath] = useState('')


    useEffect(() => {
       
        setPath(router.pathname)
    }, [router])




    return (
        <div className="max-w-screen-2xl  min-h-screen mx-auto bg-main-color4 relative" >
      <ToastContainer className="text-center font " />

            <header >
                <NavBar />
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4  relative h-[600px]" >

                    <Image alt="bg" src={`/images/${path == '/' ? "header-bg3-min.jpg" : path == "/FoodsMenue" ? "products-bg.jpg" : path == "/reservation" ? "reservation-bg.jpg" : null}`} loading="eager" fill sizes="100vw" style={{ objectFit: "cover" }} />
                    <div className="z-30 p-2 flex items-center justify-center  col-span-1 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4   ">
                        <div className="bg-[rgba(0,0,0,0.5)] py-5 px-2 flex flex-col items-center  justify-between">
                            <h1 className="text-3xl lg:text-5xl text-main-color4 font-extrabold drop-shadow-lg ">رستوران نمونه</h1>
                            <h2 className="mt-4 lg:mt-6 text-xl text-main-color4 text-center lg:text-3xl">هر زمان غذایی
                                سالم و تازه سفارش دهید</h2>
                            <div className="flex mt-4 lg:mt-6">
                                <Button title=" سفارش دهید " to="/#Order-section" />
                            </div>
                        </div>
                    </div>

                    <img className=" w-full absolute -bottom-1 left-0 " src="/images/svg/wave-haikei.png" alt="wave" />
                </div>
            </header>
            <div className="container mx-auto">
                {children}
            </div>
            <Footer/>
        </div>
    )
}



