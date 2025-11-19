import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Consultation from "../../Components/Consultation/Consultation";

import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <Header />
      <Consultation />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUs;
