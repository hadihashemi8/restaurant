import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import Title from '../../../components/Title/Title'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import useFetch from '../../../hooks/useFetch';
import { Box, Modal } from '@mui/material';
import UserDetails from '../../../components/UserDetails/UserDetails';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader/Loader';
import Image from 'next/image';
import OrdersListDetails from '../../../components/OrdersListDetails/OrdersListDetails';






export default function Users() {

    const { status, data: session } = useSession()

    const { data, error, loading, isRefresh } = useFetch("/api/users")
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [columns, setColumns] = useState([
        { id: 'name', label: 'نام کاربر', minWidth: 150 },
        { id: 'phoneNumber', label: 'شماره تلفن', minWidth: 150 },
        {
            id: 'datails',
            label: '',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },



        {
            id: 'order-list',
            label: '',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
    ])

    const [userInfo, setUserInfo] = useState({})
    const [userDetailsOpen, setUserDetailsOpen] = useState(false)
    const [ordersListOpen, setOrdersListOpen] = useState(false)



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {

        const rows = data?.map(item => (
            { id: item._id, name: item.fullName, phoneNumber: item.phoneNumber, isAdmin: item.isAdmin }
        ))

        const filterUser = rows.filter(item => item.id !== session?.user.id)

        setRows(filterUser)

    }, [data, session])

    const showDetailsHandler = (rowId) => {

        const user = data.find(item => item._id == rowId)

        setUserInfo(user)
        setUserDetailsOpen(true)

    }


    //   show ordersList Section

    const showOrdersList = (rowId) => {

        const ordersList = data.find(item => item._id == rowId).orders

        setUserInfo(ordersList)
        setOrdersListOpen(true)
    }


    // update user to admin section
    const updateUserToAdmin = async (rowId, isAdmin) => {
        const response = await axios.put(`/api/users/${rowId}`, {
            isAdmin
        })

        if (response.status == 201) {
            isRefresh()
            toast.success(isAdmin ? "کاربر با موفقیت ادمین شد" : "ادمین با موفقیت عزل شد", {
                position: "top-center",
                hideProgressBar: "true",
                autoClose: 1500,
                theme: "colored"

            })
        }
    }

    const convertUserToAdmin = (rowId) => {

        const user = data.find(user => user._id == rowId)

        const isAdmin = !user.isAdmin

        Swal.fire({
            title: !isAdmin ? "این ادمین عزل شود؟" : "این کاربر مدیر شود؟",
            icon: "warning",
            showCancelButton: "true",
            cancelButtonText: "لغو",
            cancelButtonColor: "#EE4041",
            confirmButtonText: "بله",
            confirmButtonColor: "#025464",

        }).then(res => {
            if (res.isConfirmed) {
                updateUserToAdmin(rowId, isAdmin)
            }
        })

    }


    // remove user section

    // const userRemoveHandler = (rowId) => {

    //     Swal.fire({
    //         title: "این کاربر حذف شود؟",
    //         icon: "question",
    //         showCancelButton: "true",
    //         cancelButtonText: "لغو",
    //         cancelButtonColor: "#EE4041",
    //         confirmButtonText: "بله",
    //         confirmButtonColor: "#025464",

    //     }).then(res => {
    //         if(res.isConfirmed){
    //             axios.delete(`/api/users/${rowId}`)
    //             .then(response => {
    //                 if(response.status == 201){
    //                     toast.success("کاربر با موفقیت حذف شد", {
    //                         position: "top-center",
    //                         hideProgressBar: "true",
    //                         autoClose: 1500,
    //                         theme: "colored"
            
    //                     })
    //                     isRefresh()
    //                 }
    //             })
    //         }
    //     })





    // }



    // check isAdmin 

    useEffect(() => {
        if (session?.user.isAdmin == "ADMIN") {

            setColumns(prev => [...prev, {
                id: 'add-to-admin',
                label: '',
                minWidth: 100,
                align: 'right',
                format: (value) => value.toLocaleString('en-US'),
            },
            // {
            //     id: 'remove',
            //     label: '',
            //     minWidth: 100,
            //     align: 'right',
            //     format: (value) => value.toLocaleString('en-US'),
            // },
        ])
        }
    }, [session])



    return (
        <DashboardLayout>
            <div className='w-full h-full grid grid-cols-1  gap-4 '>
                <div className=' col-span-1 p-4'>

                    <Title title="لیست کاربران" theme="bg-main-color1" />

                    {loading ? <div className='mt-40'> <Loader /></div> : !loading && rows?.length > 0 ?
                        <Paper dir="rtl" sx={{ width: '100%', overflow: 'hidden', marginTop: '24px' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    className="table-thead
                                                    "
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
                                        {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>

                                                        <TableCell align='center'>
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align='center'>
                                                            {row.phoneNumber}
                                                        </TableCell>

                                                        <TableCell align='center'>
                                                            <button onClick={() => showDetailsHandler(row.id)} className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b '> جزئیات</button>
                                                        </TableCell>

                                                        {session?.user.isAdmin == "ADMIN" && (
                                                            <TableCell align='center'>
                                                                <button onClick={() => convertUserToAdmin(row.id)} className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b w-24'>
                                                                    {row.isAdmin ? "عزل مدیر" : "ارتقا به مدیر"}
                                                                </button>
                                                            </TableCell>
                                                        )}

                                                        <TableCell align='center'>
                                                            <button onClick={() => showOrdersList(row.id)} className='bg-main-color2 py-1 px-2 rounded-md text-main-color4 r-b w-32'> لیست سفارشات</button>
                                                        </TableCell>

                                                        {/* {session?.user.isAdmin == "ADMIN" && (
                                                            <TableCell align='center' onClick={() => userRemoveHandler(row.id)}>
                                                                <button className='bg-main-color5 py-1 px-2 rounded-md text-main-color4 r-b'>حذف</button>
                                                            </TableCell>
                                                        )} */}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination

                                rowsPerPageOptions={[10]}
                                component="div"
                                count={rows?.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                        : <div className='flex flex-col items-center nmt-5'>
                            <Image src="/images/No data-cuate.svg" width={400} height={400} alt="empty-svg" />
                            <h2 className='text-xl text-center m4-8 text-main-color5'>
                                شما محصولی ندارید
                            </h2>
                        </div>}



                </div>


                <Modal

                    open={userDetailsOpen}
                    onClose={() => setUserDetailsOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl bg-white p-4 ">

                        <UserDetails userInfo={userInfo} transAction={true} />
                    </Box>
                </Modal>

                <Modal

                    open={ordersListOpen}
                    onClose={() => setOrdersListOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl bg-white p-4 ">

                        <OrdersListDetails userInfo={userInfo} />
                    </Box>
                </Modal>

            </div>
        </DashboardLayout>
    )
}


export async function getServerSideProps({ req }) {


    const session = await getSession({ req })



    if (!session) {
        return {
            redirect: {
                destination: "/SignIn",
                premanent: false
            }

        }
    } else if (session && session.user.isAdmin == false) {
        return {
            redirect: {
                destination: "/",
                premanent: false
            }

        }
    }


    return {
        props: {}
    }
}