import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    name: 'Alexandra Chen',
    title: 'Lead Architect & Founder',
    bio: 'With a passion for sustainable design, Alexandra has been recognized with numerous awards for her innovative and eco-friendly architectural solutions.',
    image: '/src/assets/images/pexels-binyaminmellish-1396132.jpg',
  },
  {
    name: 'Benjamin Carter',
    title: 'Head of Interior Design',
    bio: 'Benjamin’s design philosophy is centered on creating spaces that are not only beautiful but also deeply personal and functional for his clients.',
    image: '/src/assets/images/pexels-pixabay-280229.jpg',
  },
  {
    name: 'Olivia Rodriguez',
    title: 'Chief Project Manager',
    bio: 'Olivia ensures that every project is executed flawlessly, from the initial concept to the final handover, with a keen eye for detail and a commitment to timelines.',
    image: '/src/assets/images/pexels-davidmcbee-1546166.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Creative Minds</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
