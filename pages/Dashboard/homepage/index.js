import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { getSession } from 'next-auth/react'

export default function Dashboard() {
  return (
   <DashboardLayout>
    <h1 >11</h1>
   </DashboardLayout>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })



  if (!session) {
      return {
          redirect: {
              destination: "/SignIn",
              premanent:false
          }

      }
  }
  // else if (session && session.user.isAdmin == false) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       premanent: false
  //     }

  //   }
  // }


  return {
      props: {}
  }
}
