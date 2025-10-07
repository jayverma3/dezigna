import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Listings from "./Pages/Listings/Listings";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Realtors from "./Pages/Realtors/Realtors";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import ChatBot from "./Components/ChatBot/ChatBot";
import ForProfessional from "./Pages/ForProfessional/ForProfessional";
import Products from "./Pages/Products/Products";
import Reviews from "./Pages/Reviews/Reviews";
import ExpertInsight from "./Pages/ExpertInsight/ExpertInsight";
import Locations from "./Pages/Locations/Locations";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import CookiesNotice from "./Pages/CookiesNotice";
import SmsPolicy from "./Pages/SmsPolicy";
function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/for-professionals" element={<ForProfessional />} />
          <Route path="/realtors" element={<Realtors />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookies-notice" element={<CookiesNotice />} />
          <Route path="/sms-policy" element={<SmsPolicy />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/expert-insight" element={<ExpertInsight />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
