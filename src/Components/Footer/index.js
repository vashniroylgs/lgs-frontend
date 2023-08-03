// import { BiPhoneCall, BiLogoFacebook,BiLogoGmail } from "react-icons/bi";

// import { FaGreaterThan } from "react-icons/fa";

// import {TiSocialLinkedin } from "react-icons/ti";

// import { AiOutlineTwitter } from "react-icons/ai";

// import "./index.css"

// const Footer=()=>(

//     <div className="TotalFooterContainer">

//         <div className="footerContainer">

//             <div className="container">

//                 <div className="row">

//                     <div className="col-3">

//             <div className="footerContent pt-3">

//                 <p>LABYRINTH GLOBAL SOLUTIONS LGS <br/>

//                  has the required experience to help architect,

//                  design, develop and deliver any technical solution

//                   to your organization..</p>

//                   <div className="footerIconsContainer p-2">

//                     <div >

//                         <BiLogoFacebook className="footerIcon bg-secondary" size="30" height="30" color="#0edae8"/>

//                     </div>

//                     <div >

//                         <AiOutlineTwitter  className="footerIcon bg-secondary" size="30" height="30" color="#0edae8"/>

//                     </div>

//                     <div>

//                         <TiSocialLinkedin className="footerIcon bg-secondary" size="30" height="30" color="#0edae8"/>

//                     </div>

//                   </div>

//             </div>

//             </div>

//             <div className="col-3">

//             <div className="footerContact">

//                 <h1 className="footerHeader">Contact info</h1>

//                 <hr className="footerHorizontalLine"/>

//             <ol className="footerContactListClumzi">

//                 <li className="footerContactListItem ListItem1">

//                     <div>

//                     <BiPhoneCall size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2">+91 8919078185</p>

//                 </li>

//                 <li className="footerContactListItem ListItem2">

//                     <div className="footerIcon">

//                     <BiLogoGmail  size="15" color="#0edae8"/>

//                     </div>

//                     <div className="Footerdiv">

//                     <p className="pl-2">info@labyrinthglobalsolutions
//                         <br/>
//                             Address: 16-8-933/3, Government
//                             Printing Press Rd, Officers Colony,
//                             Malakpet, Hyderabad,
//                                 Telangana
//                     </p>
//                     </div>
//                 </li>
//                 </ol>
//             </div>
//             </div>
//             <div className="col-3">
//             <div className="footerUsefullLinks">
//                 <h1 className="footerHeader">Useful Links</h1>
//                 <hr className="footerHorizontalLine"/>
//                 <ol className="footerContactList">
//                 <li className="footerContactListItem ListItem3">
//                     <div className="footerIcon">
//                     <FaGreaterThan size="15" color="#0edae8"/>
//                     </div>
//                     <p className="pl-2 pt-2">Home</p>
//                 </li>
//                 <li className="footerContactListItem ListItem4">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">About Us</p>

//                 </li>

//                 <li className="footerContactListItem ListItem5">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">FAQ</p>

//                 </li>

//                 <li className="footerContactListItem ListItem6">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">Policies</p>

//                 </li>

//                 </ol>

//             </div>

//             </div>

//             <div className="col-3">

//             <div className="footerServices">

//                 <h1 className="footerHeader">Our Services</h1>

//                 <hr className="footerHorizontalLine"/>

//                 <ol className="footerContactList">

//                 <li className="footerContactListItem ListItem7">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">Polarion ALM</p>

//                 </li>

//                 <li className="footerContactListItem ListItem8">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">SAAS & Cloud Solutions</p>

//                 </li>

//                 <li className="footerContactListItem ListItem9">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     <p className="pl-2 pt-2">PTC Integrity</p>

//                 </li>

//                 <li className="footerContactListItem ListItem4">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">Mendix</p>

//                 </li>

//                 <li className="footerContactListItem ListItem4">

//                     <div className="footerIcon">

//                     <FaGreaterThan size="15" color="#0edae8"/>

