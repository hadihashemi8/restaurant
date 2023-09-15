import { Avatar, formControlLabelClasses } from '@mui/material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { useDispatch } from 'react-redux'
import { addToList } from '../../redux/slices/ordersSlice'


export default function ProductDetailsModal({ infos, offerCard , setDetailsModal }) {

    const { data: session } = useSession()
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()


    const handleComment = (e) => {
        e.preventDefault()

        if (comment.trim() == "") {
            toast.error("باید متن وارد کنید", {
                position: "top-center",
                hideProgressBar: "true",
                autoClose: 1500,
                theme: "colored"

            })

        } else {
            
            const userComment = {
                id: Date.now(),
                userName: session.user.name,
                comment,
                userId: session?.user.id,
                productId: infos._id,
                published: false,
                createdAt: new Date().toLocaleDateString("fa-ir")
            }

            axios.put(`/api/product/productComments/${infos._id}`, userComment)
                .then(res => {
                    if (res.status == 201) {
                       
                            toast.success("کامنت با موفیقت ثبت شد", {
                                position: "top-center",
                                hideProgressBar: "true",
                                autoClose: 1500,
                                theme: "colored"

                            }) 
                    }
                })


            setComment('')
        }

    }

    const addToOrders = () => {
        const product = {
            id: infos._id,
            title: infos.name,
            price: infos.price,
            image: infos.image,
            offerPresent: infos.offerPresent,
            qty: 1,

        }

        dispatch(addToList(product))
        setDetailsModal(false)
        toast.success("لیست سفارشات بروزرسانی شد", {
            position: "top-center",
            hideProgressBar: "true",
            autoClose: 1500,
            theme: "colored"
        })
    }

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            <div className='col-span1  lg:p-5  flex items-center justify-center h-80 '>
                <div className='relative w-full h-full rounded-xl overflow-hidden'>
                    <Image src="/images/foods/food-1.jpg" fill sizes='100%' style={{ objectFit: "cover" }} alt="product-img" />
                </div>
            </div>

            <div className='col-span1 lg:p-5  flex items-start justify-between h-80 '>
                <div className='w-full h-full flex flex-col justify-between'>
                    <h2 className='text-lg '>{infos?.name}</h2>

                    <div className='flex items-center justify-between max-w-fit mt-2'>

                        <p className={` ${offerCard ? "text-main-color1" : "text-main-color1"}`}>قیمت :   {
                            offerCard ? (infos?.offerPresent == 0 ? infos?.price : ((infos?.price - (infos?.offerPresent * infos?.price) / 100) == 0 ? "رایگان" : `${(infos?.price - (infos?.offerPresent * infos?.price) / 100)} تومان`)) : infos?.price
                        } </p>
                        {offerCard && (
                            <p className={` line-through text-sm  mr-2 ${offerCard ? "text-gray-300" : "text-main-color1"}`}> {infos?.price} تومان</p>
                        )}
                    </div>

                    <h2 className='text-lg mt-2'>دسته بندی : {infos?.categories}</h2>
                    <p className='mt-2 text-justify h-24 overflow-y-scroll'>
                        {infos?.aboutProductFull}
                    </p>
                    <button onClick={addToOrders} className='py-2 px-4 rounded-xl bg-main-color5 text-white w-full mt-4'>
                        سفارش
                    </button>
                </div>
            </div>

            <div className='col-span1 md:col-span-2 lg:col-span-1  flex flex-col items-center justify-between lg:p-5 h-80 '>

                {infos?.comments.filter(item => item.published).length ? (
                    <>
                        <h2 className='text-lg'>نظرات کاربران</h2>

                        <div className='flex flex-col items-center w-full h-44 mt-2 overflow-y-scroll  py-1'>

                            {infos?.comments.map(item => {
                                if (item.published) {
                                    return <div className='flex items-stretch justify-between mt-1 w-full bg-main-color4 p-2'>
                                        <Avatar className='w-16 h-16' />
                                        <div className='flex flex-col items-start justify-start   flex-1 pr-2'>
                                            <p className='text-[10px] '>{item?.userName}</p>
                                            <p className='text-sm mt-1'>
                                                {item.comment}
                                            </p>
                                        </div>
                                    </div>
                                }
                            })}



                        </div>
                    </>
                ) : (
                    <h2 className='self-center text-center'>هیچ نظری برای این محصول ثبت نشده است</h2>

                )}

                {session?.user ? (
                    <form onSubmit={handleComment} className="flex  items-center justify-between mt-4 border-[1px] border-main-color1">
                        <input value={comment} onChange={e => setComment(e.target.value)} className='py-1 px-2 outline-none flex-1' type="text" placeholder='نظر خود را وارد کنید' maxLength={45} />
                        <button className='p-2 bg-main-color1 text-white text-sm' >ارسال</button>
                    </form>
                ) : (
                    <p>برای ثبت نظر ابتدا <Link className='text-blue-500 underline' href="/SignIn">وارد</Link> شوید</p>
                )}




            </div>
        </div>
    )
}
