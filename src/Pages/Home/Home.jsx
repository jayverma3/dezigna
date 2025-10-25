import Header from "../../Components/Header/Header";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Video_with_title from "../../Components/Video_with_title/Video_with_title";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import Imageandtext from "../../Components/ImageAndText/ImageAndText";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import ShopLocation from "../../Components/ShopLocation/ShopLocation";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Consultation from "../../Components/Consultation/Consultation";
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
      <Consultation />
      <FAQ />
      <Newsletter />
      <FeaturedProperties />
      {/*<ShopLocation />*/}
      <ContactForm />
    </div>
  );
};

export default Home;
