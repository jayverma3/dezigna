import Header from "../../Components/Header/Header";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Video_with_title from "../../Components/Video_with_title/Video_with_title";
import Imageandtext from "../../Components/ImageAndText/ImageAndText";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import ContactForm from "../../Components/ContactForm/ContactForm";
import DotGrid from "../../Components/dotgrid/DotGrid";
import Consultation from "../../Components/Consultation/Consultation";
import ProductCategories from "../../Components/ProductCategories/ProductCategories";
import Features from "../../Components/Features/Features";
import FAQ from "../../Components/FAQ/FAQ";
import Newsletter from "../../Components/Newsletter/Newsletter";
import ProductsShowcase from "../../Components/ProductShowcase/ProductShowcase";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <Video_with_title />
      <Imageandtext />
      <ProductsShowcase />
      <ProductCategories />
      <Features />
      <Consultation />
      <FAQ />
      <Newsletter />
      <FeaturedProperties />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
