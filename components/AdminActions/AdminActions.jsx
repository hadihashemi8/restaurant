import React from 'react'

const AdminActions = () => {
    return (
        <div className='flex flex-col sm:flex-row flex-wrap items-center justify-around w-full h-full px-4'>
            <button className='mt-2 py-5 px-8 bg-main-color1  text-white border-[1px] border-main-color1 hover:bg-white hover:text-main-color1 duration-300 cursor-pointer w-44'>لیست سفارشات</button>
            <button className='mt-2 py-5 px-8 bg-main-color1  text-white border-[1px] border-main-color1 hover:bg-white hover:text-main-color1 duration-300 cursor-pointer w-44'>میزان فروش </button>
            <button className='mt-2 py-5 px-8 bg-main-color1  text-white border-[1px] border-main-color1 hover:bg-white hover:text-main-color1 duration-300 cursor-pointer w-44'> پشتیبانی</button>
        </div>
    )
}

export default AdminActions