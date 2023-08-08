import React, { useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from "@mui/material";



import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const sideBarItems = [
    { id: 1, title: "خانه", to: "/" },
    { id: 2, title: "منوی غذا", to: "/" },
    { id: 3, title: "درباره ما", to: "/" },
    { id: 4, title: "تماس با ما", to: "/" },

]

export default function NavBar() {

    const [showSideBar, setShowSideBar] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => {
        setShowSideBar(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <div className="w-20 h-20 mx-auto">
                <Link href="/">
                    <img src="/images/logo.png" alt="logo" />
                </Link>
            </div>
            <List className="pt-5">
                {sideBarItems.map((item) => (

                    <ListItem className="hover:bg-main-color4 text-main-color1 " key={item.id} disablePadding>
                        <ListItemButton >
                            <ListItemText className="text-right sideBar-item" primary={item.title} />
                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
            <Divider />

        </Box>
    );



    return (
        <nav className="bg-main-color1 " >
            <div className=" flex h-14 lg:h-auto container mx-auto  items-center justify-between   px-8">
                <ul className="lg:flex items-center justify-between  hidden  ">
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="/">
                        خانه
                    </Link>
                    <Link className="group  ml-4 p-2 py-4 flex items-center justify-around relative menu-item text-main-color4 w-[120px]  text-center" href="/">
                        منو غذا
                        <ArrowDropDownIcon className="rotate-180 group-hover:rotate-0 transition-all duration-300" />
                    </Link>
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="/">
                        درباره ما
                    </Link>
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="/">
                        تماس با ما
                    </Link>
                </ul>

                <button className="flex lg:hidden text-main-color4 " onClick={() => toggleDrawer(true)}>
                    <MenuIcon className="text-3xl" />
                </button>
                {showSideBar && (
                    <>
                        <SwipeableDrawer

                            anchor="right"
                            open={showSideBar}
                            onClose={() => toggleDrawer(false)}

                        >
                            {list()}
                        </SwipeableDrawer>
                    </>
                )}

                <div >
                    <Link className="group  flex items-center justify-between  p-2 py-4 relative menu-item text-main-color4 w-[140px]  text-center" href="/Login">
                        ورود / عضویت
                        <ArrowDropDownIcon className="rotate-180 group-hover:rotate-0 transition-all duration-300" />
                    </Link>
                </div>


                {/* <Box sx={{ display: 'flex', alignItems: 'center' ,textAlign: 'center' }}>
                    
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                           <Avatar/>
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
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
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
                    <MenuItem className="flex items-center justify-between flex-row-reverse d-item text-main-color1" onClick={handleClose}>
                      
                        هادی هاشمی
                    </MenuItem>
                   
                    <Divider />
                   
                    <MenuItem className="flex items-center justify-start flex-row-reverse d-item text-main-color5" onClick={handleClose}>
                        خروج
                    </MenuItem>
                </Menu> */}

            </div>
        </nav>
    )
}
