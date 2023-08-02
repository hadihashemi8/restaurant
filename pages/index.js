import AboutUs from "../components/AboutUs/AboutUs";
import Layout from "../components/Layout/Layout";
import OfferSection from "../components/OfferSection/OfferSection";
import OrderSection from "../components/OrderSection/OrderSection";


export default function Home() {
  return (
    <Layout>
      <AboutUs/>
      <OrderSection/>
      <OfferSection/>
    </Layout>
  )
}
