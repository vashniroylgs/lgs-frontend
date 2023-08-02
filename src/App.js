// import './App.css';
// import {Route,Routes} from 'react-router-dom'

// import CountriesBar from './Components/Countriesbar';
// import Navbar from './Components/navbar';
// import Footer from './Components/Footer'
// import ResellerMendix from './Components/ResellerMendixPage'
// import ResellerPolarian from './Components/ResellerPolarianPage';
// import WebMobile from './Components/MobileandAppDevelopment';
// import PolarianALM from './Components/PolarianALM';
// import Ptcintegrety from './Components/PTCintegrity';
// import About from './Components/Aboutus';
// import HomePage from './Components/Homepage';
// import ContactUs from './Components/ContactUs';
// import Chat from './Components/chat';
// import Popup from './Components/Popup';
// import SaasPage from './Components/SaasPage';
// import SalesForce from './Components/SalesforcePage';
// import FirstTimePopup from './Components/StartPopup';
// import PopupForm from './Components/Popup';

// function App() {
//   return (
//     <>
//     <CountriesBar />
//     <Navbar />
//     <Routes>
//         <Route path="/" Component={HomePage} />
//         <Route path="/resellerpolarian" Component={ResellerPolarian} />
//         <Route path="/resellermendix" Component={ResellerMendix} />
//         <Route path="/mobileandappdevelopment" Component={WebMobile} />
//         <Route path="/polarianalm" Component={PolarianALM} />
//         <Route path="/ptcintegrity" Component={Ptcintegrety} />
//         <Route path="/aboutus" Component={About} />
//         <Route exact path="/contactus" Component={PopupForm} />
//         <Route path='/saascloudsolutions' Component={SaasPage} />
//         <Route path='/salesforcepage' Component={SalesForce} />
//     </Routes>
//     <Footer />
//     </>
//   );



// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ResellerMendix from './Components/ResellerMendixPage';
import ResellerPolarian from './Components/ResellerPolarianPage';
import Header from './Components/navbar';
import Footer from './Components/Footer';
import WebMobile from './Components/MobileandAppDevelopment';
import PolarianALM from './Components/PolarianALM';
import Ptcintegrety from './Components/PTCintegrity';
import About from './Components/Aboutus';
import HomePage from './Components/Homepage';
import Chat from './Components/chat';
import FirstTimePopup from './Components/StartPopup';
import VisitTracker from './Components/Tracker';
import CareerForm from './Components/CareerForm';
import PopupForm from './Components/Popup'




function App() {
  const [showPopup, setShowPopup] = useState(true); // Set to true to show the pop-up on initial load
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    fetchVisitCount(); // Fetch the visit count on initial load
    // Increment the visit count on every page load by making a request to the homepage
    fetch('http://localhost:3005/', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setVisitCount(data.visitCount);
        }
      })
      .catch((error) => {
        console.error('Error incrementing visit count:', error);
      });
  }, []);

  const fetchVisitCount = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/visit-count');
      const data = await response.json();
      setVisitCount(data.visitCount);
    } catch (error) {
      console.error('Error fetching visit count:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <FirstTimePopup onClose={handleClosePopup} 
      onComplete={handleClosePopup}/>}

      <div>
        <Header />
        <VisitTracker visitCount={visitCount} />
        <Chat />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resellerpolarian" element={<ResellerPolarian />} />
          <Route path="/resellermendix" element={<ResellerMendix />} />
          <Route path="/mobileandappdevelopment" element={<WebMobile />} />
          <Route path="/polarianalm" element={<PolarianALM />} />
          <Route path="/ptcintegrity" element={<Ptcintegrety />} />
          <Route path="/aboutus" element={<About />} />
          <Route path='/careers' element={<CareerForm/>}/>
          {/* The "Contact Us" link should navigate to the /contactus page */}
          <Route path="/contactus" element={<PopupForm />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
