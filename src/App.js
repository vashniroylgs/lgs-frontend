import './App.css';
import {Route,Routes} from 'react-router-dom'

import CountriesBar from './Components/Countriesbar';
import Navbar from './Components/navbar';
import Footer from './Components/Footer'
import ResellerMendix from './Components/ResellerMendixPage'
import ResellerPolarian from './Components/ResellerPolarianPage';
import WebMobile from './Components/MobileandAppDevelopment';
import PolarianALM from './Components/PolarianALM';
import Ptcintegrety from './Components/PTCintegrity';
import About from './Components/Aboutus';
import HomePage from './Components/Homepage';
import ContactUs from './Components/ContactUs';
import Chat from './Components/chat';
import Popup from './Components/Popup';
import SaasPage from './Components/SaasPage';
import SalesForce from './Components/SalesforcePage';
import FirstTimePopup from './Components/StartPopup';
import PopupForm from './Components/Popup';

function App() {
  return (
    <>
    <CountriesBar />
    <Navbar />
    <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/resellerpolarian" Component={ResellerPolarian} />
        <Route path="/resellermendix" Component={ResellerMendix} />
        <Route path="/mobileandappdevelopment" Component={WebMobile} />
        <Route path="/polarianalm" Component={PolarianALM} />
        <Route path="/ptcintegrity" Component={Ptcintegrety} />
        <Route path="/aboutus" Component={About} />
        <Route exact path="/contactus" Component={PopupForm} />
        <Route path='/saascloudsolutions' Component={SaasPage} />
        <Route path='/salesforcepage' Component={SalesForce} />
    </Routes>
    <Footer />
    </>
  );
}


export default App;