//                     </div>

//                     <p className="pl-2 pt-2">Web Development</p>

//                 </li>

//                 </ol>

//             </div>

//             </div>

//             </div>

//             </div>

//             </div>

//     </div>

// )
// export default Footer

import { BiPhoneCall, BiLogoFacebook, BiLogoGmail } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div
    className="container-fluid p-4 bottom-fixed"
    style={{ backgroundColor: "#353b66" }}
  >
    <div className="row" style={{ backgroundColor: "#353b66" }}>
      <div className="col-12 col-lg-3 col-md-6 ">
        <div className="footerContent pt-3">
          <p style={{ color: "white" }}>
            LABYRINTH GLOBAL SOLUTIONS LGS <br />
            has the required experience to help architect, design, develop and
            deliver any technical solution to your organization..
          </p>
          <div className="footerIconsContainer p-2">
            <div>
              <BiLogoFacebook
                className="footerIconSocial"
                size="30"
                height="30"
              />
            </div>
            <div>
              <AiOutlineTwitter
                className="footerIconSocial"
                size="30"
                height="30"
              />
            </div>
            <div>
              <a
                rel="linkedin"
                href="https://www.linkedin.com/company/labyrinth-global-solutions/mycompany/"
                target="_blank"
              >
                <TiSocialLinkedin
                  className="footerIconSocial"
                  size="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-3 col-md-6 ">
        <div className="footerContact">
          <h1 className="footerHeader">Contact info</h1>
          <hr className="footerHorizontalLine" />
          <ol className="footerContactListClumzi">
            <li className="footerContactListItem ListItem1">
              <div>
                <BiPhoneCall size="15" color="#0edae8" />
              </div>
              <p className="pl-2" style={{ color: "white" }}>
                +91 8919078185
              </p>
            </li>
            <li className="footerContactListItem ListItem2">
              <div className="footerIcon">
                <BiLogoGmail size="15" color="#0edae8" />
              </div>
              <div className="Footerdiv">
                <p className="pl-2" style={{ color: "white" }}>
                  info@labyrinthglobalsolutions
                  <br />
                  Address: 16-8-933/3, Government Printing Press Rd, Officers
                  Colony, Malakpet, Hyderabad, Telangana
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="col-12 col-lg-3 col-md-6 ">
        <div className="footerUsefullLinks">
          <h1 className="footerHeader">Useful Links</h1>
          <hr className="footerHorizontalLine" />
          <ol className="footerContactList">
            <li className="footerContactListItem ListItem3">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  Home
                </p>
              </Link>
            </li>
            <li className="footerContactListItem ListItem4">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/aboutus" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  About Us
                </p>
              </Link>
            </li>
            <li className="footerContactListItem ListItem5">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/contactus" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  FAQ
                </p>
              </Link>
            </li>
            <li className="footerContactListItem ListItem6">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/contactus" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  Policies
                </p>
              </Link>
            </li>
          </ol>
        </div>
      </div>
      <div className=" col-12 col-lg-3 col-md-6 ">
        <div className="footerServices">
          <h1 className="footerHeader">Our Services</h1>
          <hr className="footerHorizontalLine" />
          <ol className="footerContactList">
            <li className="footerContactListItem ListItem7">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/polarianalm" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  Plarian ALM
                </p>
              </Link>
            </li>
            <li className="footerContactListItem ListItem8">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/saascloudsolutions" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  SAAS & Cloud Solutions
                </p>
              </Link>
            </li>
            <li className="footerContactListItem ListItem9">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/resellermendix" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  Mendix
                </p>
              </Link>
            </li>
            <li className="footerContactListItem ListItem10">
              <div className="footerIcon">
                <FaGreaterThan size="15" color="#0edae8" />
              </div>
              <Link to="/mobileandappdevelopment" className="footer-link">
                <p className="pl-2 pt-2" style={{ color: "white" }}>
                  Web Development
                </p>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
