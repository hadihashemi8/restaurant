import React, { useState } from 'react'
import { Avatar, Box, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export default function DropDown() {

    const { status, data: session } = useSession()
    const [anchorEl, setAnchorEl] = useState(null);

    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

   
    const logOutHandler = () => {
      Swal.fire({
          title: "میخواهید خارج شوید؟",
          icon: "question",
          showCancelButton: "true",
          cancelButtonText: "لغو",
          cancelButtonColor: "#EE4041",
          confirmButtonText: "بله",
          confirmButtonColor: "#025464",
          reverseButtons: true
      }).then(res => {
          if (res.isConfirmed) {
              Cookies.remove()

              signOut({ callbackUrl: '/' })
          }
      })

  }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' , }}>

                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar />
                </IconButton>

            </Box>
            <Menu
           
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.2))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 'auto',
                            mr: -0.5,
                            ml: 1,


                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}

            >
                <MenuItem className="flex items-center justify-between flex-row-reverse d-item text-main-color1" >
                    {session?.user.name}
                </MenuItem>
                <Divider />
                <MenuItem className="flex items-center justify-start flex-row-reverse d-item text-main-color5 mt-2" onClick={logOutHandler}>
                    خروج
                </MenuItem>
            </Menu>
        </>
    )
}
