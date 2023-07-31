import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'

export default function OrderSection() {
    return (
        <div className=" p-4 pt-20 flex items-center  justify-center">
            <div className=' w-full flex flex-col items-center '>
                <Title title="بخش سفارش" theme2={true} />
                <div className='flex items-center justify-center  bg-[url(/images/order-bg.jpg)] bg-fixed bg-cover bg-center mt-10 h-96 w-full'>
                    <div className='w-full h-full  p-4 flex flex-col items-center justify-between  sm:flex-row '>
                        <div className='group cursor-pointer m-2 w-full sm:w-1/2 h-full relative bg-[url(/images/order-section-img.jpg)] bg-cover bg-no-repeat bg-top'>
                            <div className='bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center w-full h-full absolute top-0 left-0'>
                                <Button title="سفارش غذا"/>
                            </div>
                        </div>
                        <div className='group cursor-pointer m-2 w-full sm:w-1/2 h-full relative bg-[url(/images/order-section-img2.jpg)] bg-cover bg-no-repeat bg-cenetr'>
                            <div className='bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center w-full h-full absolute top-0 left-0'>
                                <Button title="رزرو میز"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
