import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import BuyBtn from "../BuyBtn/BuyBtn";


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
        <div className={`w-full h-full p-2  rounded-xl max-w-sm mx-auto relative flex items-start flex-col ${offerCard ? "bg-main-color5" : "bg-main-color2"}`}>
            <div className="w-full h-2/3 bg-red-100 relative rounded-xl overflow-hidden">
                <Image src="/images/foods/food-1.jpg" alt="food-img" fill sizes="100%" style={{ objectFit: "cover" }} />
            </div>
            <div className=" flex flex-col items-start w-full ">
                <h3 className="text-2xl text-main-color4 mt-3">نام غذا</h3>
                <p className="text-main-color4 text-lg mt-3">قیمت : 48000 تومان</p>
                <div className="w-full flex items-center justify-between mt-3">
                    <p className="text-main-color4 ">یکم توضیحات از غذا</p>
                    <div className="hover:-translate-y-1 duration-300">
                        <BuyBtn title="سفارش غذا" />
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
