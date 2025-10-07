import React from 'react';
import './LegalPages.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const TermsOfService = () => {
  return (
    <div className="legal-page-container">
      <Header />
      <main className="legal-page">
        <h1>Terms of Service</h1>
        <p>
          These Terms of Service ("Terms") govern your access to and use of the Arqadian Group Inc. website (the "Service") operated by Arqadian Group Inc. ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
        </p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. This Agreement applies to all visitors, users, and others who access or use the Service.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Arqadian Group Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Arqadian Group Inc.
        </p>

        <h2>4. Prohibited Activities</h2>
        <p>
          You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to: systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
        </p>

        <h2>5. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Arqadian Group Inc. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Arqadian Group Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
        </p>

        <h2>7. Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of your use of the Site.
        </p>

        <h2>8. Limitation Of Liability</h2>
        <p>
          In no event shall Arqadian Group Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2>9. Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State, without regard to its conflict of law provisions.
        </p>

        <h2>11. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <p className="last-updated">Last updated: October 06, 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;