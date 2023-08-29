import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import { Stack } from '@mui/material'
import Button from "@mui/material/Button";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import axios from "axios"
import useFetch from '../../hooks/useFetch';




export default function AddToMenueSection({ isRefresh }) {



    const [file, setFile] = useState("")
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            aboutProduct: "",
            aboutProductFull: "",
            // image: "",
            categories: ""
        },
        onSubmit: values => {
            console.log(values);
            if (values.name == "" || values.price == "" || values.aboutProduct == "" || values.aboutProductFull == "" || file == "" || values.categories == "") {

                toast.error("تمامی فیلد هارا پر کنید", {
                    position: "top-center",
                    hideProgressBar: "true",
                    autoClose: 1500,
                    theme: "colored"

                })
            } else {
                const formData = new FormData()
                formData.append("name", values.name)
                formData.append("price", values.price)
                formData.append("aboutProduct", values.aboutProduct)
                formData.append("aboutProductFull", values.aboutProductFull)
                formData.append("file", file)
                formData.append("categories", values.categories)


                axios.post("/api/product", formData)
                    .then(function (response) {
                        if (response.status == 201) {
                            toast.success("محصول با موفقیت اضافه شد", {
                                position: "top-center",
                                hideProgressBar: "true",
                                autoClose: 1500,
                                theme: "colored"

                            })
                            values.name = ""
                            values.price = ""
                            values.aboutProduct = ""
                            values.aboutProductFull = ""
                            values.categories = ""
                            setFile("")
                            isRefresh()
                        }
                    })
                    .catch(function (error) {
                        if (error.response.status == 400) {
                            toast.error("این فایل نامعتبر میباشد", {
                                position: "top-center",
                                hideProgressBar: "true",
                                autoClose: 1500,
                                theme: "colored"

                            })
                        }
                    });


            }



        }

    })


    return (
        <div className='w-full col-span-1 sm:p-4 flex flex-col items-center justify-start'>
            <Title title="افزودن به منو" theme="bg-main-color5" />

            <div className='w-full'>
                <form autoComplete='off' onSubmit={formik.handleSubmit} dir='rtl' className='mt-6 w-full md:px-20 grid grid-cols-1 sm:grid-cols-2 gap-4'>

                    <div className="w-full mt-8 col-span-1">
                        <input

                            className='placeholder:text-sm w-full p-2 outline-none border-b-[1px] border-main-color1' type='text'
                            placeholder='نام محصول'
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="w-full mt-8 col-span-1">
                        <input

                            className='w-full p-2 outline-none border-b-[1px] border-main-color1 placeholder:text-sm' type='text'
                            placeholder='قیمت محصول به تومان (فقط عدد وارد کنید)'
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="w-full mt-8 col-span-1">
                        <textarea

                            rows={3}
                            className='placeholder:text-sm w-full p-2 outline-none border-b-[1px] border-main-color1 resize-none'
                            type='text'
                            placeholder='درباره محصول (کوتاه)'
                            name="aboutProduct"
                            value={formik.values.aboutProduct}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="w-full mt-8 col-span-1">
                        <textarea

                            rows={3}
                            className='placeholder:text-sm w-full p-2 outline-none border-b-[1px] border-main-color1 resize-none'
                            type='text'
                            placeholder='درباره محصول (کامل)'
                            name="aboutProductFull"
                            value={formik.values.aboutProductFull}
                            onChange={formik.handleChange}

                        />
                    </div>

                    <div className="w-full mt-8 col-span-1">
                        <select

                            className='placeholder:text-sm outline-none border-b-[1px] border-main-color1'
                            name="categories"
                            value={formik.values.categories}
                            onChange={formik.handleChange}
                        >
                            <option value="دسته بندی">دسته بندی</option>
                            <option value="پیتزا">پیتزا</option>
                            <option value="مرغ">مرغ</option>
                            <option value="همبرگر">همبرگر</option>
                            <option value="دسر">دسر</option>
                            <option value="کباب">کباب</option>
                            <option value="پاستا">پاستا</option>
                            <option value="نوشیدنی">نوشیدنی</option>
                        </select>
                    </div>

                    <Stack className='col-span-1 mt-8 mx-auto' direction="row" alignItems="center" spacing={2}>
                        <Button className="upload-pic bg-main-color1 rounded-md" variant="contained" component="label">
                            عکس محصول
                            <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                                name="image"
                                // value={file}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </Button>
                    </Stack>

                    <button className='rounded-md py-2 px-4 bg-main-color5 text-main-color4 col-span-1 md:col-span-2 mt-8'>
                        افزودن محصول
                    </button>

                </form>
            </div>

        </div>
    )
}
