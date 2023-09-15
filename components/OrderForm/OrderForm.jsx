import React, { useEffect, useState } from 'react'
import Title from "../Title/Title"
import { useDispatch, useSelector } from 'react-redux'
import { clearAll } from '../../redux/slices/ordersSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useSession } from 'next-auth/react'


const OrderForm = ({ setOpenOrderModal }) => {

    const { data: session } = useSession()

    const selector = useSelector(state => state.ordersList)
    const dispatch = useDispatch()

    const [customer, setCustomer] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [orderStatus, setOrderStatus] = useState(false)

    const orderHandler = (e) => {
        e.preventDefault()
        if (customer == "" || phone == "" || address == "") {
            toast.error("همه فیلد هارا پر کنید", {
                position: "top-center",
                hideProgressBar: "true",
                autoClose: 1500,
                theme: "colored"
            })
        } else {

            const newTransAction = {
                id: Date.now(),
                order: [...selector.items.map(item => item)],
                details: { customer, phone, address, status: !orderStatus, total: selector.total }
            }


            axios.put(`/api/Orders/${session?.user.id}`, { newTransAction })
                .then(res => {
                    setOpenOrderModal(false)
                    if(res.status == 201 && !orderStatus){
                        dispatch(clearAll())
                        toast.success("سفارش با موفقیت ثبت شد", {
                            position: "top-center",
                            hideProgressBar: "true",
                            autoClose: 1500,
                            theme: "colored"
                        })
                    }
                })

                if(orderStatus){
                    toast.error("مشکلی پیش آمد!!", {
                        position: "top-center",
                        hideProgressBar: "true",
                        autoClose: 1500,
                        theme: "colored"
                    })
                }




        }
    }


    return (
        <div className=" flex flex-col items-center justify-between">
            <Title title="فرم سفارش" theme="bg-main-color5" />

            <form onSubmit={orderHandler} className='mt-10 flex flex-col items-center justify-between'>
                <div className='flex flex-col  items-center justify-between mb-8'>
                    <div className='flex flex-col items-start ml-2 h-full'>

                        <input className='px-4 py-2 border-[1px] border-b-main-color1 border-transparent focus:border-main-color1 focus:rounded-xl valid:border-main-color1 valid:rounded-xl outline-none mb-8 duration-300 ' type="text" placeholder='نام و نام خانوادگی' value={customer} onChange={e => setCustomer(e.target.value)} required />

                        <input className='px-4 py-2 border-[1px] border-b-main-color1 border-transparent focus:border-main-color1 focus:rounded-xl valid:border-main-color1 valid:rounded-xl outline-none mb-8 duration-300 ' type="text" placeholder='شماره تلفن' value={phone} onChange={e => setPhone(e.target.value)} required />

                    </div>
                    <textarea value={address} onChange={e => setAddress(e.target.value)} required className='px-4 py-2 outline-none border-b-[1px] border-main-color1  ' type="text" rows={5} placeholder='آدرس : ' />
                </div>

                <div className="flex items-center self-start">

                    <label for="status">خرید ناموفق</label>
                    <input checked={orderStatus} onChange={() => setOrderStatus(prev => !prev)} className='mr-2' type="checkbox" id="status" />
                </div>

                <div className='w-full p-2 flex items-center justify-evenly'>
                    <button onClick={() => orderHandler(event)} className='py-2 px-4 outline-none border-none bg-main-color1 text-white'>خرید</button>
                    <button onClick={() => setOpenOrderModal(false)} className='py-2 px-4 outline-none border-none bg-main-color5 text-white'>لغو</button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm