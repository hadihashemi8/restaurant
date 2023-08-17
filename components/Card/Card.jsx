import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import BuyBtn from "../BuyBtn/BuyBtn";
import { Rating } from "@mui/material";
import styles from '../../styles/Home.module.css'




export default function Card({ offerCard }) {

    const [showOfferBanner, setShowOfferBanner] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 700) {
                setShowOfferBanner(true)
            }
        })
    }, [])


    return (
        <div className={`w-full h-full p-2 group cursor-default rounded-xl max-w-sm mx-auto relative flex items-start flex-col ${offerCard ? "bg-main-color5" : "bg-main-color4 border-[1px] border-gray-400 text-main-color1 shadow-[0_0_5px_rgba(0,0,0,0.4)]"}`}>
            <div className="w-full h-60 bg-red-100  relative rounded-xl overflow-hidden ">
                <Image className="group-hover:scale-110 duration-300 " loading="lazy" src="/images/foods/food-1.jpg" alt="food-img" fill sizes="100%" style={{objectFit:"cover" }} />
                
            </div>
            <div className=" flex flex-col items-start w-full text-res-600">
                <div className="w-full flex items-center justify-between mt-3">   
                <h3 className={`text-xl ${offerCard ? "text-main-color4" : "text-main-color1"}`}>نام غذا</h3>

                <Rating  name="read-only" value={4} readOnly size="small"/>
                </div>
                <div className="flex items-center justify-between mt-3">
                <p className={`${offerCard ? "text-main-color4" : "text-main-color1"}`}>قیمت : 48000 تومان</p>
                {offerCard && (
                    <p className={` line-through text-sm  mr-2 ${offerCard ? "text-gray-300" : "text-main-color1"}`}> 48000 تومان</p>
                )}
                </div>
                <div className="w-full flex items-center justify-between mt-3">
                    <p className={`text-sm ${offerCard ? "text-main-color4" : "text-main-color1"}`}>یکم توضیحات از غذا</p>
                    <div >
                        <BuyBtn title="سفارش غذا" color={offerCard ? "bg-main-color4" : "bg-main-color5"} textColor={offerCard ? "text-main-color1" : "text-main-color4"} />
                    </div>
                </div>
            </div>
            

            {offerCard && (
                <div className={`w-24  absolute -top-[18.5px] left-2  flex items-center justify-center duration-1000 ${showOfferBanner ? "h-24" : "h-0"}`}>
                    <Image src="/images/offer-banner2.png" alt="offer-banner" fill sizes="100%" />
                    <p className="z-10 text-main-color4 font-300">50٪</p>
                </div>
            )}
        </div>
    )
}
