import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ResellerMendix from "./Components/ResellerMendixPage";
import ResellerPolarian from "./Components/ResellerPolarianPage";
import WebMobile from "./Components/MobileandAppDevelopment";
import PolarianALM from "./Components/PolarianALM";
import Ptcintegrety from "./Components/PTCintegrity";
import About from "./Components/Aboutus";
import HomePage from "./Components/Homepage";
import Chat from "./Components/chat";
import CountriesBar from "./Components/Countriesbar";
import DigitalMarketing from "./Components/DigitalMarketing";
import SaasPage from "./Components/SaasPage";
import Clients from "./Components/Clients";
import Careers from "./Components/Careers";
import WhatsAppIntegration from "./Components/WhatsappIcon";
import SalesForce from "./Components/SalesforcePage/index";
import Contactpopup from "./Components/Popup";
import ScrollToTopButton from "./Components/scroll/Scroll";
import OrmTable from "./Components/ORM";
import WebsiteDevelopment from "./Components/WebsiteDevelopment";
import SMO from "./Components/SMO";
import WebsiteMaintanance from "./Components/WebsiteMaintance";
import PpcTable from "./Components/Ppctable";
import Smm from "./Components/SMM";
import PricingPage from "./Components/seo/seo";
import Ourlogo from "./Components/Ourlogo";
import ContactPage from "./Components/ContactPage";
import axios from "axios";
import JobDetails from "./Components/jobPotal/jobdetails";
import AdminLoginPage from "./Components/Admin/adminLogin";
import AdminDashboard from "./Components/Admin/admindashboard";
import { useEffect, useState } from "react";
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:3005/check-auth', {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error('Authentication check error:', error);
      }
    };

    checkAuthentication();
  }, []);
  return (
    <>
      <div>
       
        <CountriesBar />
        <Chat />
        <WhatsAppIntegration />
        <ScrollToTopButton />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/resellerpolarian"
            element={<ResellerPolarian />}
          />
          <Route exact path="/resellermendix" element={<ResellerMendix />} />
          <Route
            exact
            path="/mobileandappdevelopment"
            element={<WebMobile />}
          />
          <Route exact path="/polarianalm" element={<PolarianALM />} />
          <Route exact path="/ptcintegrity" element={<Ptcintegrety />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/saascloudsolutions" element={<SaasPage />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route
            exact
            path="/websitemaintanance"
            element={<WebsiteMaintanance />}
          />
          <Route
            exact
            path="/websitedevelop"
            element={<WebsiteDevelopment />}
          />
          <Route exact path="/orm" element={<OrmTable />} />
          <Route exact path="/ppc" element={<PpcTable />} />
          <Route exact path="/smm" element={<Smm />} />
          <Route exact path="/seo" element={<PricingPage />} />
          <Route exact path="/logodesign" element={<Ourlogo />} />
          <Route exact path="/salesforcepage" element={<SalesForce />} />
          <Route exact path="/clientsPage" element={<Clients />} />
          <Route exact path="/smoservice" element={<SMO />} />
          <Route exact path="/contactus" element={<ContactPage />} />
          <Route path="/career/:jobId" element={<JobDetails />} />
           <Route exact path="/umarmohammadsheikh" element={<AdminLoginPage />} />
          {/*<Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <AdminLoginPage />} />
           */}
            {/* <Route path="/admin" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLoginPage />} /> */}
        <Route
          path="/umarmohammadsheikh/dashboard"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/umarmohammadsheikh" />}
        />
          </Routes>
      </div>
    </>
  );
}

export default App;
