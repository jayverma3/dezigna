import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaRegLightbulb,
  FaHandshake,
  FaHeart,
  FaUsers,
  FaProjectDiagram,
  FaRegBuilding,
} from "react-icons/fa";
import "./About.css";

const AnimatedStat = ({ value, label, icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const timelineEvents = [
    {
      year: "Past",
      title: "Foundation",
      description:
        "Dezigna is founded by a trio of industry veterans, combining their expertise in architecture, interior design, and construction.",
    },
    {
      year: "Present",
      title: "First Showcase Home",
      description:
        "We complete our first signature project, a full-scale luxury home.",
    },
    {
      year: "Future",
      title: "Studio Expansion",
      description:
        "To meet growing demand, and customer satisfaction we provide 24/7 user support",
    },
  ];

  const values = [
    {
      icon: <FaRegLightbulb />,
      title: "Innovation",
      description:
        "We constantly seek out new technologies and materials to create smarter, more sustainable homes.",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description:
        "Our business is built on a foundation of honesty and transparent communication with our clients.",
    },
    {
      icon: <FaHeart />,
      title: "Excellence",
      description:
        "We are relentless in our pursuit of perfection, from the initial concept to the final finishing touches.",
    },
  ];

  return (
    <div className="about">
      <div className="about-us-page-v2">
        <section className="hero-section-v2">
          <div className="hero-bg-v2"></div>
          <motion.div
            className="hero-content-v2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Where Vision Meets Design</h1>
            <p>
              We are Dezigna. A collective of creators, thinkers, and builders
              revolutionizing the spaces we live in.
            </p>
          </motion.div>
        </section>

        <section className="mission-section-v2">
          <motion.div
            className="mission-content-v2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Mission</h2>
            <p>
              To craft bespoke living spaces that reflect the individuality of
              our clients, merging timeless design with unparalleled
              craftsmanship. We don’t just build homes; we bring dreams to life.
            </p>
          </motion.div>
        </section>

        <section className="timeline-section-v2">
          <h2>Our Journey</h2>
          <div className="timeline-v2">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="timeline-item-v2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <div className="timeline-year-v2">{event.year}</div>
                <div className="timeline-dot-v2"></div>
                <div className="timeline-content-v2">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="values-section-v2">
          <h2>Our Core Values</h2>
          <div className="values-container-v2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card-v2"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="value-icon-v2">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="leadership-section-v2">
          <h2>Proven Expertise</h2>
          <div className="stats-container-v2">
            <AnimatedStat
              value="15"
              label="Lead Designers & Architects"
              icon={<FaUsers />}
            />
            <AnimatedStat
              value="120+"
              label="Projects Completed"
              icon={<FaProjectDiagram />}
            />
            <AnimatedStat
              value="98%"
              label="Client Satisfaction Rate"
              icon={<FaRegBuilding />}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
