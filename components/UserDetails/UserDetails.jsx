import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";



;


export default function UserDetails({ userInfo, transAction }) {


    const [columns, setColumns] = useState([
        { id: 'name', label: 'نام کاربر', minWidth: 150 },
        { id: 'phoneNumber', label: 'شماره تلفن', minWidth: 150 },
        {
            id: 'user-role',
            label: 'نقش کاربر',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        transAction && {
            id: 'total-transaction',
            label: 'مجموع تراکنش',
            minWidth: 150,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
    ])


    return (
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-lg ">
                مشخصات کاربر
            </h2>

            <div>
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

                                <TableRow hover role="checkbox" tabIndex={-1} >

                                    <TableCell align='center'>
                                        {userInfo?.fullName}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {userInfo?.phoneNumber}
                                    </TableCell>
                                    <TableCell align='center'>

                                        {userInfo?.isAdmin == "ADMIN" ? "مدیر اصلی" : userInfo?.isAdmin ? "ادمین" : "کاربر"}

                                    </TableCell>
                                    {transAction && (
                                        <TableCell align='center'>
                                            -
                                        </TableCell>
                                    )}



                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </div>

        </div>
    )
}
