// import './App.css';
// import {Route,Routes} from 'react-router-dom'
// //import Homepage from './Components/Homepage';
// //import HomepageReactSlick from './Components/HomepageReactSlick';
// import ChatgptCircle from './Components/ChatgptCircle'
// import ResellerMendix from './Components/ResellerMendixPage'
// import ResellerPolarian from './Components/ResellerPolarianPage';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import WebMobile from './Components/MobileandAppDevelopment';
// import Windows from './Components/MicrosoftDynamic';
// import PolarianALM from './Components/PolarianALM';
// import Ptcintegrety from './Components/PTCintegrity';
// import About from './Components/Aboutus';
// import HomePage from './Components/Homepage';
// import ContactUs from './Components/ContactUs';
// import Chat from './Components/chat';

// function App() {
//   return (
//     <>
//       <Header />
//       <Chat/>
//       <Routes>
//         <Route path="/" Component={HomePage} />
//         <Route path="/resellerpolarian" Component={ResellerPolarian} />
//         <Route path="/resellermendix" Component={ResellerMendix} />
//         <Route path="/mobileandappdevelopment" Component={WebMobile} />
//         <Route path="/microsoftdynamics" Component={Windows} />
//         <Route path="/polarianalm" Component={PolarianALM} />
//         <Route path="/ptcintegrity" Component={Ptcintegrety} />
//         <Route path="/aboutus" Component={About} />
//         <Route path="/contactus" Component={ContactUs} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChatgptCircle from './Components/ChatgptCircle';
import ResellerMendix from './Components/ResellerMendixPage';
import ResellerPolarian from './Components/ResellerPolarianPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import WebMobile from './Components/MobileandAppDevelopment';
import Windows from './Components/MicrosoftDynamic';
import PolarianALM from './Components/PolarianALM';
import Ptcintegrety from './Components/PTCintegrity';
import About from './Components/Aboutus';
import HomePage from './Components/Homepage';
import ContactUs from './Components/ContactUs';
import Chat from './Components/chat';
import Registration from './Components/popup';

function App() {
  const [showPopup, setShowPopup] = useState(true); // Set to true to show the pop-up on initial load

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <Registration onClose={handleClosePopup} />}

      <div>
        <Header />
        <Chat />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resellerpolarian" element={<ResellerPolarian />} />
          <Route path="/resellermendix" element={<ResellerMendix />} />
          <Route path="/mobileandappdevelopment" element={<WebMobile />} />
          <Route path="/microsoftdynamics" element={<Windows />} />
          <Route path="/polarianalm" element={<PolarianALM />} />
          <Route path="/ptcintegrity" element={<Ptcintegrety />} />
          <Route path="/aboutus" element={<About />} />

          {/* The "Contact Us" link should navigate to the /contactus page */}
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
