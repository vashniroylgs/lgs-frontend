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
import Clients from "./Components/Clients";
import Careers from "./Components/Careers";
import WhatsAppIntegration from "./Components/WhatsappIcon";
import SalesForce from "./Components/SalesforcePage/index";
import Contactpopup from "./Components/Popup";
import ScrollToTopButton from "./Components/scroll/Scroll";

function App() {
  // Set to true to show the pop-up on initial load

  return (
    <>
      <div>
        <CountriesBar />

        <WhatsAppIntegration />
        <Chat />
        <ScrollToTopButton />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/resellerpolarian" element={<ResellerPolarian />} />
          <Route exact path="/resellermendix" element={<ResellerMendix />} />
          <Route exact path="/mobileandappdevelopment" element={<WebMobile />}/>
          <Route exact path="/polarianalm" element={<PolarianALM />} />
          <Route exact path="/ptcintegrity" element={<Ptcintegrety />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contactus" element={<Contactpopup />} />
          <Route exact path="/saascloudsolutions" element={<SaasPage />} />
          <Route exact path="/digitalmarketing"  element={<DigitalMarketing />}/>
          <Route exact path="/salesforcepage" element={<SalesForce />} />
          <Route exact path="/clientsPage" element={<Clients />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
