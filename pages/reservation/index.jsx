import React from 'react'
import Layout from '../../components/Layout/Layout'
import Image from 'next/image'

const index = () => {
    return (
        <>

            <title>رزرو میز</title>


            <Layout>

                <div className='mt-24 flex flex-col items-center'>

                    
                        
                    <Image  src='/images/Under-Construction.jpg' width={700} height={700} quality={95} alt="Under-Construction"/>

                    <h3 className='lg:text-3xl mt-4'>این صفحه در دسترس نمیباشد</h3>

                </div>

            </Layout>
        </>
    )
}

export default index