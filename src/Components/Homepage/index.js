// import React, { Component } from "react";
// import { Heading, Li, Tick } from "../MicrosoftDynamic/styledComponents";
// import { ArrowIcon2 } from "../MobileandAppDevelopment/styledComponents";
// import ReactSlick from "../Slider";
// import WhyUs from '../Whyus'
// import { BannerRight } from "../Customerscrolling";
// import ImageSlider from "../ImageSlider";
// import whyusimage from '../images/whyusimage.png'

// const Details = [

//   {
//     id: 1,
//     question:
//       "Siemens's Polarion for Health Tech customers has helped achieve compliance",
//     answer:
//       "Accelerate medical device innovation and automate proof of compliance.Achieve Proof of Compliance in lesser time.Automate Risk Management and Compliance with help of Siemens Polarion.Quick-Start with Automated Industry Processes.Synchronize Collaboration In Real Time with Siemens Polarion Requirement Management Automate Your Validation and Verification",
//   },

//   {

//     id: 2,

//     question: "Polarion for Automotive & Transportation Industries",

//     answer:

//       "Polarion offers 90% reduced time in bringing the product to market for many OEMs and suppliers in the automotive and transportation industries. Seamless real-time collaboration Built-in support for ReqIF data exchange, and/or through common document formats such as Word/Excel® or PDF® Contextual visibility improves team effectiveness.Comprehensive traceabilityand automated tracking speeds and protects functional safety compliance. Model Driven development with Polarion’s Diagram Editor, plus integration with Sparx Systems Enterprise Architect™ and with MATLAB® Simulink™ Intuitive workflow drives rapid adoption. Enabling automotive industry project templates facilitate functional safety compliance, process assessment, Agile development practices, and other objectives. Comprehensive traceability and automated tracking speeds and protects functional safety compliance. Model Driven development with Polarion’s Diagram Editor, plus integration with Sparx Systems Enterprise Architect™ and with MATLAB® Simulink™ Intuitive workflow drives rapid adoption.",

//   },

//   {

//     id: 3,

//     question: "Polarion for Aerospace",

//     answer:

//       "With Polarion it is possible to reduce time-to-market and improve quality and safety. Polarion provides guaranteed traceability and proof of compliance for systems and software engineering organizations in regulated industries. A unified solution for Requirements-, Quality- and Application Lifecycle Management. recent integrations with MATLAB® Simulink®, Klocwork’s and others show a real deep understanding for the target markets integrating Product Lifecycle Management (PLM) and Application Lifecycle Management (ALM) processes allows us to bridge the gap between mechanical, hardware, electronic and software development, delivering unprecedented efficiencies.",

//   },

//   {

//     id: 4,

//     question: "Polarion for Oil & Gas",

//     answer:

//       "With Polarion it is possible to reduce time-to-market and improve quality and safety. Polarion provides guaranteed traceability and proof of compliance for systems and software engineering organizations in regulated industries. A unified solution for Requirements-, Quality- and Application Lifecycle Management. Seamless real-time collaboration Built-in support for ReqIF data exchange, and/or through common document formats such as Word/Excel® or PDF® Contextual visibility improves team effectiveness.Comprehensive traceability and automated tracking speeds. Powerful reporting engine & Word round trip, ability to export/import requiremets into Polarion achieved awesome milestones to Oil & Gas customer.",

//   },

//   {

//     id: 5,

//     question: "Polarion for Enterprise Agile",

//     answer:

//       "You must comply with regulations like ISO 26262, FDA 21 CFR Part 820 or IEC 62304. You must meet standards like CMMI, SPICE, etc. to achieve transparency in globally distributed environments. You’re required to demonstrate diligence in Corporate Governance for shareholders, regulators, etc. Requirements Management, Engineering and Test Management are key for time-to-market and success. You need to mitigate the risks of product and project failure.",

//   },

// ];


// const ScrolllingImages = [

//     "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Zoox_Motors_qhr2hn.png",

//     "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Taulia_ffxzhx.png",
          
