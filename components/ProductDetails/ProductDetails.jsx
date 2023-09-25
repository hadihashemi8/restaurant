import Image from 'next/image'
import React from 'react'

const ProductDetails = ({ productInfo }) => {
    return (
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-lg ">
                مشخصات محصول
            </h2>

            <div className='flex flex-col lg:flex-row items-center justify-between mt-4 w-full'>

                <div className='w-full lg:w-1/2 h-48 flex items-center justify-center'>
                <div className='relative w-2/3 h-44 rounded-xl overflow-hidden'>
                    <Image src={productInfo.image} fill sizes='100%' style={{ objectFit: "cover" }} alt="product-img" />
                </div>
                </div>

                <div className='w-full lg:w-1/2 h-48  px-2 flex items-stretch justify-center lg:justify-stretch'>
                    <div className=' flex flex-col items-start justify-start'>
                        <p className='mt-2'>{productInfo.name}</p>
                        <p className='mt-2'> قیمت : {productInfo.price}</p>
                        <p className='mt-2'> دسته بندی : {productInfo.categories}</p>
                        <p className='mt-2 h-20 overflow-y-scroll w-full'> {productInfo.aboutProductFull}</p>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ProductDetails