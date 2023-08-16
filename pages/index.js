import AboutUs from "../components/AboutUs/AboutUs";
import Layout from "../components/Layout/Layout";
import OfferSection from "../components/OfferSection/OfferSection";
import OrderSection from "../components/OrderSection/OrderSection";
import TodayMenu from "../components/TodayMenu/TodayMenu";
import Categories from "../components/Categories/Categories";
import ContactUs from "../components/ContactUs/ContactUs";


export default function Home() {


  
  return (
    <Layout>
      <Categories />
      <OfferSection />
      <AboutUs />
      <TodayMenu />
      <OrderSection />
      <ContactUs />
    </Layout>
  )
}
