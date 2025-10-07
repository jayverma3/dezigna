import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BlogIndex from "../../Components/BlogIndex/BlogIndex";
import Newsletter from "../../Components/Newsletter/Newsletter";
import "./ExpertInsight.css";

const ExpertInsight = () => {
  return (
    <div className="expert-insight-page">
      <Header />
      <div className="expert-insight-content">
        <BlogIndex />
      </div>
      <Footer />
    </div>
  );
};

export default ExpertInsight;
