import React from 'react'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import Title from '../components/Title/Title';
import { useRouter } from "next/router"
import { useFormik } from 'formik';
import { signIn } from "next-auth/react"
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import * as Yup from "yup"

export default function SignIn() {

    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            password: ''
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string().min(11, "این شماره تلفن معتبر نمیباشد").max(11, "این شماره تلفن معتبر نمیباشد").required(" ").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "این شماره تلفن معتبر نمیباشد"),
        }),
        onSubmit: async values => {

            const result = await signIn("credentials", {
                redirect: false,
                phoneNumber: values.phoneNumber,
                password: values.password,
                callbackUrl: '/'
            })

            console.log(result);

            if (result.ok) {
                Swal.fire({
                    title: "ورود با موفقیت انجام شد",
                    icon: "success",
                    confirmButtonText: "صفحه اصلی",
                    confirmButtonColor: "#025464"
                })
                    .then(res => {
                        if (res.isConfirmed || res.isDismissed) {
                            router.push("/")
                        }
                    })

                
            } else {
                toast.error("نام کاربری یا رمز عبور معتبر نمیباشد", {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: true,
                    theme: "colored",

                })
            }

        }

    })

    return (
        <AuthLayout>
            <div className='bg-main-color4 w-full p-5 flex flex-col items-center justify-center  col-span-1'>
                {/* <h2 className='text-xl'>صفحه ورود</h2> */}
                <Title title=' ورود' theme="bg-main-color1" />

                <form autoComplete='off' onSubmit={formik.handleSubmit} className=' h-full w-3/4 sm:w-2/3 flex mt-2 flex-col items-center ' dir='rtl'>
                    <div className='flex w-full relative mt-9'>
                        <input
                             className={`p-2 w-full outline-none focus:border-[1px]   duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4   ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "valid:border-main-color5 focus:border-main-color5 border-b-main-color5 text-main-color5" : "valid:border-main-color1 focus:border-main-color1 border-b-gray-500 text-main-color1"}`}
                            type="tel"
                            required
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        <label className={`absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base   px-2  peer-focus:-top-1 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:-top-1 peer-valid:bg-main-color4 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "peer-valid:text-main-color5 peer-focus:text-main-color5 text-main-color5" : "text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1"}`}>شماره تلفن</label>
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <span className='text-main-color5 text-xs mt-1 absolute top-full right-2'>{formik.errors.phoneNumber}</span>
                        ) : null}
                    </div>


                    <div className='flex items-center justify-between w-full relative mt-9 '>
                        <input
                            className='p-2 w-full outline-none focus:border-[1px]  border-b-gray-500 duration-300 border-[1px] border-transparent  focus:rounded-xl valid:rounded-xl peer bg-main-color4  valid:border-main-color1 focus:border-main-color1'
                            type="password"
                            required
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange} />

                        <label className='absolute top-1/2 right-2 -translate-y-1/2 text-sm peer-valid:text-base peer-focus:text-base text-gray-500 peer-valid:text-main-color1 peer-focus:text-main-color1 px-2  peer-focus:top-0 peer-focus:bg-main-color4 pointer-events-none duration-300 peer-valid:top-0 peer-valid:bg-main-color4'>رمز عبور</label>
                    </div>

                    <div className='w-full mt-8 flex flex-col  items-center justify-between '>
                        <div className='flex items-center '>
                            <button type="submit" className=' px-4 py-2 bg-main-color1 text-main-color4 mx-1'>ورود</button>
                            <button onClick={() => router.push('/')} className=' px-4 py-2 bg-main-color1 text-main-color4  mx-1'>صفحه اصلی</button>
                        </div>
                        <span className='mt-4 text-sm text-center flex items-center justify-between text-gray-500'>
                            حساب ندارید؟
                            <span className='text-blue-600 cursor-pointer mr-1' onClick={() => router.push('SignUp')}>
                                ثبت نام کنید
                            </span>
                        </span>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}
