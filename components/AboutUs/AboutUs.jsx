import Button from "../Button/Button";
import Title from "../Title/Title";



export default function AboutUs() {
    return (
        <div className=" p-4 pt-20 flex items-center justify-center ">
            <div className="flex flex-col items-center  px-5">
                <Title title="درباره ما" />
                <div className=" flex flex-col md:flex-row md:items-center mt-10 ">
                    <div className="max-w-lg  relative">
                        <img className="bg-main-color4" src="/images/aboutUs-logo.png" alt="logo" />
                        {/* <span className="absolute top-0 left-0 bg-red-500 h-2 w-2"></span> */}
                    </div>
                    <div className="flex items-center justify-center mt-4 sm:mt-0 ">
                        <div className="flex flex-col items-center lg:w-2/3">
                            <h2 className="text-2xl md:text-4xl self-start">رستوران نمونه</h2>
                            <p className="text-justify mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <div className="mt-4 self-end">
                                <Button title="تماس با ما" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
