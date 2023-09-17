import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from '../Button/Button'
import Loader from '../Loader/Loader'



const LastUserTable = () => {

    const [userNumber, setUserNumber] = useState("3 کاربر")
    const [users, setUsers] = useState([])


    useEffect(() => {
        const itemsCount = parseInt(userNumber)

        axios.get(`/api/users/${itemsCount}`)
            .then(res => {
                if (res.status == 201) {
                    setUsers(res.data.data)
                }
            })



       

    }, [userNumber])

    return (
        <>
        {users.length > 0  ? (
            <div className=' w-full   flex flex-col items-center justify-start  h-80 lg:h-72  '>
            <h2 className='text-xl'>آخرین کاربران ثبت شده</h2>

            <div className='mt-4 flex items-center justify-start w-full'>
                <select value={userNumber} onChange={e => setUserNumber(e.target.value)} className='outline-none border-[1px] border-main-color1'>
                    <option value="3 کاربر">3 کاربر</option>
                    <option value="5 کاربر">5 کاربر</option>
                    <option value="10 کاربر">10 کاربر</option>
                </select>
            </div>

            <div className='w-full  overflow-y-scroll'>
                <table className='w-full mt-2 '>

                    <thead className='bg-main-color4 border-b-[1px] border-main-color1'>
                        <tr>
                            <th className='p-4 border-1 '>نام کاربر</th>
                            <th className='p-4 border-1 '>شماره تلفن</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {users?.reverse().map(item => (
                            <tr key={item.id} className='border-b-[1px] border-gray-200'>
                                <td className='text-center p-4 '>{item.fullName}</td>
                                <td className='text-center p-4 '>{item.phoneNumber}</td>
                            </tr>
                        ))}


                    </tbody>

                </table>
            </div>
            <div className='mt-2'>
                <Button title="مشاهده همه" to="/Dashboard/users" />
            </div>
        </div>
        ) : (
            <Loader/>
        )}
        </>
    )
}

export default LastUserTable