import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <h2>Start Your Design Project</h2>
          <p>
            Ready to transform your space? Fill out the form below to tell us about your project. A member of our design team will get in touch with you to schedule a consultation.
          </p>
        </div>

        <form className="contact-form-body">
          <div className="form-row">
            <div className="form-group full-width">
              <label>Services of Interest</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="kitchen" name="services" value="kitchen" />
                  <label htmlFor="kitchen">Kitchen Design</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="bathroom" name="services" value="bathroom" />
                  <label htmlFor="bathroom">Bathroom Remodel</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="full-home" name="services" value="full-home" />
                  <label htmlFor="full-home">Full Home Interior</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="flooring" name="services" value="flooring" />
                  <label htmlFor="flooring">Flooring & Tiling</label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" />
            </div>
          </div>

          <div className="form-row">
             <div className="form-group full-width">
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" name="message" rows="5" placeholder="e.g., project scope, timeline, budget..."></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="best-way">Best way to reach you</label>
              <select id="best-way" name="best-way">
                <option>Select an option</option>
                <option>Phone</option>
                <option>Email</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="best-time">Best time to reach you</label>
              <select id="best-time" name="best-time">
                <option>Select an option</option>
                <option>Morning (9am-12pm)</option>
                <option>Afternoon (12pm-5pm)</option>
                <option>Evening (5pm-8pm)</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width terms-group">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                By checking this box, you consent to be contacted by Dezigna via call, text, or email. Message and data rates may apply.
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Send Project Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
