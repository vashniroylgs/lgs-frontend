import "./App.css";
import { Route, Routes } from "react-router-dom";
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
// import Clients from "./Components/Clients";
import Careers from "./Components/Careers";
import WhatsAppIntegration from "./Components/WhatsappIcon";
import SalesForce from "./Components/SalesforcePage/index";
import Contactpopup from "./Components/Popup";
import ScrollToTopButton from "./Components/scroll/Scroll";
// import OrmTable from "./Components/Tables/ORM";
// import WebsiteDevelopment from "./Components/Tables/WebsiteDevelopment";
// import SMO from "./Components/Tables/SMO";
// import WebsiteMaintanance from "./Components/Tables/WebsiteMaintance";
// import PpcTable from "./Components/Ppctable";
// import Smm from "./Components/Tables/SMM";
// import PricingPage from "./Components/Tables/seo/seo";
// import Ourlogo from "./Components/Tables/Ourlogo";
import ContactPage from "./Components/ContactPage";
function App() {
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
          {/* <Route
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
          
          <Route exact path="/smoservice" element={<SMO />} /> */}
          <Route exact path="/contactus" element={<ContactPage />} />
          <Route exact path="/salesforcepage" element={<SalesForce />} />
          {/* <Route exact path="/clientsPage" element={<Clients />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
