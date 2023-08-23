

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
import OrmTable from "./Components/ORM";
import WebsiteDevelopment from "./Components/MobileDevelopment";
import SMO from "./Components/SMO";
import WebsiteMaintanance from "./Components/WebsiteMaintance";
import PpcTable from "./Components/Ppctable";
import Smm from "./Components/SMM";
import PricingPage from "./Components/seo/seo";
import Ourlogo from "./Components/Ourlogo";
import ContactPage from "./Components/ContactPage";
function App() {
  

  // useEffect(() => {
  //   // Fetch the visit count from the server
  //   fetch('/getVisitCount?timestamp=' + Date.now())
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Backend Response:', data);
  //       setVisitCount(data.visitCount);
  //       console.log('Updated visit count state:', visitCount);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching visit count:', error);
  //     });
    
  //   console.log('Current visit count state:', visitCount); // Check the state value before and after updating
  // }, []);
//   const [visitCount, setVisitCount] = useState(0);

// useEffect(() => {
//   fetchVisitCount(); // Fetch the visit count on initial load
//   postVisitCount();
// });

// const fetchVisitCount = async () => {
//     try {
//       const response = await fetch("http://localhost:3005/getVisitCount");
//       const data = await response.json();
//       console.log("fetch called")
//       console.log(data)
//       setVisitCount(data.visitCount);
//     } catch (error) {
//       console.error("Error fetching visit count:", error);
//     }
// };
// const postVisitCount=()=>{
//   const visitCookie=Cookies.get("VisitCount")
//   if(visitCookie==="saicharan"){
//     return;
//   }
//   else{
//     Cookies.set("VisitCount","saicharan")
//     fetch("http://localhost:3005/incrementVisitCount",{method: "POST"})
//    .then((response)=>response.json())
//     .then((data)=>{
//       if(data.success){
//         return
//       }
//     })
//     .catch((error)=>{
//       console.log(error)})
//     };
//   }


  
  

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
        </Routes>
      </div>
    </>
  );
  }

export default App;
