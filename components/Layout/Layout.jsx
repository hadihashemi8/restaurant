import styles from "../../styles/Home.module.css"
import Button from "../Button/Button"
import NavBar from "../NavBar/NavBar"



export default function Layout({ children }) {


    return (
        <div className="max-w-screen-2xl  min-h-screen mx-auto bg-main-color4 " dir="rtl">
            <header >
                <NavBar />
                <div className="bg-[url(/images/header-bg3.jpg)] p-4 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3  bg-cover bg-center bg-no-repeat relative h-[600px]" >
                    <div className=" p-2 flex items-center justify-center sm:items-start col-span-1 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4  ">
                        <div className="bg-[rgba(0,0,0,0.5)] py-5 px-2 flex flex-col items-center  justify-between">
                            <h1 className="text-3xl lg:text-5xl text-main-color4 font-extrabold drop-shadow-lg ">رستواران نمونه</h1>
                            <h2 className="mt-4 lg:mt-6 text-xl text-main-color4 text-center lg:text-3xl">هر زمان غذایی
                                سالم و تازه سفارش دهید</h2>
                            <div className="flex mt-4 lg:mt-6">
                                <Button title=" سفارش دهید " />
                            </div>
                        </div>
                    </div>
                    <img className=" w-full absolute bottom-0 left-0 " src="/images/svg/wave-haikei.png" alt="wave" />
                </div>
            </header>
            <div className="container  mx-auto  mt-96 ">
                {children}
            </div>
            <footer></footer>
        </div>
    )
}
