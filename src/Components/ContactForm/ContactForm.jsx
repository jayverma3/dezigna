import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ContactForm.css";
import { FiX, FiCalendar } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    services: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    bestWay: "",
    bestTime: "",
    terms: false,
    scheduledDateTime: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "services") {
        setFormData((prev) => ({
          ...prev,
          services: checked
            ? [...prev.services, value]
            : prev.services.filter((service) => service !== value),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      const dateTimeString = `${
        selectedDate.toISOString().split("T")[0]
      } ${selectedTime}`;
      setFormData((prev) => ({
        ...prev,
        scheduledDateTime: dateTimeString,
      }));
    }
    closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://thedezigna.com/api/contact_form_handler.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitMessage("Thank you! Your inquiry has been sent successfully.");
        setFormData({
          services: [],
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          bestWay: "",
          bestTime: "",
          terms: false,
          scheduledDateTime: null,
        });
        setSelectedDate(null);
        setSelectedTime("");
      } else {
        setSubmitMessage(
          "Sorry, there was an error sending your inquiry. Please try again."
        );
      }
    } catch (error) {
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <h2>Start Your Design Project</h2>
          <p>
            Ready to transform your space? Fill out the form below to tell us
            about your project. A member of our design team will get in touch
            with you to schedule a consultation.
          </p>
        </div>

        <form className="contact-form-body" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Services of Interest</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="kitchen"
                    name="services"
                    value="kitchen"
                    checked={formData.services.includes("kitchen")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="kitchen">Kitchen Design</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="bathroom"
                    name="services"
                    value="bathroom"
                    checked={formData.services.includes("bathroom")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="bathroom">Bathroom Remodel</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="full-home"
                    name="services"
                    value="full-home"
                    checked={formData.services.includes("full-home")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="full-home">Full Home Interior</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="flooring"
                    name="services"
                    value="flooring"
                    checked={formData.services.includes("flooring")}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="flooring">Flooring</label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 555-5555"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="e.g., project scope, timeline, budget..."
              ></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bestWay">Best way to reach you</label>
              <select
                id="bestWay"
                name="bestWay"
                value={formData.bestWay}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bestTime">Best time to reach you</label>
              <select
                id="bestTime"
                name="bestTime"
                value={formData.bestTime}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value="morning">Morning (9am-12pm)</option>
                <option value="afternoon">Afternoon (12pm-5pm)</option>
                <option value="evening">Evening (5pm-8pm)</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width terms-group">
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="terms">
                    By checking this box, you consent to be contacted by Dezigna
                    via call, text, or email. Message and data rates may apply.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <motion.button
                type="button"
                className="schedule-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 25px rgba(22, 82, 123, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
              >
                <FiCalendar className="button-icon" />
                Schedule Consultation
              </motion.button>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Project Inquiry"}
              </button>
            </div>
          </div>

          {submitMessage && (
            <div
              className="submit-message"
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "8px",
                backgroundColor: submitMessage.includes("error")
                  ? "#f8d7da"
                  : "#d4edda",
                color: submitMessage.includes("error") ? "#721c24" : "#155724",
                textAlign: "center",
              }}
            >
              {submitMessage}
            </div>
          )}
        </form>

        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="modal-overlay-v2"
              variants={{
                visible: { opacity: 1, transition: { duration: 0.3 } },
                hidden: { opacity: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeModal}
            >
              <motion.div
                className="modal-content-v2"
                variants={{
                  hidden: {
                    scale: 0.95,
                    opacity: 0,
                    transition: { duration: 0.3, ease: "easeIn" },
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-graphic-side">
                  <motion.div
                    className="graphic-placeholder"
                    variants={{
                      hidden: { scale: 0, rotate: -10 },
                      visible: {
                        scale: 1,
                        rotate: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="consultation-svg"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M60 20 L70 40 L90 40 L75 55 L80 75 L60 65 L40 75 L45 55 L30 40 L50 40 Z"
                        fill="#ffffff"
                      />
                      <circle cx="60" cy="60" r="5" fill="#16527b" />
                    </svg>
                    <p>Dezigna</p>
                  </motion.div>
                </div>
                <div className="modal-form-side">
                  <button
                    className="modal-close-button-v2"
                    onClick={closeModal}
                  >
                    <FiX />
                  </button>
                  <h3 className="modal-title-v2">Schedule Your Consultation</h3>
                  <p className="modal-subtitle-v2">
                    Select a date that works best for you.
                  </p>
                  {selectedDate && selectedTime && (
                    <div className="selected-datetime-display">
                      <p>
                        Selected: {selectedDate.toLocaleDateString()} at{" "}
                        {selectedTime}
                      </p>
                    </div>
                  )}
                  <div className="date-picker-container-v2">
                    <DatePicker
                      selected={selectedDate}
                      onChange={setSelectedDate}
                      inline
                      minDate={new Date()}
                      dateFormat="MMMM d, yyyy"
                    />
                    {selectedDate && (
                      <div className="time-picker-container">
                        <label>Select Time:</label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        >
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="modal-actions-v2">
                    <button
                      className="modal-button-v2 schedule-button-v2"
                      onClick={handleScheduleMeeting}
                    >
                      Confirm Date
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
