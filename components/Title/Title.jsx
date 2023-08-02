

export default function Title({ title, theme }) {
    return (
        <div className={`w-full  flex items-center justify-center   `}>
            <span className={`w-1/4 mx-2 h-[1px] ${theme}`}></span>
            <h2 className={` sm:text-2xl  text-gray-500 cursor-default px-3 border-x-[1px] border-gray-500`}>{title}</h2>
            <span className={`w-1/4 mx-2 h-[1px] ${theme}`}></span>
        </div>
    )
}
