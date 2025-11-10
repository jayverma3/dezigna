import React from 'react';
import './LegalPages.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const CookiesNotice = () => {
  return (
    <div className="legal-page-container">
      <Header />
      <main className="legal-page">
        <h1>Cookies and Tracking Notice</h1>
        <p>
          This Cookies Notice explains how thedezigna ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
          A cookie is a small text file that is stored on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
        </p>

        <h2>2. Why do we use cookies?</h2>
        <p>
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
        </p>
        <ul>
          <li>
            <strong>Strictly Necessary Cookies:</strong> These are essential for the website to perform its basic functions. They are necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These are used to store preferences set by users such as account name, language, and location. These cookies allow our website to remember choices you make and provide enhanced, more personal features.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies collect information on how users interact with the website, including what pages are visited most, as well as other analytical data. These are used to improve how the website functions and performs. For example, we use Google Analytics to help us understand how visitors arrive at and browse our products and website to identify areas for improvement.
          </li>
          <li>
            <strong>Advertising/Targeting Cookies:</strong> These cookies are used to display relevant advertising to visitors, as well as to track advertising performance. They are used by companies to build a profile of visitor interests and display relevant ads on other sites. These cookies may be set through our site by our advertising partners.
          </li>
        </ul>

        <h2>3. What about other tracking technologies, like web beacons?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Website or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within our websites to another, to deliver or communicate with cookies, and to improve site performance.
        </p>

        <h2>4. How can I control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
        </p>
        <p>
          In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>. You can also manage cookies through the settings of your web browser.
        </p>

        <h2>5. How often will you update this Cookie Notice?</h2>
        <p>
          We may update this Cookie Notice from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Notice regularly to stay informed about our use of cookies and related technologies. The date at the bottom of this Cookie Notice indicates when it was last updated.
        </p>

        <p className="last-updated">Last updated: October 31, 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesNotice;