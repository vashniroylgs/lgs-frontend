
import React, { Component } from "react";
import ReactSlick from "../Slider";
import ImageSlider from "../ImageSlider";
import WhyUs from '../Whyus'
import about from "../images/whyusimage.png";
import StartPopup from '../StartPopup'
import Chat from '../chat'
import Services from "../Services";
import { BsArrowRightShort } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import IndustriesPage from "../IndustriesPage";
import TechnologiesPage from "../Technologies";
import Card from "../Card";
import WhatsAppIntegration from "../WhatsappIcon";

const Details = [
  {
    id: 1,
    question:
      "Expertise and Experience",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While in-house development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];



const ScrolllingImages = [

    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Zoox_Motors_qhr2hn.png",

    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Taulia_ffxzhx.png",
          
    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Tata_Alexis_ptw73z.png",
         
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Siemens_Healthineers_dh3pcl.png",
           
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Record_Linc_w9zxvc.jpg",
       
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689926991/64_BitStore_poolzk.png",
          
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/siemens_s7ucfi.png",
            
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/sedemac_dlcgdk.jpg",
          
    
              "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/ptc_xxn1tl.png",
            
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Padmini-Vna_ep4pwk.jpg",
                "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/CIBT_Visas_cfxkcy.png",
          
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Cognizant_esfsi8.png",
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Broadcom_e0g8vx.png",
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Alcove_Furniture_feq4qz.png",
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Air_BNB_ijkep7.png",

  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  
const ScrolllingImages1 = [
          "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Nityas_Fashion_a9ly47.png",
          
        "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Oracle_dmaiik.png",
   
        "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/napino_obfge2.jpg",
         
        "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Medtronic_xgouix.png",
         
         
        "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/HCL_igijlj.png",
       
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/LJB_lladcr.png",
         
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/Hematogenix_frhdaa.png",
               
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/DrR_Logo_wvw2gc.jpg",
       
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/ESPN_Sports_ww7vfh.png",


].map((image) => ({

  id: crypto.randomUUID(),

  image

}));




const ScrolllingImages2 = [

    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/Fidelity_investments_y7t61u.png",
          
      "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/Esnaad_gba3ox.png",
        
    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Delight_Cabs_aet4l7.png",
        
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Covidien_kbldon.png",
        
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Compliance_Group_x8sgyy.jpg",
      
  "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/ConvaTec_almrlt.png",
       
   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Capgemini-Logo_xe2sql.png",

].map((image) => ({

  id: crypto.randomUUID(),

  image

}));

class HomePage extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".home-reval");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">

        <div
          className="home-page-slider-main-container row"
        >
          <div className="col-12 col-md-6">
            <ReactSlick />
          </div>
          <div className="col-12 col-md-6">
            <ImageSlider />
          </div>
        </div>
        <WhatsAppIntegration  />
        <div className="row p-5">
          <div className="col-12 col-md-7 home-page-content-container">
            <h1 className="home-page-heading">About LGS</h1>
            <h5 className="mb-4">
            Welcome to the world of innovation and digital excellence! At Labyrinth Global Solutions, 
            we are more than just an IT company; we are your partners in transforming ideas into reality. 
            As pioneers in web and app development, 
            we harness the power of technology to create seamless digital experiences that drive growth and inspire change. 
            </h5>
            <h4>Industries We are Serving </h4>
            <div className="home-page-list-container">
              <ul>
                <li className="home-page-list">
                  <TiTick className="home-page-tick" />
                  Health Tech
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Automotive & Transportation
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" /> Aerospace
                </li>
              </ul>
              <ul>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Oil & Gas
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Enterprise Agile (SAFe)
                </li>
              </ul>
            </div>
            <Link to='/contactus'>
            <button className="btn btn-primary">
              Learn More <BsArrowRightShort className="home-page-arrow" />
            </button>
            </Link>
          </div>
          <div className="col-12 col-md-5">
            <img
              src="https://www.labyrinthglobalsolutions.com/assets/img/aboutus1.png"
              alt="home-page"
              className="home-page-image "
            />
          </div>
        </div>
        <div className="row">
          <h1 className="text-center home-page-heading">
            BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY
          </h1>
        </div>
        <div className="row">
          <Services />
        </div>
        <div className="row p-5">
          <h1 className="home-page-heading text-center">Why Us</h1>
          <div className="col-12 col-lg-5 mt-3 home-reval">
            <img className="home-about-us-image" src={about} alt="why-us" />
          </div>
          <div className="col-12 col-lg-7 mt-3 home-reval">
            <ul className="home-page-why-us-container">
              {Details.map((eachItem) => (
                <WhyUs key={eachItem.id} details={eachItem} />
              ))}
            </ul>
          </div>
          <IndustriesPage />
          <TechnologiesPage />
          <Card />
        </div>   
        <StartPopup />
        <Chat />
        </div>
    );
  }
}

export default HomePage;