import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, SwipeableDrawer } from "@mui/material";
import Cookies from "js-cookie"


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
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import Title from "../Title/Title"
import QuieckMenu from '../QuieckMenu/QuieckMenu';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';


const sideBarItems = [
    { id: 1, title: "خانه", to: "/" },
    { id: 2, title: "منوی غذا", to: "/" },
    { id: 3, title: "درباره ما", to: "/" },
    { id: 4, title: "تماس با ما", to: "/" },

]

export default function NavBar() {

    const { status, data: session } = useSession()
    const [showSideBar, setShowSideBar] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
  

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


   

    useEffect(() => {
        console.log(session);
    } , [session])


    return (
        <nav className="bg-main-color1 w-full" >
            <div className=" flex h-14 lg:h-auto container mx-auto  items-center justify-between   px-8">
                <ul className="lg:flex items-center justify-between  hidden  ">
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="/">
                        خانه
                    </Link>
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="/FoodsMenue">
                        منوی غذا
                    </Link>
                    {/* <Link className="group   ml-4 p-2 py-4 flex items-center justify-around relative menu-item text-main-color4 w-[120px]  text-center" href="/">
                        منوی سریع
                        <ArrowDropDownIcon className="rotate-180 group-hover:rotate-0 transition-all duration-300" />
                        <div className='w-[1000px] h-0 group-hover:h-auto duration-500 bg-main-color4 absolute top-full -right-full z-40 overflow-hidden group-hover:p-4 flex flex-col items-center'>
                            <Title title="منوی سریع" theme="bg-main-color1" />

                            <QuieckMenu />

                            <Button title="مشاهده بیشتر" to="/FoodsMenue" />

                        </div>
                    </Link> */}
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="#About-us">
                        درباره ما
                    </Link>
                    <Link className="ml-4 p-2 py-4 relative menu-item text-main-color4 w-[120px]  text-center" href="#Contect-us">
                        تماس با ما
                    </Link>
                </ul>


                <div>
                    {
                        <>
                            <button className="flex lg:hidden text-main-color4 " onClick={() => toggleDrawer(true)}>
                                <MenuIcon className="text-3xl" />
                            </button>
                            <Drawer
                                anchor="right"
                                open={showSideBar}
                                onClose={() => toggleDrawer( false)}
                            >
                                {list()}
                            </Drawer>
                        </>
                    }
                </div>


                {status == "loading" ? "loading" : session?.user ? (
                    
                    <DropDown/>
                ) : (
                    <div >
                        <Link className="group flex items-center justify-between  p-2 py-4 relative menu-item text-main-color4 w-[140px]  text-center" href="/SignUp">
                            ورود / عضویت
                            <ArrowDropDownIcon className="rotate-180 group-hover:rotate-0 transition-all duration-300" />
                        </Link>
                    </div>
                )}





            </div>
        </nav>
    )
}
