import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import Title from '../../../components/Title/Title'
import { Box, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useFetch from '../../../hooks/useFetch';
import Image from 'next/image';
import { getSession } from 'next-auth/react';
import Loader from '../../../components/Loader/Loader';





const columns = [
  {
    id: 'image',
    label: 'عکس محصول',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'name', label: 'نام محصول', minWidth: 150 },
  { id: 'price', label: 'قیمت محصول', minWidth: 150 },
  {
    id: 'offerPresent',
    label: 'درصد تخفیف',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'finalPrice',
    label: 'قیمت نهایی',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'edite',
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


export default function Offers() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [offerMenueOpen, setOfferMenueOpen] = useState(false);

  const [productInfo, setProductInfo] = useState({})
  const [offerPresent, setOfferPresent] = useState(0)

  const { data, error, loading, isRefresh } = useFetch("/api/offer")
  const [itemRows, setItemRows] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {

    const rows = data.map(item => (
      { id: item._id, name: item.name, price: item.price, image: item.image, offerPresent: item.offerPresent }
    ))

    setItemRows(rows)

  }, [data])


  const editeHandler = (rowId) => {
    setOfferMenueOpen(true)
    const item = data?.find(item => item._id == rowId)
    setProductInfo(item)
  }

  const editOfferPresent = () => {
    if (offerPresent > 100 || offerPresent == 0) {
      toast.error("درصد وارد شده معتبر نیست", {
        position: "top-center",
        hideProgressBar: "true",
        autoClose: 1500,
        theme: "colored"

      })
    } else {
      const newObg = {
        offerPresent
      }

      axios.put(`/api/offer/${productInfo._id}`, newObg)
        .then(res => {
          if (res.status == 201) {
            setOfferMenueOpen(false)
            toast.success("تخفیف با موفقیت اعمال شد", {
              position: "top-center",
              hideProgressBar: "true",
              autoClose: 1500,
              theme: "colored"

            })

            isRefresh()
          }
        })

    }
  }


  const removeProductHandler = (rowId) => {

    Swal.fire({
      title: "از حذف تخفیف مطمئن هستین؟",
      icon: "warning",
      showCancelButton: "true",
      cancelButtonText: "لغو",
      cancelButtonColor: "#EE4041",
      confirmButtonText: "بله",
      confirmButtonColor: "#025464",
      
    }).then(res => {
      if (res.isConfirmed) {

        axios.delete(`/api/offer/${rowId}`)
          .then(res => {
            if (res.status == 201) {
              toast.success("تخفیف با موفقیت برداشته شد", {
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
          <Title title="منوی تخفیف ها" theme="bg-main-color5" />

          {loading ? <div className='mt-40'> <Loader/> </div> : !loading && itemRows.length > 0 ?
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
                    {itemRows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>

                            <TableCell   >
                              <div className='w-16 h-16 relative mx-auto'>
                                <Image alt="p-img" src={`${row.image}`} fill sizes='100%' styles={{ objectFit: "cover" }} />
                                
                                
                              </div>
                            </TableCell>
                            <TableCell align='center'>
                              {row.name}
                            </TableCell>
                            <TableCell align='center'>
                              {row.price}
                            </TableCell>
                            <TableCell align='center '>
                              <p className="bg-main-color5 text-center rounded-lg text-main-color4 p-1 w-42">
                                {row.offerPresent} %
                              </p>
                            </TableCell>

                            <TableCell align='center '>
                              <p className="bg-green-400 text-center rounded-lg text-main-color4 p-1 w-42">
                                {(row.price - (row.offerPresent * row.price) / 100) == 0 ? "رایگان" : `${(row.price - (row.offerPresent * row.price) / 100)} تومان`}
                              </p>
                            </TableCell>
                            <TableCell align='center'>
                              <button onClick={() => editeHandler(row.id)} className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b'>ویرایش</button>
                            </TableCell>
                            <TableCell align='center'>
                              <button onClick={() => removeProductHandler(row.id)} className='bg-main-color5 py-1 px-2 rounded-md text-main-color4 r-b'>حذف</button>
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
            : <div className='flex flex-col items-center mt-5'>
              <Image src="/images/No data-pana.svg" width={400} height={400} alt="empty-svg"/>
              <h2 className='text-xl text-center m4-8 text-main-color5'>
                شما محصول تخفیف دار ندارید
              </h2>
            </div>}

        </div>


        <Modal

          open={offerMenueOpen}
          onClose={() => setOfferMenueOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl bg-white p-4 ">

            <div className='flex flex-col items-center'>
              <input value={offerPresent} onChange={e => setOfferPresent(e.target.value)} className='p-2 w-full border-b-[1px] border-main-color1 outline-none placeholder:text-xs text-center' type="text" placeholder='درصد تخفیف را وارد کنید (فقط عدد)' />
              <button onClick={editOfferPresent} className='bg-main-color5 rounded-xl w-full py-2 px-4 text-main-color4 mt-4'>اعمال تخفیف</button>
            </div>


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
              premanent:false
          }

      }
  }else if (session && session.user.isAdmin == false) {
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