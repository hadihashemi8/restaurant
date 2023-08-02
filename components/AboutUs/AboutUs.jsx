import Button from "../Button/Button";
import Title from "../Title/Title";



export default function AboutUs() {
    return (
        <div className=" p-4 pt-20 flex items-center justify-center ">
            <div className="flex flex-col items-center  px-5">
                <Title title="درباره ما" />
                <div className=" flex flex-col sm:flex-row sm:items-center mt-10 ">
                    <div className="max-w-md">
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <div className="flex items-center justify-center mt-4 sm:mt-0 ">
                        <div className="flex flex-col items-center md:w-2/3">
                            <p className="text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <div className="mt-4">
                                <Button title="تماس با ما" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
