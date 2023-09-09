import AboutUs from "../components/AboutUs/AboutUs";
import Layout from "../components/Layout/Layout";
import OfferSection from "../components/OfferSection/OfferSection";
import OrderSection from "../components/OrderSection/OrderSection";
import TodayMenu from "../components/TodayMenu/TodayMenu";
import ContactUs from "../components/ContactUs/ContactUs";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";

const Categories = dynamic(() => import("../components/Categories/Categories"), { ssr: false })


export default function Home() {



  return (
    <>
      <title>صفحه اصلی</title>


      <Layout>

        <Categories />
        <OfferSection />
        <AboutUs />
        <TodayMenu />
        <OrderSection />
        <ContactUs />
      </Layout>
    </>
  )
}
