import React, { useState } from "react";
import "./ContactUsCard.css";
import contactImage from "../../assets/images/email-6370595_1280.jpg";

const ContactUsCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-us-card-container">
      <div className="contact-us-card">
        <div className="info-section">
          <h2>Get in Touch</h2>
          <p>Have a question or a project in mind? Fill out the form and our team will get back to you shortly.</p>
          <div className="info-image">
            <img src={contactImage} alt="Contact Us" />
          </div>
        </div>
        <form className="form-section" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message*</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsCard;
