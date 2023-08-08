import Button from "../Button/Button";
import Title from "../Title/Title";



export default function AboutUs() {
    return (
        <div className=" p-4 pt-20 flex items-center justify-center ">
            <div className="flex flex-col items-center  px-5">
                <Title title="درباره ما" theme="bg-main-color1"/>
                <div className=" flex flex-col md:flex-row items-center mt-10 ">
                    <div className=" md:w-1/2 relative ">
                        <img className="bg-main-color4" src="/images/aboutUs-logo.png" alt="logo" />
                    </div>
                    <div className="flex items-center md:w-1/2  justify-center mt-4 sm:mt-0 ">
                        <div className="flex flex-col items-center lg:w-2/3">
                            <h2 className="text-2xl md:text-4xl self-start">رستوران نمونه</h2>
                            <p className="text-justify mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <p className="text-justify mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <div className="mt-4 self-end">
                                <Button title="تماس با ما" />
                            </div>
                        <h2 className="text-2xl mt-5 self-start text-main-color5 w-52 text-justify  -rotate-12 ">غذای گرم و تازه را در هر ساعت از شبانه روز سفارش دهید</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
