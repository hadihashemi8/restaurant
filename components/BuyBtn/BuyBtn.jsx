

export default function BuyBtn({id , title , color , textColor, buyFunc}) {




    return (
        <button onClick={(e) => buyFunc(e)} className={` py-2 px-4 text-sm md:text-base cursor-pointer  rounded-xl ${color || "bg-main-color4"} ${textColor || "text-main-color1"} hover:-translate-y-1 duration-300`}>{title}</button>
    )
}
