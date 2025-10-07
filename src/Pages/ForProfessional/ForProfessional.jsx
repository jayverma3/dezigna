import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ProServices from "../../Components/ProServices/ProServices";
import "./ForProfessional.css";

const ForProfessional = () => {
  return (
    <div className="for-professional-page">
      <Header />
      <div className="for-professional-content">
        <h1>For Professionals</h1>
        <p>
          Partner with Dezigna for exclusive access to resources, support, and our Builder Alliance program.
        </p>
        <ProServices />
      </div>
      <Footer />
    </div>
  );
};

export default ForProfessional;
