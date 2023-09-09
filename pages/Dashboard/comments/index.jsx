import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { getSession, useSession } from 'next-auth/react'
import Title from '../../../components/Title/Title'
import { Box, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import useFetch from '../../../hooks/useFetch'
import UserDetails from '../../../components/UserDetails/UserDetails'
import axios from 'axios'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import ProductDetails from '../../../components/ProductDetails/ProductDetails'



const columns = [
    {
        id: 'comment',
        label: 'متن کامنت',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'date',
        label: 'تاریخ ثبت',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'userInfo', label: '', minWidth: 150 },
    { id: 'productInfo', label: '', minWidth: 150 },
    {
        id: 'publish',
        label: '',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'remove',
        label: '',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];

const Comments = () => {

    const { data: session } = useSession()

    // modals 
    const [autherDetailsOpen, setAutherDetailsOpen] = useState(false)
    const [productDetailsOpen, setProductDetailsOpen] = useState(false)

    const { data, error, loading, isRefresh } = useFetch("/api/product/productComments")
    const [itemRows, setItemRows] = useState(null)

    const [productInfo, setProductInfo] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {

        const comments = []

        data.forEach(item => {
            item.comments.map(item => comments.push(item))
        })

        setItemRows(comments)
    }, [data])


    // show comment Auther details function

    const autherDetailsHandler = (uId) => {

        axios.get(`/api/users/userComments/${uId}`)
            .then(response => {
                if (response.status == 201) {
                    console.log(response);
                    setUserInfo(response.data.data)
                    setAutherDetailsOpen(true)
                }
            }).catch(err => console.log(err))



    }


    // show product details function
    const showProductDetails = (pId) => {

        axios.get(`/api/product/productComments/${pId}`)
            .then(response => {

                setProductInfo(response.data.data)
                setProductDetailsOpen(true)
            })

    }



    // published comment function
    const publishedComments = (pId, id) => {

        const item = itemRows.find(item => item.id == id).published

        axios.put(`/api/product/productComments/publish/${pId}`, { id, published: !item })
            .then(response => {
                isRefresh()
                console.log(response);
            })
    }



    // remove comment function

    const removeCommentHandler = (pId, id) => {

        Swal.fire({
            title: "از حذف کامنت مطمئن هستین؟",
            icon: "warning",
            showCancelButton: "true",
            cancelButtonText: "لغو",
            cancelButtonColor: "#EE4041",
            confirmButtonText: "بله",
            confirmButtonColor: "#025464",

        }).then(res => {
            if (res.isConfirmed) {
                axios.delete(`/api/product/productComments/${pId}`, { data: { id } })
                    .then(res => {
                        if (res.status == 201) {
                            toast.success("کامنت با موفقیت حذف شد", {
                                position: "top-center",
                                hideProgressBar: "true",
                                autoClose: 1500,
                                theme: "colored"

                            })

                            isRefresh()
                        }
                    })
            }
        })


    }




    return (
        <DashboardLayout>
            <div className='w-full h-full grid grid-cols-1  gap-4 '>
                <div className='col-span-1 p-4'>

                    <div className='w-full flex flex-col md:flex-row items-center justify-center'>
                        <div className='w-full md:flex-1'>
                            <Title title="لیست کامنت ها" theme="bg-main-color1" />
                        </div>
                    </div>


                    <Paper dir="rtl" sx={{ width: '100%', overflow: 'hidden', marginTop: '24px' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                className="table-thead"
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth, textAlign: "center" }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {itemRows?.sort((a, b) => a.published - b.published).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row?.comment}>
                                                    <TableCell align='right' >
                                                        {row?.comment}
                                                    </TableCell>
                                                    <TableCell align='center'>

                                                        {row?.createdAt}
                                                    </TableCell>

                                                    <TableCell align='center'>
                                                        <button onClick={() => autherDetailsHandler(row?.userId)} className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b'> مشخصات نویسنده</button>
                                                    </TableCell>
                                                    <TableCell onClick={() => showProductDetails(row?.productId)} align='center'>
                                                        <button className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b'> مشخصات محصول</button>
                                                    </TableCell>
                                                    <TableCell onClick={() => publishedComments(row?.productId, row?.id)} align='center'>
                                                        <button className={`${row?.published ? "bg-green-500" : "bg-main-color2"} py-1 px-2 rounded-md text-main-color4 r-b`}>{row?.published ? "منتشر شده" : "درحال بررسی"}</button>
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        <button onClick={() => removeCommentHandler(row?.productId, row?.id)} className='bg-main-color5 py-1 px-2 rounded-md text-main-color4 r-b'>حذف</button>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination

                            rowsPerPageOptions={[10]}
                            component="div"
                            count={itemRows?.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>

                </div>
            </div>

            <Modal

                open={autherDetailsOpen}
                onClose={() => setAutherDetailsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl bg-white p-4 ">

                    <UserDetails userInfo={userInfo} transAction={false} />
                </Box>
            </Modal>

            <Modal

                open={productDetailsOpen}
                onClose={() => setProductDetailsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl bg-white p-4 w-1/2 ">

                    <ProductDetails productInfo={productInfo} />
                </Box>
            </Modal>

        </DashboardLayout>
    )
}

export default Comments





export async function getServerSideProps({ req }) {
    const session = await getSession({ req })



    if (!session) {
        return {
            redirect: {
                destination: "/SignIn",
                premanent: false
            }

        }
    }

    return {
        props: {}
    }
}
