import AboutUs from "../components/AboutUs/AboutUs";
import Layout from "../components/Layout/Layout";
import OfferSection from "../components/OfferSection/OfferSection";
import OrderSection from "../components/OrderSection/OrderSection";
import TodayMenu from "../components/TodayMenu/TodayMenu";
import Categories from "../components/Categories/Categories";


export default function Home() {
  return (
    <Layout>
      <OfferSection />
      <TodayMenu />
      <Categories />
      <AboutUs />
      <OrderSection />
    </Layout>
  )
}
