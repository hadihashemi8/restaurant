import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import Image from 'next/image'
import BuyBtn from '../BuyBtn/BuyBtn'

export default function OrderSection() {
    return (
        <div className=" p-4 pt-20 flex items-center  justify-center">
            <div className=' w-full flex flex-col items-center relative'>
                <Title title="بخش سفارش" theme="bg-main-color1" />
                <div className='flex items-center justify-center relative bg-[url(/images/order-bg2.jpg)] bg-cover bg-center bg-fixed mt-14 h-96 w-full'>

                    <div className='w-full h-full  p-4 flex flex-col items-center justify-between  sm:flex-row '>
                        <div className='group cursor-pointer m-2 w-full sm:w-1/2 h-full relative  '>
                            <Image src="/images/order-section-img.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />
                            <div className='bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)]  duration-300 flex items-center justify-center w-full h-full absolute top-0 left-0'>
                                {/* <Button title="سفارش غذا" /> */}
                                <BuyBtn title="سفارش غذا" />
                            </div>
                        </div>
                        <div className='group cursor-pointer m-2 w-full sm:w-1/2 h-full relative '>
                            <Image src="/images/order-section-img2.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />
                            <div className='bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] duration-300 flex items-center justify-center w-full h-full absolute top-0 left-0'>
                                <BuyBtn title="رزرو میز" />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
