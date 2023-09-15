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
import { Drawer, ListItemIcon } from "@mui/material";

import { useSession } from 'next-auth/react';
import DropDown from '../DropDown/DropDown';

import AppsIcon from '@mui/icons-material/Apps';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InfoIcon from '@mui/icons-material/Info';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { useRouter } from 'next/router';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

const sideBarItems = [
    { id: 1, title: "خانه", to: "/", icon: <AppsIcon /> },
    { id: 2, title: "منوی غذا", to: "/FoodsMenue", icon: <RestaurantIcon /> },
    { id: 3, title: "درباره ما", to: "/#About-us", icon: <InfoIcon /> },
    { id: 4, title: "تماس با ما", to: "/#Contect-us", icon: <PhoneEnabledIcon /> },
    { id: 4, title: "سفارشات", to: "?Cart=open", icon: <PlaylistAddCheckCircleIcon /> },

]

export default function NavBar() {

    const { status, data: session } = useSession()
    const [showSideBar, setShowSideBar] = useState(false)

    const router = useRouter()

    useEffect(() => {
        console.log(session);
    }, [session])


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
            <Divider />

            <List className="pt-5">
                {sideBarItems.map((item) => (

                    <Link key={item.id} href={item.to}>
                        <ListItem className={`border-4 border-transparent  ${router.asPath === item.to ? " border-l-main-color1 text-main-color4 " : ""}`} disablePadding>
                            <ListItemButton className='flex items-center justify-between w-full '>
                                <ListItemText className='text-start' primary={item.title} />
                                <ListItemIcon dir="ltr">
                                    {item.icon}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                ))}
            </List>
            <Divider />

        </Box>
    );



    return (
        <nav className="bg-main-color1 w-full " >
            <div className=" flex h-14 lg:h-auto container mx-auto  items-center justify-between   px-8">
                <ul className="lg:flex items-center justify-between  hidden  ">
                    <Link className="ml-6 p-2 py-4 relative menu-item text-main-color4 w-[120px]  flex items-center justify-center " href="/">
                        <span>
                            خانه
                        </span>
                        <AppsIcon className="mr-2" />
                    </Link>
                    <Link className="ml-6 p-2 py-4 relative menu-item text-main-color4 w-[120px]  flex items-center justify-center" href="/FoodsMenue">
                        <span>
                            منوی غذا
                        </span>
                        <RestaurantIcon className="mr-2" />
                    </Link>
                    <Link className="ml-6 p-2 py-4 relative menu-item text-main-color4 w-[120px]  flex items-center justify-center" href="?Cart=open">
                        <span>
                            سفارشات
                        </span>
                        <PlaylistAddCheckCircleIcon className="mr-2" />
                    </Link>
                    <Link className="ml-6 p-2 py-4 relative menu-item text-main-color4 w-[120px]  flex items-center justify-center" href="#About-us">
                        <span>
                            درباره ما
                        </span>
                        <InfoIcon className="mr-2" />
                    </Link>
                    <Link className="ml-6 p-2 py-4 relative menu-item text-main-color4 w-[120px]  flex items-center justify-center" href="#Contect-us">
                        <span>
                            تماس با ما
                        </span>
                        <PhoneEnabledIcon className="mr-2" />
                    </Link>

                </ul>


                <div>
                    {
                        <>
                            <button className="flex lg:hidden text-main-color4 " onClick={() => setShowSideBar(true)}>
                                <MenuIcon className="text-3xl" />
                            </button>
                            <Drawer
                               className='z-30'
                                anchor="right"
                                open={showSideBar}
                                onClose={() => setShowSideBar(false)}
                            >
                                {list()}
                            </Drawer>
                        </>
                    }
                </div>


                {status == "loading" ? "loading" : session?.user ? (

                    <DropDown />
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
