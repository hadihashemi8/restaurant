
import { useEffect, useState } from "react";
import Title from "../Title/Title";
import Image from "next/image"



export default function ContactUs() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


    return (
        <div id="Contect-us" className=" p-4 mt-20 flex items-center justify-center ">
            <div className="flex flex-col items-center  px-5">
                <Title title="تماس با ما" theme="bg-main-color1" />
                <div className=" flex flex-col md:flex-row items-center mt-10 ">
                    <div className=" md:w-1/2 relative flex items-center justify-center ">
                        <Image width={500} height={500} className="bg-main-color4" src="/images/contact-us.png" alt="logo" />
                    </div>
                    <div className="flex items-center flex-col  sm:w-2/3  justify-center mt-4 sm:mt-0 ">
                        <div className="flex flex-col items-center ">
                            <h2 className="text-2xl md:text-4xl self-start mt-5">رستوران نمونه</h2>
                            <p className="text-justify mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک.
                            </p>

                        
                        </div>
                        <div className="w-full  mt-10 grid grid-cols-1 md:grid-cols-2 p-2 gap-2">

                            <div className="p-2 flex flex-col items-center justify-between rounded-xl bg-white col-span-1 shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                                <p className="text-sm ">شماره تماس :</p>
                                <div className="mt-2 flex items-center justify-evenly w-full ">
                                <p className="md:xs lg:base">09111111111</p>
                                <p className="md:xs lg:base">09111111111</p>
                                
                                </div>
                            </div>

                            <div className="p-2 flex flex-col items-center justify-between rounded-xl bg-white col-span-1 shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                                <p className="text-sm " >شبکه های مجازی :</p>
                                <div className="mt-2 flex items-center justify-evenly w-full">
                                <p>instagram</p>
                                <p>telegram</p>
                                </div>
                            </div>

                            <div className="p-2 flex flex-col items-center justify-between rounded-xl bg-white col-span-1 shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                                <p className="text-sm " >ایمیل :</p>
                                <div className="mt-2 flex items-center justify-evenly w-full">
                                <p>thisIsEmail@gmail.com</p>
                                
                                </div>
                            </div>

                            <div className="p-2 flex flex-col items-center justify-between rounded-xl bg-white col-span-1 shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                                <p className="text-sm " >آدرس :</p>
                                <div className="mt-2 flex items-center justify-evenly w-full">
                                <p> این یک آدرس تستی است </p>
                               
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
