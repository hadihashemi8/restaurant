import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import Title from '../../../components/Title/Title'
import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import AddToMenueSection from '../../../components/AddToMenueSection/AddToMenueSection';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditMenue from '../../../components/EditMenue/EditMenue';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import useFetch from '../../../hooks/useFetch';
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
    id: 'Edit',
    label: '',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'offer',
    label: '',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'addToOffer',
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




export default function Products() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [addMenueOpen, setAddMenueOpen] = useState(false);
  const [editMenueOpen, setEditMenueOpen] = useState(false);
  const [offerMenueOpen, setOfferMenueOpen] = useState(false)


  const [productInfo, setProductInfo] = useState({})
  const [offerPresent, setOfferPresent] = useState(0)


  const { data, error, loading, isRefresh } = useFetch("/api/product")
  const [itemRows, setItemRows] = useState([])


  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const removeProductHandler = (rowId) => {

    Swal.fire({
      title: "از حذف محصول مطمئن هستین؟",
      icon: "warning",
      showCancelButton: "true",
      cancelButtonText: "لغو",
      cancelButtonColor: "#EE4041",
      confirmButtonText: "بله",
      confirmButtonColor: "#025464",
      reverseButtons: true
    }).then(res => {
      if (res.isConfirmed) {

        axios.delete(`/api/product/${rowId}`)
          .then(res => {
            if (res.status == 200) {
              toast.success("محصول با موفقیت حذف شد", {
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



  // create row items with use map
  useEffect(() => {

    const rows = data?.map(item => (
      { id: item._id, name: item.name, price: item.price, image: item.image, ourOffer: item.ourOffer }
    ))

    setItemRows(rows)
  }, [data])



  // edite section
  const editeHandler = (rowId) => {
    setEditMenueOpen(true)
    const item = data?.find(item => item._id == rowId)
    setProductInfo(item)
  }

  const closeEditModal = () => {
    setEditMenueOpen(false)
  }


  // add offer section
  const openOfferMenue = (rowId) => {
    setOfferMenueOpen(true)
    const item = data?.find(item => item._id == rowId)
    setProductInfo(item)

  }

  const addOfferHandler = () => {

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
          }
        })

    }
  }


  // add to our offer menue
  const addToOfferMenue = (rowId) => {
    const product = data.find(item => item._id == rowId)

    const itemBol = !product.ourOffer

    console.log(itemBol);

    axios.put(`http://localhost:3000/api/product/addToOffer/${rowId}`, {
      ourOffer: itemBol,
    })
      .then(res => {
        if (res.status == 201) {
          isRefresh()
        }
      })

  }



  return (
    <DashboardLayout>
      <div className='w-full h-full grid grid-cols-1  gap-4'>

        <div className=' col-span-1  p-4 '>
          <div className='w-full flex flex-col md:flex-row-reverse items-center justify-center'>
            <div className='w-full md:flex-1'>
              <Title title="لیست منو" theme="bg-main-color5" />
            </div>
            <button onClick={() => setAddMenueOpen(true)} className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b md:self-start mt-8 md:mt-0'>افزودن به منو</button>
          </div>
          {loading ? <div className='mt-40'> <Loader/></div> : !loading && itemRows.length > 0 ?
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
                            <TableCell  >
                              <div className='w-16 h-16 relative mx-auto'>
                                <Image alt="p-img" src="/images/foods/food-1.jpg" fill sizes='100%' styles={{ objectFit: "cover" }} />
                                {/* <img src={row.image} /> */}
                              </div>
                            </TableCell>
                            <TableCell align='center'>

                              {row.name}
                            </TableCell>
                            <TableCell align='center'>
                              {row.price}
                            </TableCell>
                            <TableCell align='center'>
                              <button onClick={() => editeHandler(row.id)} className='bg-main-color1 py-1 px-2 rounded-md text-main-color4 r-b'>ویرایش</button>
                            </TableCell>
                            <TableCell align='center'>
                              <button onClick={() => openOfferMenue(row.id)} className='bg-main-color2 py-1 px-2 rounded-md text-main-color4 r-b'>اعمال تخفیف</button>
                            </TableCell>
                            <TableCell align='center'>
                              <button onClick={() => addToOfferMenue(row.id)} className={`${row.ourOffer ? "bg-green-500" : "bg-main-color5"} py-1 px-2 rounded-md text-main-color4 r-b`}>{row.ourOffer ? "حذف از پیشنهادها" : "افزودن به پیشنهاها"}</button>
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
            : <div className='flex flex-col items-center nmt-5'>
              <Image src="/images/No data-cuate.svg" width={400} height={400} alt="empty-svg" />
              <h2 className='text-xl text-center m4-8 text-main-color5'>
                شما محصولی ندارید
              </h2>
            </div>}

        </div>


        <Modal

          open={addMenueOpen}
          onClose={() => setAddMenueOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]  rounded-xl bg-white p-4 ">
            <AddToMenueSection isRefresh={isRefresh} />

          </Box>
        </Modal>

        <Modal

          open={editMenueOpen}
          onClose={closeEditModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]  rounded-xl bg-white p-4 ">
            <EditMenue product={productInfo} closeEditModal={closeEditModal} isRefresh={isRefresh} />

          </Box>
        </Modal>

        <Modal

          open={offerMenueOpen}
          onClose={() => setOfferMenueOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-xl bg-white p-4 ">

            <div className='flex flex-col items-center'>
              <input value={offerPresent} onChange={e => setOfferPresent(e.target.value)} className='p-2 w-full border-b-[1px] border-main-color1 outline-none placeholder:text-xs text-center' type="text" placeholder='درصد تخفیف را وارد کنید (فقط عدد)' />
              <button onClick={addOfferHandler} className='bg-main-color5 rounded-xl w-full py-2 px-4 text-main-color4 mt-4'>اعمال تخفیف</button>
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