//     "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Tata_Alexis_ptw73z.png",
         
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Siemens_Healthineers_dh3pcl.png",
           
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Record_Linc_w9zxvc.jpg",
       
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689926991/64_BitStore_poolzk.png",
          
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/siemens_s7ucfi.png",
            
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/sedemac_dlcgdk.jpg",
          
    
//               "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/ptc_xxn1tl.png",
            
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Padmini-Vna_ep4pwk.jpg",
//                 "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/CIBT_Visas_cfxkcy.png",
          
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Cognizant_esfsi8.png",
          
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Broadcom_e0g8vx.png",
         
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Alcove_Furniture_feq4qz.png",
        
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Air_BNB_ijkep7.png",


//   ].map((image) => ({

//     id: crypto.randomUUID(),

//     image

//   }));



  
// const ScrolllingImages1 = [
//           "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Nityas_Fashion_a9ly47.png",
          
//         "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Oracle_dmaiik.png",
   
//         "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/napino_obfge2.jpg",
         
//         "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Medtronic_xgouix.png",
         
         
//         "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/HCL_igijlj.png",
       
//       "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/LJB_lladcr.png",
         
//       "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/Hematogenix_frhdaa.png",
               
//       "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/DrR_Logo_wvw2gc.jpg",
       
//       "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/ESPN_Sports_ww7vfh.png",


// ].map((image) => ({

//   id: crypto.randomUUID(),

//   image

// }));




// const ScrolllingImages2 = [

//     "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/Fidelity_investments_y7t61u.png",
          
//       "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927009/Esnaad_gba3ox.png",
        
//     "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Delight_Cabs_aet4l7.png",
        
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Covidien_kbldon.png",
        
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Compliance_Group_x8sgyy.jpg",
      
//   "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/ConvaTec_almrlt.png",
       
//    "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Capgemini-Logo_xe2sql.png",

// ].map((image) => ({

//   id: crypto.randomUUID(),

//   image

// }));


// class HomePage extends Component {
//   render() {
//     return (

//       <div className="homepage-main-contianer container-fluid">
//          {/* <div className="row" style={{ backgroundColor: "#000000", height: "550px" }}>
//               <div className="col-12 col-md-6">
//                   <ReactSlick />
//               </div>
//           <div className="col-12 col-md-6">
//             <ImageSlider />
//           </div>
//           </div> */}

//         <div className="row p-5">

//           <div className="col-12 col-md-7">

//             <h1 className="home-page-heading">About ALM</h1>

//             <h5 className="mb-4">

//               Labyrinth Global Solutions is one of the best Website Development

//               Companies in India. We have a team of professional experts having

//               years of experience in this field. Our specialised team can

//               provide custom web solutions to establish your business online.

//             </h5>

//             <h4>Industry Focus</h4>

//             <div className="d-flex">

//               <ul>

//                 <Li>
//                   <Tick />
//                   Health Tech
//                 </Li>

//                 <Li>

//                   {" "}

//                   <Tick />

//                   Automotive & Transportation

//                 </Li>

//                 <Li>

//                   {" "}

//                   <Tick /> Aerospace

//                 </Li>

//               </ul>

//               <ul>

//                 <Li>

//                   {" "}

//                   <Tick />

//                   Oil & Gas

//                 </Li>

//                 <Li>

//                   {" "}

//                   <Tick />

//                   Enterprise Agile (SAFe)
//                 </Li>
//               </ul>
//             </div>
//             <button className="btn btn-primary">
//               Learn More <ArrowIcon2 />
//             </button>
//           </div>
//           <div className="col-12 col-md-5">
//             <img
//               src="https://www.labyrinthglobalsolutions.com/assets/img/aboutus1.png"
//             //   alt="home-page"
//               width={500}
//               height={500}
//             />
//           </div>
//         </div>

//         <div className="row p-5">

//           <Heading className="text-center">Why Us</Heading>

//           <div className="col-12 col-md-5 mt-3">

//             <img
//               height={500}
//               width={500}
//               src={whyusimage}
//               alt="why-us"
//             />
//           </div>

//           <div className="col-12 col-md-7 mt-3">

