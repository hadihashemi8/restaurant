import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { getSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import LastUserTable from '../../../components/LastUserTable/LastUserTable'
import LastProductsTable from '../../../components/LastProductsTable/LastProductsTable'
import AdminActions from '../../../components/AdminActions/AdminActions'


const UserCard = dynamic(() => import('../../../components/UserCard/UserCard'), { ssr: false })


export default function Dashboard() {



  return (
    <DashboardLayout>
      <div className='w-full h-full  grid grid-cols-1 lg:grid-cols-2 gap-8' dir='rtl'>
        <div className='col-span-1    grid gap-4 grid-rows-3'>

          <div className=" rounded-xl row-span-1 shadow-[0_0_5px_rgba(0,0,0,0.4)] p-2 ">
            <UserCard />
          </div>

          <div className="h-full flex items-center justify-center row-span-2 pt-4 shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-xl p-2 ">
            <LastUserTable />
          </div>

        </div>
        <div className='col-span-1  grid gap-4 grid-rows-3 '>
          <div className='row-span-2 overflow-x-scroll shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-xl p-2 col-span-1'>
            <LastProductsTable />
          </div>

          <div className=" rounded-xl row-span-1 shadow-[0_0_5px_rgba(0,0,0,0.4)] p-2 ">
            <AdminActions/>
          </div>
        </div>
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
