import Image from 'next/image'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export default function AuthLayout({ children }) {

    

    return (
        <>
            <div className='min-h-screen w-full relative max-w-screen-2xl mx-auto'>
                <Image className='blur-sm -z-50' alt="login-bg" src="/images/login-bg.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />
                <ToastContainer className="text-center font" />

                <div className=' rounded-xl overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-2/3 h-[570px]  border-[2px] border-main-color4'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 h-full    bg-white'>

                        {/* bg section */}
                        <div className={`relative  duration-200 hidden sm:flex col-span-1 w-full`}>
                            <Image alt="login-img" src="/images/login-form-bg2.jpg" fill sizes='100%' style={{ objectFit: "cover" }} />
                        </div>

                        {/* forms section */}
                        {children}

                    </div>
                </div>
            </div>
        </>
    )
}