//             <ul>
//               {Details.map((eachItem) => (
//                 <WhyUs key={eachItem.id} details={eachItem} />
//               ))}
//             </ul>
//           </div>
//           <h1>Our Clients</h1>
//           <div className="courseBanner">
//                 <BannerRight images={ScrolllingImages} speed={10000} />
//           </div>
//           <div className="courseBanner">
//                 <BannerRight images={ScrolllingImages1} speed={20000} />
//           </div>
//           <div className="courseBanner">
//                 <BannerRight images={ScrolllingImages2} speed={30000} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default HomePage;


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
// import Navbar from "../Navbar";
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
      "Siemens's Polarion for Health Tech customers has helped achieve compliance",
    answer:
      "Accelerate medical device innovation and automate proof of compliance.Achieve Proof of Compliance in lesser time.Automate Risk Management and Compliance with help of Siemens Polarion.Quick-Start with Automated Industry Processes.Synchronize Collaboration In Real Time with Siemens Polarion Requirement Management Automate Your Validation and Verification",
  },
  {
    id: 2,
    question: "Polarion for Automotive & Transportation Industries",
    answer:
      "Polarion offers 90% reduced time in bringing the product to market for many OEMs and suppliers in the automotive and transportation industries. Seamless real-time collaboration Built-in support for ReqIF data exchange, and/or through common document formats such as Word/Excel® or PDF® Contextual visibility improves team effectiveness.Comprehensive traceabilityand automated tracking speeds and protects functional safety compliance. Model Driven development with Polarion’s Diagram Editor, plus integration with Sparx Systems Enterprise Architect™ and with MATLAB® Simulink™ Intuitive workflow drives rapid adoption. Enabling automotive industry project templates facilitate functional safety compliance, process assessment, Agile development practices, and other objectives. Comprehensive traceability and automated tracking speeds and protects functional safety compliance. Model Driven development with Polarion’s Diagram Editor, plus integration with Sparx Systems Enterprise Architect™ and with MATLAB® Simulink™ Intuitive workflow drives rapid adoption.",
  },
  {
    id: 3,
    question: "Polarion for Aerospace",
    answer:
      "With Polarion it is possible to reduce time-to-market and improve quality and safety. Polarion provides guaranteed traceability and proof of compliance for systems and software engineering organizations in regulated industries. A unified solution for Requirements-, Quality- and Application Lifecycle Management. recent integrations with MATLAB® Simulink®, Klocwork’s and others show a real deep understanding for the target markets integrating Product Lifecycle Management (PLM) and Application Lifecycle Management (ALM) processes allows us to bridge the gap between mechanical, hardware, electronic and software development, delivering unprecedented efficiencies.",
  },
  {
    id: 4,
    question: "Polarion for Oil & Gas",
    answer:
      "With Polarion it is possible to reduce time-to-market and improve quality and safety. Polarion provides guaranteed traceability and proof of compliance for systems and software engineering organizations in regulated industries. A unified solution for Requirements-, Quality- and Application Lifecycle Management. Seamless real-time collaboration Built-in support for ReqIF data exchange, and/or through common document formats such as Word/Excel® or PDF® Contextual visibility improves team effectiveness.Comprehensive traceability and automated tracking speeds. Powerful reporting engine & Word round trip, ability to export/import requiremets into Polarion achieved awesome milestones to Oil & Gas customer.",
  },
  {
    id: 5,
    question: "Polarion for Enterprise Agile",
    answer:
      "You must comply with regulations like ISO 26262, FDA 21 CFR Part 820 or IEC 62304. You must meet standards like CMMI, SPICE, etc. to achieve transparency in globally distributed environments. You’re required to demonstrate diligence in Corporate Governance for shareholders, regulators, etc. Requirements Management, Engineering and Test Management are key for time-to-market and success. You need to mitigate the risks of product and project failure.",
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
          // style={{ backgroundColor: "#000000", height: "550px" }}
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
            <button className="btn btn-primary">
              Learn More <BsArrowRightShort className="home-page-arrow" />
            </button>
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