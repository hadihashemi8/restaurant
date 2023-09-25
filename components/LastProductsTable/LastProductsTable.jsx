import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from '../Button/Button'
import Loader from "../Loader/Loader"
import Image from 'next/image'

const LastProductsTable = () => {

    const [productsNumber, setProductsNumber] = useState("3 محصول")
    const [products, setProducts] = useState([])


    useEffect(() => {
        const itemsCount = parseInt(productsNumber)

        axios.get(`/api/product/${itemsCount}`)
            .then(res => {
                if (res.status == 201) {
                    setProducts(res.data.data)
                }
            })

    }, [productsNumber])

    return (
        <>
        {products.length > 0 ? (
            <div className=' w-full   flex flex-col items-center justify-start  h-full lg:h-72  '>
            <h2 className='text-xl'>آخرین محصولات ثبت شده</h2>

            <div className='mt-4 flex items-center justify-start w-full'>
                <select value={productsNumber} onChange={e => setProductsNumber(e.target.value)} className='outline-none border-[1px] border-main-color1'>
                    <option value="3 محصول">3 محصول</option>
                    <option value="5 محصول">5 محصول</option>
                    <option value="10 محصول">10 محصول</option>
                </select>
            </div>

            <div className='w-full  overflow-y-scroll'>
                <table className='w-full mt-2 '>

                    <thead className='bg-main-color4 border-b-[1px] border-main-color1'>
                        <tr>
                            <th className='p-4 border-1'>عکس محصول</th>
                            <th className='p-4 border-1'>نام محصول</th>
                            <th className='p-4 border-1'>قیمت محصول</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products?.reverse().map(item => (
                            <tr key={item.id} className='border-b-[1px] border-gray-200'>
                                <td className='text-center p-4 flex items-center justify-center'>
                                    <Image width={50} height={50} src={item.image} alt="product" />
                                </td>
                                <td className='text-center p-4 '>{item.name}</td>
                                <td className='text-center p-4 '>{item.price}</td>
                            </tr>
                        ))}


                    </tbody>

                </table>
            </div>
            <div className='mt-2'>
                <Button title="مشاهده همه" to="/Dashboard/products" />
            </div>

        </div>
        ) : (
            <Loader/>
        )}
        </>
        
    )
}

export default LastProductsTable