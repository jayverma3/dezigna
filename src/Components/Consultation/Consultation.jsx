import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Consultation.css";
import { FiX, FiCalendar } from "react-icons/fi"; // Using react-icons for buttons and decor

const backdrop = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 },
};

const modal = {
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
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const graphicVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Consultation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleScheduleMeeting = () => {
    // Logic to handle scheduling the meeting with the selected date
    console.log("Meeting scheduled for:", selectedDate);
    close();
  };

  return (
    <div className="consultation-section-v2">
      <div className="consultation-container-v2">
        <motion.div
          className="consultation-content-v2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="consultation-title-v2"
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="consultation-text-v2"
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let our experts guide you from concept to completion. Schedule a
            free consultation today.
          </motion.p>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="modal-overlay-v2"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={close}
          >
            <motion.div
              className="modal-content-v2"
              variants={modal}
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
              <div className="modal-graphic-side">
                <motion.div
                  className="graphic-placeholder"
                  variants={graphicVariants}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Consultation;
