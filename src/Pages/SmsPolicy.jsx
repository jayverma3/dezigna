import React from 'react';
import './LegalPages.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const SmsPolicy = () => {
  return (
    <div className="legal-page-container">
      <Header />
      <main className="legal-page">
        <h1>SMS Policy</h1>
        <p>
          This SMS Policy describes how thedezigna ("we", "us", or "our") uses and protects the information you provide when you opt-in to receive text messages from us. By opting into our SMS service, you agree to the terms of this policy.
        </p>

        <h2>1. Consent to Receive SMS Messages</h2>
        <p>
          By submitting your information and opting in to our SMS service, you consent to receive text messages from thedezigna. These messages may include appointment reminders, support, updates, promotional offers, and other informational content. You understand that message and data rates may apply, and message frequency will vary. Your consent to receive marketing text messages is not a condition of any purchase.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          When you opt-in to our SMS service, we collect your mobile phone number and any other information you voluntarily provide. This information is used solely for the purpose of sending you the text messages you have consented to receive. We may also collect information about your interaction with our messages, such as when you open a message or click on a link.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          Your mobile information will be used exclusively to send you the communications described above. We are committed to protecting your privacy and ensuring the security of your information. We do not sell, rent, or trade your mobile number with third parties for their own marketing purposes.
        </p>

        <h2>4. Information Sharing</h2>
        <p>
          <strong>Your mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.</strong> All categories of information, including text messaging originator opt-in data and consent, are excluded from any third-party sharing. This information will not be sold, rented, or otherwise disclosed to any third parties, except as required by law.
        </p>

        <h2>5. Opt-Out Procedure</h2>
        <p>
          You may opt-out of our SMS service at any time. To unsubscribe, simply reply with the word <strong>STOP</strong> to any message you receive from us. After you send the "STOP" message, we will send you one final message to confirm that you have been unsubscribed. You will no longer receive messages from us after that. If you wish to join again, just sign up as you did the first time and we will start sending messages to you again.
        </p>

        <h2>6. Support and Assistance</h2>
        <p>
          If you need assistance or have any questions about our SMS service, reply with the word <strong>HELP</strong> to any message you receive from us. We will respond with instructions on how to use our service and how to unsubscribe. You can also contact us for support at contact@thedezigna.com.
        </p>

        <h2>7. Carrier Liability</h2>
        <p>
          Carriers are not liable for delayed or undelivered messages. We will not be liable for any delays in the receipt of any SMS messages as delivery is subject to effective transmission from your network operator.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We reserve the right to modify this SMS Policy at any time. Any changes will be effective immediately upon posting the updated policy on this page. We encourage you to review this page periodically to stay informed about our SMS practices.
        </p>

        <p className="last-updated">Last updated: October 31, 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default SmsPolicy;