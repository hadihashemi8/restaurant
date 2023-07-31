import React, { useState } from 'react'
import Link from 'next/link'
import styles from "../../styles/Home.module.css"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from "@mui/material";
// import logo from "../images/logo.png"
import Image from 'next/image'


const sideBarItems = [
    { id: 1, title: "خانه", to: "/" },
    { id: 2, title: "منوی غذا", to: "/" },
    { id: 3, title: "درباره ما", to: "/" },
    { id: 4, title: "تماس با ما", to: "/" },
    
]

export default function NavBar() {
    
    const [showSideBar, setShowSideBar] = useState(false)
    
    
    const toggleDrawer = (open) => {
    
        setShowSideBar(open);
    };
    
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
    
        >
            <div className="w-20 h-20 mx-auto">
              
                <img src="/images/logo.png" alt="logo" />
            </div>
            <List className="pt-5">
                {sideBarItems.map((item) => (
    
                    <ListItem className="hover:bg-main-color4 text-main-color1 " key={item.id} disablePadding>
                        <ListItemButton >
                            <ListItemText className="text-right " primary={item.title} />
                        </ListItemButton>
                    </ListItem>
    
                ))}
            </List>
            <Divider />
    
        </Box>
    );



    return (
        <nav className="bg-main-color1 " >
            <div className=" flex h-12 lg:h-auto container mx-auto  items-center justify-between   px-8">
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
                    <Link className="group  flex items-center justify-between  p-2 py-4 relative menu-item text-main-color4 w-[140px]  text-center" href="/">
                        ورود / عضویت
                        <ArrowDropDownIcon className="rotate-180 group-hover:rotate-0 transition-all duration-300" />
                    </Link>
                </div>

            </div>
        </nav>
    )
}
