import React, { useEffect, useState } from 'react'
import DropDown from '../DropDown/DropDown'
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '../Button/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';



const adminMenueItems = [
  { id: 1, title: "صفحه اصلی", to: "/Dashboard/homepage", icon: <HomeIcon /> },
  { id: 2, title: "محصولات", to: "/Dashboard/products", icon: <DashboardIcon /> },
  { id: 3, title: "کاربران", to: "/Dashboard/users", icon: <PeopleAltIcon /> },
  { id: 4, title: "تخفیف ها", to: "/Dashboard/offers", icon: <LocalOfferIcon /> },
  { id: 4, title: "نظرات", to: "/Dashboard/comments", icon: <CommentIcon /> },
]

const userMenueItems = [
  { id: 1, title: "صفحه اصلی", to: "/Dashboard/homepage", icon: <HomeIcon /> },

]


export default function DashboardLayout({ children }) {

  const { status, data: session } = useSession()

  const [isAdmin, setIsAdmin] = useState(false)

  const router = useRouter()
  const [showSideBar, setShowSideBar] = useState(false)

  const toggleDrawer = (open) => {
    setShowSideBar(open);
  };



  useEffect(() => {
    if (session?.user.isAdmin == "ADMIN" || session?.user.isAdmin == true) {
      setIsAdmin(true)
    }
  }, [session])

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"

    >
      <div className="w-20 h-20 mx-auto">
        <Link href="/">
          <Image width={100} height={100} src="/images/logo.png" alt="logo" />
        </Link>
      </div>
      <Divider />

      <List >

        {isAdmin || isAdmin == "ADMIN" ? (

          adminMenueItems.map(item => (
            <Link key={item.id} href={item.to}>
              <ListItem className={`border-4 border-transparent  ${router.pathname === item.to ? " border-l-main-color1 text-main-color4 " : ""}`} disablePadding>
                <ListItemButton className='flex items-center justify-between w-full '>
                  <ListItemText className='text-start' primary={item.title} />
                  <ListItemIcon dir="ltr">
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </Link>

          ))

        ) : (

          userMenueItems.map(item => (
            <Link key={item.id} href={item.to}>
            <ListItem className={`border-4 border-transparent ${router.pathname === item.to ? " border-l-main-color1 text-main-color4" : ""}`} disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText className='text-end' primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>

          )))}
          
      </List>
      <Divider />
      


    </Box>
  );



  return (
    <>
      <ToastContainer className="text-center font " />

      <div className="w-full min-h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-between  relative">

        <nav className='w-full '>
          <div className='w-full bg-main-color1 flex items-center justify-between px-8 py-2'>
            <div >

              <button className="flex  text-main-color4  " onClick={() => toggleDrawer(true)}>
                <MenuIcon className="text-3xl  " />
              </button>
              <Drawer
                anchor="right"
                open={showSideBar}
                onClose={() => toggleDrawer(false)}
              >
                {list()}
              </Drawer>

            </div>
            <DropDown />
          </div>
        </nav>

        <div className='p-4 h-full w-full flex flex-1   '>
          <div className='w-full   rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.4)] p-4 '>
            {children}
          </div>
        </div>


      </div>
    </>
  )
}
