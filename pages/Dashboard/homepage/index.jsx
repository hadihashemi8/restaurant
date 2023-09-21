import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { getSession, useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import LastUserTable from '../../../components/LastUserTable/LastUserTable'
import LastProductsTable from '../../../components/LastProductsTable/LastProductsTable'
import AdminActions from '../../../components/AdminActions/AdminActions'
import Image from 'next/image'
import LastOrders from '../../../components/LastOrders/LastOrders'
import axios from 'axios'


const UserCard = dynamic(() => import('../../../components/UserCard/UserCard'), { ssr: false })


export default function Dashboard() {

  const { data: session } = useSession()


  return (
    <DashboardLayout>
      <div className='w-full  h-full  grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-8' >

        <div className='col-span-1 row-span-3    grid gap-4 grid-rows-3'>

          <div className=" rounded-xl row-span-1 shadow-[0_0_5px_rgba(0,0,0,0.4)] p-2 ">
            <UserCard />
          </div>

          {session?.user.isAdmin == "ADMIN" || session?.user.isAdmin == true ? (

            <div className=" flex items-center justify-center row-span-2 pt-4 shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-xl p-2 ">
              <LastUserTable />
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-between row-span-2 pt-4 shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-xl p-2 ">
              <h2 className='text-xl'>غذاهای مورد علاقه</h2>

              <h2 className='text-xl flex-1 mt-10'>این قسمت درحال ساخت است </h2>
            </div>
          )}

        </div>

        {session?.user.isAdmin == "ADMIN" || session?.user.isAdmin == true ? (
          <div className='col-span-1 row-span-3   grid gap-4 grid-rows-3 '>
            <div className=' w-full max-h-fit overflow-x-scroll lg:overflow-x-auto shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-xl p-2 col-span-1 row-span-2 flex items-center justify-center'>
              <LastProductsTable />
            </div>

            <div className=" rounded-xl row-span-1 shadow-[0_0_5px_rgba(0,0,0,0.4)] p-2 ">
              <AdminActions />
            </div>
          </div>
        ) : (
          <div className=" flex items-start overflow-y-scroll justify-center row-span-4 pt-4 shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-xl p-2 ">
          <LastOrders/>
        </div>
        )}

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
  }



  return {
    props: {}
  }
}
