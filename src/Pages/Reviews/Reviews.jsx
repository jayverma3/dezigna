import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FAQ from "../../Components/FAQ/FAQ";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Auth from "../../Components/Auth/Auth";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-page">
      <Header />
      <div className="reviews-content">
        <h1>Customer Reviews</h1>
        <Testimonials />
        <FAQ />
        <Auth />
      </div>
    </div>
  );
};

export default Reviews;
