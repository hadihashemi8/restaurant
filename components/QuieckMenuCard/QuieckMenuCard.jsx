import Image from 'next/image'
import React from 'react'
import BuyBtn from '../BuyBtn/BuyBtn'

export default function QuieckMenuCard() {
    return (
        <div className='w-full group h-full bg-white rounded-xl overflow-hidden p-2 shadow-[0_0_5px_rgba(0,0,0,0.4)]'>
            <div className='relative w-full h-40 rounded-xl overflow-hidden'>
                <Image className="group-hover:scale-110 duration-300 " loading="lazy" alt='p-1' src="/images/foods/food-1.jpg" fill sizes='100%' style={{objectFit:"cover"}} />
            </div>
            <div className='flex flex-col items-center justify-between mt-2 '>
                <div className='flex items-center justify-around w-full'>
                    <p className='text-sm text-main-color1' >نام غذا</p>
                    <p className='text-sm text-main-color1'>150000</p>
                </div>
                <div className='mt-2'>
                    <BuyBtn title="سفارش غذا" color="bg-main-color5" textColor="text-main-color4"/>
                </div>
            </div>
        </div>
    )
}
