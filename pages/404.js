import React from 'react'
import Navbar from "../components/NavBar/NavBar"
import Button from '../components/Button/Button';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';




const NotFound = () => {
    return (
        <div className="max-w-screen-2xl  min-h-screen mx-auto bg-main-color4 flex flex-col items-center justify-between ">

            <title>صفحه 404</title>

            <Navbar />

            <div className="flex flex-col items-center justify-center pt-8">
                <Image src="/images/404.jpg" width={500} height={500} alt="not found" />
                <h2 className='py-8 text-xl'>اوپس!این صفحه وجود ندارد</h2>
                <Button title="صفحه اصلی" to="/"/>
            </div>

            <Footer/>
        </div>
    )
}

export default NotFound