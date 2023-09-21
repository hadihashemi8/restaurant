import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import Button from '../Button/Button'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { Accordion, AccordionDetails, AccordionSummary, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const LastOrders = () => {

    const { data: session } = useSession()

    const [lastOrders, setLastOrders] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const [loading, setLoading] = useState(true)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const userId = session?.user.id
        if (userId) {
            axios.get(`/api/Orders/${session?.user.id}`)
            .then(res => {
                if(res.status == 200){
                    
                    setLastOrders(res.data.data)
                    setLoading(false)
                }
                    
                })
        }

    }, [session])





    return (
        <>
            {!loading ?
                lastOrders?.length > 0 ? (
                    <div className=' w-full   flex flex-col items-center justify-start  h-80 lg:h-72  '>
                        <h2 className='text-xl'>آخرین سفارش ها</h2>


                        <div>
                            <Paper dir="rtl" sx={{ width: '100%', overflow: 'hidden', marginTop: '24px' }}>
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableBody className=" w-full">

                                            {lastOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).reverse().map(item => (
                                                <TableRow className=" w-full ">
                                                    <TableCell>

                                                        <Accordion className='w-full'>
                                                            <AccordionSummary
                                                                className="flex items-center justify-between"
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                <div className=' flex flex-col  items-start lg:flex-row lg:items-center  justify-between  flex-1 ml-5'>
                                                                    <p className="mt-2 lg:mt-0 ml-8">{item.id}</p>
                                                                    <p className="mt-2 lg:mt-0 ml-8">{item.details.createdAt}</p>
                                                                    <p className="mt-2 lg:mt-0 ml-8">{item.details.total == 0 ? "رایگان" : `${item.details.total} تومان `}</p>

                                                                    {!item.details.status ? (
                                                                        <p className="w-14 text-center bg-main-color5 ml-8 mt-2 lg:mt-0 p-2 text-white rounded-xl text-xs">ناموفق</p>
                                                                    ) : (
                                                                        <p className="w-14 text-center bg-green-400 ml-8 mt-2 lg:mt-0 p-2 text-white rounded-xl text-xs">موفق</p>
                                                                    )}
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>



                                                                <div className=' flex flex-col  items-start lg:flex-row lg:items-center justify-start mt-2 flex-1 bg-gray-200 rounded-lg p-2 '>
                                                                    <p className='lg:ml-4 mt-2 lg:mt-0 w-24  text-start'>{item.details.customer}</p>
                                                                    <p className='lg:ml-4 mt-2 lg:mt-0 w-24  text-start'>{item.details.phone}</p>
                                                                    <p className='lg:ml-4 mt-2 lg:mt-0   text-start'>{item.details.address}</p>





                                                                </div>
                                                                {item.order.map(order => (
                                                                    <div className=' flex flex-col  items-start lg:flex-row lg:items-center justify-start mt-2 flex-1 bg-gray-200 rounded-lg p-2 '>
                                                                        <p className='lg:ml-4 mt-2 lg:mt-0 w-24  text-start'>{order.title}</p>

                                                                        <p className={`lg:ml-4 w-24 text-start mt-2 lg:mt-0 ${order.offerPresent > 0 && "line-through"}`}>{order.price * order.qty} تومان</p>

                                                                        <p className='lg:ml-4 w-24 text-start mt-2 lg:mt-0'>{order.qty} عدد </p>

                                                                        {order.offerPresent > 0 && (
                                                                            <div className='lg:mr-auto flex items-center justify-between '>
                                                                                <p className=' bg-green-400 text-white ml-2 p-1 rounded-lg  text-xs mt-2 lg:mt-0'>{order.offerPresent == 100 ? "رایگان" : `${(order.price * order.qty) - ((order.offerPresent * order.price) / 100) * order.qty} تومان `}</p>

                                                                                <p className=' bg-main-color5 text-white lg:mr-auto p-1 rounded-lg  text-xs mt-2 lg:mt-0'>{order.offerPresent} % </p>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}

                                                            </AccordionDetails>
                                                        </Accordion>

                                                    </TableCell>
                                                </TableRow>
                                            ))}


                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination

                                    rowsPerPageOptions={[4]}
                                    component="div"
                                    count={lastOrders?.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                        </div>



                    </div>
                ) : (
                    <h2 className='text-xl my-auto'>شما سفارشی ندارید</h2>
                )
                : (
                    <Loader />
                )}
        </>
    )
}

export default LastOrders