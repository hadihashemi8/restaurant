import Image from "next/image";
import { useEffect, useState } from "react";


export default function Clock() {

    const [hour, setHour] = useState()
    const [min, setMin] = useState()
    const [sec, setSec] = useState()


    useEffect(() => {
        console.log(hour + min / 2);
        setInterval(() => {

            const date = new Date()
            setHour(date.getHours() * 30)
            setMin(date.getMinutes() * 6)
            setSec(date.getSeconds() * 6)

        });
    }, [hour, min, sec])


    return (
        <div className=" z-40  col-span-1 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 flex items-center justify-center ">
            <div className="w-96 h-96 ">
                <div className="w-full h-full  flex items-center justify-center relative before:w-3 before:h-3 before:absolute before:bg-black before:rounded-full before:z-40">
                    <Image src="/images/watch.png" alt="clock" fill sizes="100%" style={{ objectFit: "cover" }} />
                    <div className="hour absolute w-[160px] h-[160px] ">
                        <div className="hr  w-[160px] h-[160px] absolute flex justify-center rounded-full before:absolute before:w-[8px] before:h-[80px] before:bg-main-color1 before:z-10 before:rounded-tl-[6px] before:rounded-tr-[6px] " style={{ transform: `rotate(${hour * min / 2}deg)` }}></div>
                    </div>
                    <div className="min absolute w-[190px] h-[190px] ">
                        <div className="mn  w-[190px] h-[190px] absolute flex justify-center rounded-full before:absolute before:w-[4px] before:h-[90px] before:bg-main-color2 before:z-20 before:rounded-tl-[6px] before:rounded-tr-[6px]" style={{ transform: `rotate(${min}deg)` }}></div>
                    </div>
                    <div className="sec absolute w-[230px] h-[230px] ">
                        <div className="sc  w-[230px] h-[230px] absolute flex justify-center rounded-full before:absolute before:w-[2px] before:h-[150px] before:bg-main-color5 before:z-10 before:rounded-tl-[6px] before:rounded-tr-[6px]" style={{ transform: `rotate(${sec}deg)` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
