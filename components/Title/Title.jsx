

export default function Title({ title, theme2 }) {
    return (
        <div className={`relative p-2 px-3 group border-[1px] border-gray-500  duration-500  ${theme2 ? "hover:shadow-[0px_0px_5px_rgb(229,124,35)] hover:border-main-color2" : "hover:shadow-[0px_0px_5px_rgb(2,84,100)] hover:border-main-color1"}`}>
            <h2 className={` sm:text-2xl sm:group-hover:text-3xl duration-500  text-gray-500 cursor-default group-hover:text-xl ${theme2 ? "group-hover:text-main-color2" : "group-hover:text-main-color1"}`}>{title}</h2>
            <span className={`group-hover:-top-1  group-hover:-right-1 group-hover:rotate-45 opacity-0 group-hover:opacity-100  duration-500 w-2 h-2   absolute top-1/2 right-1/2 ${theme2 ? "bg-main-color2" : "bg-main-color1"}`}></span>
            <span className={`group-hover:-bottom-1  group-hover:-left-1 group-hover:rotate-45 opacity-0 group-hover:opacity-100  duration-500 w-2 h-2   absolute bottom-1/2 left-1/2 ${theme2 ? "bg-main-color2" : "bg-main-color1"}`}></span>
            <span className={`group-hover:-top-1  group-hover:-left-1 group-hover:rotate-45 opacity-0 group-hover:opacity-100  duration-500 w-2 h-2   absolute top-1/2 left-1/2 ${theme2 ? "bg-main-color2" : "bg-main-color1"}`}></span>
            <span className={`group-hover:-bottom-1  group-hover:-right-1 group-hover:rotate-45 opacity-0 group-hover:opacity-100  duration-500 w-2 h-2   absolute bottom-1/2 right-1/2 ${theme2 ? "bg-main-color2" : "bg-main-color1"}`}></span>
        </div>
    )
}
