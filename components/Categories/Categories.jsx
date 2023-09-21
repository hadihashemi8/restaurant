import Image from "next/image";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Link from "next/link";



export default function Categories() {
  return (
    <div className="p-4 pt-20 flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <Title title="دسته بندی" theme="bg-main-color2" />
        <div className=" w-full mt-10  grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

          <div className="flex flex-col items-center justify-between  col-span-1 relative h-40 cursor-pointer">
            <Image alt="pitzza" src="/images/categories/pitzza.jpg" fill loading="lazy" sizes="100%" style={{ objectFit: "cover" }} />
            <div className="duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.4)] ">
              <Link href="/FoodsMenue">
                <Button title="پیتزا" />
              </Link>
            </div>
          </div>


          <div className="flex flex-col items-center justify-between col-span-1 relative h-40 cursor-pointer">
            <Image alt="hamburger" src="/images/categories/hamburger.jpg" fill loading="lazy" sizes="100%" style={{ objectFit: "cover" }} />
            <div className="duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.4)] ">
              <Link href="/FoodsMenue">
                <Button title="همبرگر" />
              </Link>
            </div>
          </div>


          <div className="flex flex-col items-center justify-between col-span-1 relative h-40 cursor-pointer">
            <Image alt="kabab" src="/images/categories/kebab.jpg" fill loading="lazy" sizes="100%" style={{ objectFit: "cover" }} />
            <div className="duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.4)] ">
              <Link href="/FoodsMenue">
                <Button title="کباب" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between col-span-1 relative h-40 cursor-pointer">
            <Image alt="pasta" src="/images/categories/pasta.jpg" fill loading="lazy" sizes="100%" style={{ objectFit: "cover", backgroundPosition: "top" }} />
            <div className="duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.4)] ">
              <Link href="/FoodsMenue">
                <Button title="پاستا" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between col-span-1 relative h-40 cursor-pointer self-center">
            <Image alt="turkey" src="/images/categories/turkey.jpg" fill loading="lazy" sizes="100%" style={{ objectFit: "cover" }} />
            <div className="duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.4)] ">
              <Link href="/FoodsMenue">
                <Button title="مرغ" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between col-span-1 relative h-40 cursor-pointer self-center">
            <Image alt="dessert" src="/images/categories/dessert.jpg" fill loading="lazy" sizes="100%" style={{ objectFit: "cover" }} />
            <div className="duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.4)] ">
              <Link href="/FoodsMenue">
                <Button title="دسر" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

