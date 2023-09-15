import { Box, Divider, List, Modal } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from "react-redux"
import OrderCart from '../OrderCart/OrderCart';
import { clearAll } from "../../redux/slices/ordersSlice"
import Swal from 'sweetalert2';
import OrderForm from '../OrderForm/OrderForm';


const Orders = () => {

    const { data: session } = useSession()

    const selector = useSelector(state => state.ordersList)
    const dispatch = useDispatch()

    const [openOrderModal, setOpenOrderModal] = useState(false)



    const clearAllHandler = () => {
        Swal.fire({
            title: "لیست سفارشات خالی شود؟",
            icon: "warning",
            showCancelButton: "true",
            cancelButtonText: "لغو",
            cancelButtonColor: "#EE4041",
            confirmButtonText: "بله",
            confirmButtonColor: "#025464",

        }).then(res => {
            if (res.isConfirmed) {
                dispatch(clearAll())
            }
        })
    }


    return (
        <>
            <Box
                className="md:w-[400px] h-full  flex flex-col items-center justify-between"
                sx={{ width: 250 }}
                role="presentation"

            >
                <div className=" my-2 flex flex-col items-center justify-between w-full">
                    <p className="text-xl">سفارشات</p>
                    <p className="text-xs text-main-color5 w-full mt-1 text-center">برای سفارش بالای 10 عدد تماس بگیرید</p>
                </div>
                <Divider />

                {session?.user ? (
                    <>
                        <List className="p-5 w-full flex-1">

                            {selector.items.length > 0 ? (
                                selector.items.map(item => (
                                    <OrderCart key={item.id} {...item} />
                                ))
                            ) : (
                                <p className=' my-auto text-center'>شما سفارشی ندارید</p>
                            )}

                        </List>
                        <Divider />

                        <div className='sticky bottom-0 left-0 w-full flex flex-col items-center justify-between '>
                            <div className='flex items-strach justify-between w-full'>
                                <button onClick={() => setOpenOrderModal(true)} className="p-4 border-none outline-none bg-green-500 w-1/2 text-center  text-white " disabled={!selector.items.length > 0}>مرحله بعد</button>
                                <button onClick={clearAllHandler} className="p-4 border-none outline-none bg-main-color5 w-1/2 text-center  text-white " disabled={!selector.items.length > 0}>حذف همه</button>
                            </div>
                            <div className='p-4 bg-white w-full text-center'>
                                جمع کل :‌ {selector.total} تومان
                            </div>
                        </div>
                    </>
                ) : (
                    <p className=' mt-20 text-center my-auto'>برای مشاهده لیست سفارشات <Link className='text-blue-500' href="/SignIn">وارد</Link> شوید</p>
                )}

            </Box>

            <Modal

                open={openOrderModal}
                onClose={() => setOpenOrderModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl w-[80%] md:w-2/3 lg:w-1/2 bg-white p-4 ">
                    <OrderForm setOpenOrderModal={setOpenOrderModal}/>
                </Box>
            </Modal>
        </>

    )
}

export default Orders