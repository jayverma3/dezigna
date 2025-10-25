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
import CabinetVisualizer from "./Components/CabinetVisualizer/CabinetVisualizer";
import MainLayout from "./Components/PageLayout/MainLayout";
import SmsPolicy from "./Pages/SmsPolicy";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />
          <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
          <Route path="/listing/:id" element={<MainLayout><ListingDetail /></MainLayout>} />
          <Route path="/for-professionals" element={<MainLayout><ForProfessional /></MainLayout>} />
          <Route path="/realtors" element={<MainLayout><Realtors /></MainLayout>} />
          <Route path="/reviews" element={<MainLayout><Reviews /></MainLayout>} />
          <Route path="/expert-insight" element={<MainLayout><ExpertInsight /></MainLayout>} />
          <Route path="cabinet-visualizer" element={<MainLayout><CabinetVisualizer /></MainLayout>} />
          <Route path="/locations" element={<MainLayout><Locations /></MainLayout>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookies-notice" element={<CookiesNotice />} />
          <Route path="/sms-policy" element={<SmsPolicy />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
