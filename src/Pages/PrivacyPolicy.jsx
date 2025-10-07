import React from 'react';
import './LegalPages.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page-container">
      <Header />
      <main className="legal-page">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to Arqadian Group Inc. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at contact@arqadiangroupusa.com.
        </p>
        <p>
          This privacy notice describes how we might use your information if you visit our website. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
        </p>

        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p>
          <strong>Personal information you disclose to us:</strong> We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names, phone numbers, email addresses, mailing addresses, job titles, and other similar information when you fill out contact forms or subscribe to our newsletter.
        </p>
        <p>
          <strong>Information automatically collected:</strong> We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
        </p>

        <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To post testimonials. We post testimonials on our Website that may contain personal information.</li>
          <li>Request feedback. We may use your information to request feedback and to contact you about your use of our Website.</li>
          <li>To enable user-to-user communications.</li>
          <li>To manage user accounts.</li>
          <li>To send administrative information to you.</li>
          <li>To protect our Services.</li>
          <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          <li>To respond to legal requests and prevent harm.</li>
        </ul>

        <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations. More specifically, we may need to process your data or share your personal information in the following situations: Business Transfers, Affiliates, Business Partners.
        </p>

        <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <a href="/cookies-notice">Cookies Notice</a>.
        </p>

        <h2>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p>
          If you choose to register or log in to our services using a social media account, we may have access to certain information about you. Our Website may offer you the ability to register and login using your third-party social media account details (like your Facebook, Twitter or other social media logins). Where you choose to do this, we will receive certain profile information about you from your social media provider.
        </p>

        <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
        </p>

        <h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
        </p>

        <h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p>
          We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website.
        </p>

        <h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>
          In some regions (like the European Economic Area and United Kingdom), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
        </p>

        <h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
        </p>

        <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p>
          Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible.
        </p>

        <p className="last-updated">Last updated: October 06, 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;