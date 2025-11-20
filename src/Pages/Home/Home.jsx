import Header from "../../Components/Header/Header";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Video_with_title from "../../Components/Video_with_title/Video_with_title";
import Imageandtext from "../../Components/Imageandtext/Imageandtext";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import ProductCategories from "../../Components/ProductCategories/ProductCategories";
import ProductCatalogCTA from "../../Components/ProductCatalogCTA/ProductCatalogCTA";
import Features from "../../Components/Features/Features";
import FAQ from "../../Components/FAQ/FAQ";
import Newsletter from "../../Components/Newsletter/Newsletter";
import ProductsShowcase from "../../Components/ProductShowcase/ProductShowcase";
import Aurora from "../../Components/Aurora/Aurora";
import AuroraContainer from "../../Components/Aurora/AuroraContainer";
import PageLayout from "../../Components/PageLayout/PageLayout";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <PageLayout>
        <AuroraContainer>
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={15.0}
            speed={0.5}
          />
        </AuroraContainer>
      </PageLayout>
      <Video_with_title />
      <Imageandtext />
      <ProductsShowcase />
      <ProductCategories />
      <ProductCatalogCTA />
      <Features />
      <FAQ />
      <Newsletter />
      {/*<ShopLocation />*/}
    </div>
  );
};

export default Home;
