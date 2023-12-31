import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import BuyBtn from "../BuyBtn/BuyBtn";
import { Box, Modal, Rating } from "@mui/material";
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";
import { useDispatch } from "react-redux";
import { addToList, removeFromList } from "../../redux/slices/ordersSlice";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";



export default function Card({ offerCard, data }) {

    const { data: session } = useSession()

    const dispatch = useDispatch()

    const [showOfferBanner, setShowOfferBanner] = useState(false)
    const [detailsModal, setDetailsModal] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY >= 700) {
                setShowOfferBanner(true)
            }
        })
    }, [])


    const addToCard = (e) => {

        e.stopPropagation()
        if(!session){
            toast.warn( "برای سفارش وارد شوید", {
                position: "top-center",
                hideProgressBar: "true",
                autoClose: 1500,
                theme: "colored"
            })
        }else{
            const product = {
                id: data._id,
                title: data.name,
                price: data.price,
                image: data.image,
                offerPresent: data.offerPresent,
                qty: 1,
    
            }
    
            dispatch(addToList(product))
            toast.success("لیست سفارشات بروزرسانی شد", {
                position: "top-center",
                hideProgressBar: "true",
                autoClose: 1500,
                theme: "colored"
            })
        }

    }



    return (
        <>
            <div onClick={() => setDetailsModal(true)} className={`w-full h-full p-2 group rounded-xl max-w-sm mx-auto relative flex items-start flex-col cursor-pointer ${offerCard ? "bg-main-color5" : "bg-main-color4 border-[1px] border-gray-400 text-main-color1 shadow-[0_0_2px_rgba(0,0,0,0.4)]"}`}>
                <div className="w-full h-60 bg-red-100  relative rounded-xl overflow-hidden ">
                    <Image className="group-hover:scale-110 duration-300 " loading="lazy" src={data?.image} alt="food-img" fill sizes="100%" style={{ objectFit: "cover" }} />

                </div>
                <div className=" flex flex-col items-start w-full text-res-600">
                    <div className="w-full flex items-center justify-between mt-3">
                        <h3 className={`text-xl ${offerCard ? "text-main-color4" : "text-main-color1"}`}>{data?.name}</h3>

                        <Rating name="read-only" value={4} readOnly size="small" />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <p className={`${offerCard ? "text-main-color4" : "text-main-color1"}`}>قیمت :   {
                            offerCard ? (data?.offerPresent == 0 ? data?.price : ((data?.price - (data?.offerPresent * data?.price) / 100) == 0 ? "رایگان" : `${(data?.price - (data?.offerPresent * data?.price) / 100)} تومان`)) : data?.price
                        } </p>
                        {offerCard && (
                            <p className={` line-through text-sm  mr-2 ${offerCard ? "text-gray-300" : "text-main-color1"}`}> {data?.price} تومان</p>
                        )}
                    </div>
                    <div className="w-full flex items-center justify-between mt-3">
                        <p className={`text-sm ${offerCard ? "text-main-color4" : "text-main-color1"}`}>{data?.aboutProduct}</p>
                        <div >
                            <BuyBtn buyFunc={addToCard} title="سفارش غذا" color={offerCard ? "bg-main-color4" : "bg-main-color5"} textColor={offerCard ? "text-main-color1" : "text-main-color4"} />
                        </div>
                    </div>
                </div>


                {offerCard && (
                    <div className={`w-24  absolute -top-[18.5px] left-2  flex items-center justify-center duration-1000 ${showOfferBanner ? "h-24" : "h-0"}`}>
                        <Image src="/images/offer-banner2.png" alt="offer-banner" fill sizes="100%" />
                        <p className="z-10 text-main-color4 font-300">{data?.offerPresent} %</p>
                    </div>
                )}
            </div>


            <Modal

                open={detailsModal}
                onClose={() => setDetailsModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl w-[80%] bg-white p-4 ">
                    <ProductDetailsModal infos={data} offerCard={offerCard} setDetailsModal={setDetailsModal} />
                </Box>
            </Modal>

        </>
    )
}
