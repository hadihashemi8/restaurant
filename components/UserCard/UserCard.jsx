import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const UserCard = () => {

    const { status, data: session } = useSession()
    const [currentTime, setCurrentTime] = useState(null)


    const updateTime = () => {

        const time = new Date().toLocaleString("fa-IR", { hour12: false })
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)

    const logOutHandler = () => {
        Swal.fire({
            title: "میخواهید خارج شوید؟",
            icon: "question",
            showCancelButton: "true",
            cancelButtonText: "لغو",
            cancelButtonColor: "#EE4041",
            confirmButtonText: "بله",
            confirmButtonColor: "#025464",
            reverseButtons: true
        }).then(res => {
            if (res.isConfirmed) {
                Cookies.remove()

                signOut({ callbackUrl: '/' })
            }
        })

    }

    return (
        <div className=' w-full h-full grid grid-cols-4 xl:px-4 '>
            <div className=' col-span-1 flex items-center justify-center h-full'>
                <Avatar className='w-16 h-16 md:w-24 md:h-24' />
            </div>

            <div className='flex justify-between px-2 col-span-3' >

                <div className='flex flex-col items-start justify-between md:py-4'>
                    <p className='text-sm mt-2 lg:mt-0'>نام کاربر : {session?.user.name} </p>
                    <p className='text-sm mt-2 lg:mt-0'>شماره تلفن : {session?.user.phoneNumber}  </p>
                    <p className='text-sm mt-2 lg:mt-0'>نقش کاربر : {session?.user.isAdmin == "ADMIN" ? "مدیر اصلی" : session?.user.isAdmin ? "ادمین" : !session?.user.isAdmin ? "کاربر" : null} </p>
                </div>

                <div className='md:py-4 hidden md:flex flex-col justify-between  items-center  '>
                    <p className='text-sm'>{currentTime}</p>
                    <button className='w-full text-sm py-2 px-4 bg-main-color5 text-white rounded-xl outline-none border-none self-end' onClick={logOutHandler}>خروج از حساب کاربری</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard