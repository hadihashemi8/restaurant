
import { useEffect, useState } from "react";
import Title from "../Title/Title";
import Image from "next/image"



export default function ContactUs() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


    return (
        <div id="Contect-us" className=" p-4 mt-20 flex items-center justify-center ">
            <div className="flex flex-col items-center  px-5">
                <Title title="تماس با ما" theme="bg-main-color1" />
                <div className=" flex flex-col md:flex-row items-center mt-10 ">
                    <div className=" md:w-1/2 relative flex items-center justify-center ">
                        <Image width={500} height={500} className="bg-main-color4" src="/images/contact-us.png" alt="logo" />
                    </div>
                    <div className="flex items-center md:w-1/2  justify-center mt-4 sm:mt-0 ">
                        <div className="flex flex-col items-center lg:w-3/4">
                            <h2 className="text-2xl md:text-4xl self-start mt-5">رستوران نمونه</h2>
                            <p className="text-justify mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک.</p>

                            {isClient && (
                                <table className="mt-10 w-full border-spacing-y-2 border-separate">
                                    <tr className="cursor-default ">
                                        <th className="text-start border-r-2 border-main-color1 text-sm mx-1 p-2  ">شماره تماس : </th>
                                        <td className="text-center text-sm mx-1 p-2 ">
                                            09111111111
                                            <br/>
                                            09111111111
                                        </td>
                                  
                                    </tr>
                                    <tr className="cursor-default ">
                                        <th className="text-start border-r-2 border-main-color1 text-sm mx-1 p-2  ">شبکه های مجازی : </th>
                                        <td className="text-center text-sm mx-1 p-2 ">instagram<br/>
                                        telegram
                                        </td>
                                       
                                    </tr>
                                    <tr className="cursor-default ">
                                        <th className="text-start border-r-2 border-main-color1 text-sm mx-1 p-2  ">ایمیل : </th>
                                        <td className="text-center  text-sm  mx-1 p-2 ">thisIsEmail@gmail.com</td>
                                    </tr>
                                    <tr className="cursor-default ">
                                        <th className="text-start border-r-2 border-main-color1 text-sm mx-1 p-2  ">آدرس : </th>
                                        <td className="text-center  text-sm  mx-1 p-2 ">این یک آدرس تستی است</td>
                                    </tr>
                                </table>
                            )}


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
