import React, { useEffect } from 'react'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import Title from '../components/Title/Title';
import { useFormik } from "formik"
import { useState } from 'react';
import * as Yup from "yup"
import { useRouter } from "next/router"
import { toast } from 'react-toastify';
import Swal from "sweetalert2"
import { getSession, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';



export default function SignUp(props) {

    const { status, data: session } = useSession()
    const [formError, setFormError] = useState('')
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',


        },
        validationSchema: Yup.object({
            name: Yup.string().matches("^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$", "فقط حروف فارسی قابل استفاده است").min(5, "تعداد کاراکترها باید بیشتر از 5 باشد").required(" "),
            phoneNumber: Yup.string().min(11, "این شماره تلفن معتبر نمیباشد").max(11, "این شماره تلفن معتبر نمیباشد").required(" ").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "این شماره تلفن معتبر نمیباشد"),
            password: Yup.string().min(8, "تعداد کاراکترها باید بیشتر از 8 باشد").required(" "),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'رمز عبور یکسان نمیباشد')
        }),

        onSubmit: values => {
            if (formik.values.name == "" || formik.values.phoneNumber == "" || formik.values.password == "" || formik.values.confirmPassword == ""
            ) {
                setFormError("فیلد هارا بررسی کنید")
                setTimeout(() => {
                    setFormError("")
                }, 1500);
            }

            const newUser = {
                fullName: values.name,
                phoneNumber: values.phoneNumber,
                password: values.password,

            }


            fetch('/api/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then(res => {
                console.log(res);
                if (res.status == 422) {
                    toast.error("کاربری با این شماره تلفن وجود دارد", {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: true,
                        theme: "colored",

                    })
                }
                if (res.ok) {
                    Swal.fire({
                        title: "ثبت نام با موفقیت انجام شد",
                        icon: "success",
                        confirmButtonText: "ورود",
                        confirmButtonColor: "#025464"
                    })
                        .then(res => {
                            if (res.isConfirmed || res.isDismissed) {
                                router.push("SignIn")
                            }
                        })



                }


            })
        }
    })



    useEffect(() => {
        if (status == "authenticated") {
            router.push("/")
        }

    }, [session, status , router])



    return (
        <AuthLayout>
            <div className='bg-main-color4 w-full  h-full p-5 flex flex-col items-center justify-center  col-span-1'>
                {/* <h2 className='text-xl'>صفحه ثبت نام</h2> */}
                <Title title='ثبت نام' theme="bg-main-color1" />
                <form autoComplete='off' onSubmit={formik.handleSubmit} className='  h-full w-3/4 sm:w-2/3 flex mt-2 flex-col items-center ' dir='rtl'>

                    <div className='flex flex-col w-full relative mt-9'>
                        <input
                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.name && formik.errors.name ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            required

                        />
                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.name && formik.errors.name ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>نام و نام خانوادگی</label>
                        {formik.touched.name && formik.errors.name ? (
                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.name}</span>
                        ) : null}
                    </div>

                    <div className='flex flex-col w-full relative mt-9'>
                        <input
                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                            type="tel"
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}
                            required

                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.phoneNumber}</span>
                        ) : null}
                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>شماره تلفن</label>
                    </div>

                    <div className='flex flex-col w-full relative mt-9 '>
                        <input
                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.password && formik.errors.password ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}

                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            required

                        />
                        {formik.touched.password && formik.errors.password ? (
                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.password}</span>
                        ) : null}
                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.password && formik.errors.password ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>رمز عبور</label>
                    </div>

                    <div className='flex flex-col w-full relative mt-9'>
                        <input
                            className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                            type="password"
                            name="confirmPassword"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.confirmPassword}</span>
                        ) : null}
                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>تایید رمز عبور</label>
                    </div>

                    <span className='mt-6 text-xs text-main-color5 '>{formError ? formError : ''}</span>

                    <div className='w-full mt-10 flex flex-col  items-center justify-between '>
                        <div className='flex items-center justify-center w-full'>
                            <button type="submit" className=' px-2 py-2 bg-main-color1 text-main-color4 mx-1 text-sm'>ثبت نام</button>
                            <button onClick={() => router.push('/')} className=' px-2 py-2 bg-main-color1 text-main-color4  mx-1 text-sm'>صفحه اصلی</button>
                        </div>

                        <span className='mt-4 text-sm text-center flex items-center justify-between text-gray-500'>
                            حساب دارید؟
                            <span className='text-blue-600 cursor-pointer mr-1 ' onClick={() => router.push('SignIn')}>
                                وارد شوید
                            </span>
                        </span>

                    </div>


                </form>
            </div>
        </AuthLayout>
    )



}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

  

    if (session) {
        return {
            redirect: {
                destination: "/",
                premanent:false
            }

        }
    }


    return {
        props: {}
    }
}
