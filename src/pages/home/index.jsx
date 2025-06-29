import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import Banner from "./components/Banner";
import BestSeller from "./components/bestseller";
import Companies from "./components/Companies";
import FaqSection from "./components/FAQ";
import FeaturedProducts from "./components/featuredProducts";
import NewProducts from "./components/newProducts";
import Overview from "./components/Overview";
import SpringSale from "./components/springsale";
import Subscribe from "./components/Subscribe";
import SupportSection from "./components/support";
import TechTalks from "./components/techTalks";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
        <SupportSection />
        <FeaturedProducts />
        <Overview />
        <NewProducts />
      </Container>
      <SpringSale />
      <Container>
        <BestSeller />
      </Container>
      <FaqSection />
      <Container>
        <TechTalks />
        <Companies />
        <Subscribe />
      </Container>
    </>
  );
};

export default Home;
