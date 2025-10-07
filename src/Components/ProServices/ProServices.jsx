import React from 'react';
import './ProServices.css';

const ProServices = () => {
  return (
    <div className="pro-services-container">
      <div className="pro-services-header">
        <h2>Tailored for Your Trade</h2>
        <p>Whether you're a contractor, builder, or remodeler, Dezigna offers services to streamline your projects.</p>
      </div>

      <div className="pro-services-tabs">
        <div className="tab">
          <h3>Contractors</h3>
          <p>Access to a wide range of materials, dedicated support, and competitive pricing to keep your projects on schedule and budget.</p>
        </div>
        <div className="tab">
          <h3>Builders</h3>
          <p>Our Builder Alliance program offers exclusive benefits, including model home discounts and co-marketing opportunities.</p>
        </div>
        <div className="tab">
          <h3>Remodelers</h3>
          <p>From single-room updates to whole-home renovations, get the products and expertise you need to deliver stunning results.</p>
        </div>
      </div>

      <div className="builder-alliance">
        <h3>The Dezigna Builder Alliance</h3>
        <p>Join a community of top professionals. Benefits include priority service, specialized training, and referral rewards. Partner with us to grow your business and deliver excellence.</p>
      </div>

      <div className="pro-signup">
        <h3>Become a Dezigna Pro</h3>
        <p>Complete the form below to get in touch with our professional services team.</p>
        <form className="pro-signup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Company Name" />
          <select required>
            <option value="">I am a...</option>
            <option value="contractor">Contractor</option>
            <option value="builder">Builder</option>
            <option value="remodeler">Remodeler</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Tell us about your business..."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProServices;
