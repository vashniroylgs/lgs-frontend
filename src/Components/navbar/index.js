// import { BrowserRouter as Router, Link } from "react-router-dom";

// import { GiHamburgerMenu } from "react-icons/gi";

// import { Component } from "react";

// import "./index.css";

// class Header extends Component {
//   state = { showNavItems: false, showmblItems: false };

//   toggleShowNavItems = () => {
//     this.setState((prevState) => ({ showNavItems: !prevState.showNavItems }));
//   };

//   onClickNavItem = () => {
//     this.setState((prevState) => ({ showmblItems: !prevState.showmblItems }));
//   };

//   showMblNavminiItems = () => {
//     const { showmblItems } = this.state;
//     console.log(showmblItems);
//     return (
//       <ul className="mbl-Nav-Service-container-items">
//         <Link to="/polarianalm" className="link">
//           <li className="Headeroption-item">Polarion ALM</li>
//         </Link>
//         <Link to="/saascloudsolutions" className="link">
//           <li className="Headeroption-item">SAAS & cloud Solutions</li>
//         </Link>
//         <Link to="/ptcintegrity" className="link">
//           <li className="Headeroption-item">PTC Integrity</li>
//         </Link>
//         <Link to="/mobileandappdevelopment" className="link">
//           <li className="Headeroption-item">Mobile & APP Development</li>
//         </Link>
//         <Link to="/resellermendix" className="link">
//           <li className="Headeroption-item">Mendix</li>
//         </Link>
//         <Link to="/salesforcepage" className="link">
//           <li className="Headeroption-item">Sales Force</li>
//         </Link>
//       </ul>
//     );
//   };

//   renderNavItems = () => {
//     const { showNavItems } = this.state;
//     return (
//       <div className="mbl-nav-items-container">
//         <ul className="mbl-nav-menu">
//           <Link to="/" className="nav-link">
//             <li className="nav-mbl-menu-item">HOME</li>
//           </Link>
//           <li className="nav-mbl-service-container nav-mbl-menu-item">
//             PRODUCTS
//             <ul className="mbl-Nav-Service-container-items">
//               <Link to="/contactus" className="link">
//                 <li className="Headeroption-item">Quanta Genius</li>
//               </Link>
//               <Link to="/contactus" className="link">
//                 <li className="Headeroption-item">Taxoguru Consulting</li>
//               </Link>
//               <Link to="/contactus" className="link">
//                 <li className="Headeroption-item">Glorious Mindmine</li>
//               </Link>
//               <Link to="/contactus" className="link">
//                 <li className="Headeroption-item">LGS Fresh</li>
//               </Link>
//               <Link to="/contactus" className="link">
//                 <li className="Headeroption-item">Digival</li>
//               </Link>
//               <Link to="/contactus" className="link">
//                 <li className="Headeroption-item">SRM 360 degree Consulting</li>
//               </Link>
//             </ul>
//           </li>

//           <Link className="nav-link">
//             <li className="nav-mbl-service-container nav-mbl-menu-item">
//               TECHNOLOGIES
//               <ul className="mbl-Nav-Service-container-items technology-overflow">
//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     UI DESIGN
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">HTML/HTML5, CSS3</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">ANGULARJS, JS</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">AJAX/JSON</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">JQUERY, JQUERY UI</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">DRUPAL</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">JOOMLA</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">WORDPRESS</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">REACT</li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     CLOUD COMPUTING
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">AWS DEVELOPMENT</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">GOOGLE CLOUD</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">GO DADDY</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">REACT</li>
//                     </Link>
//                   </ul>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">TESTING</h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">SOFTWARE TESTING</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">UNIT TESTING</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">INTEGRATION TESTING</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">SYSTEM TESTING</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">
//                         DEPLOYMENT AUTOMATION SUPPORT
//                       </li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     SERVER SIDE SCRIPTING
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">PHP</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">
//                         J2EE, J2SE, SWING, SERVLET
//                       </li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">
//                         SPRING, STRUTS, HIBERNATE
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">JSP, JSF, APACHECXF</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">
//                         JUNIT, TESTING, MOCKITO
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">
//                         MICROSOFT VISIO, ENTERPRISE ARCHITECT
//                       </li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">SHELL</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">PERL</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">PYTHON</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">NODE JS</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">EXPRESS JS</li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     DATA MINING & ANALYTICS
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">
//                         DATA BASE DESIGN: ORACLE
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">SQL DATABASE</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">
//                         DATABASE DEVELOPMENT MONGO DBE
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">
//                         DATABASE CONSULTING SQL SERVER
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">
//                         DATABASE CONSULTING SQL SERVER
//                       </li>
//                     </Link>
//                   </ul>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     WEB SERVER TECHNOLOGY
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">JBOSS</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">APACHE</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="mbl-product-items">TOMCAT</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="mbl-product-items">IIS</li>
//                     </Link>
//                   </ul>
//                 </div>

//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     LOW CODE PLATFORM
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="/resellermendix" className="link">
//                       <li className="mbl-product-items">MENDIX</li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     APPLICATION LIFECYCLE MANAGEMENT TOOL
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="/polarianalm" className="link">
//                       <li className="mbl-product-items">POLARION</li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div>
//                   <h6 className="Nav-Mbl-teachnology-main-heading">
//                     CRM SOFTWARE
//                   </h6>
//                   <ul className="Nav-Mbl-technology-sub-container-items">
//                     <Link to="/salesforcepage" className="link">
//                       <li className="mbl-product-items">SALESFORCE</li>
//                     </Link>
//                   </ul>
//                 </div>
//               </ul>
//             </li>
//           </Link>
//           <Link className="nav-link">
//             <li className="nav-mbl-service-container nav-mbl-menu-item">
//               SERVICES
//               <ul className="mbl-Nav-Service-container-items technology-overflow">
//                 <div className="nav-service-flex-contianer-items">
//                   <h6 className="Nav-teachnology-main-heading">
//                     ONLINE MARKETING
//                   </h6>
//                   <ul className="Nav-technology-sub-container-items">
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">SEO SERVICES</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">
//                         SEARCH ENGINE MARKETING
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">
//                         LEAD MANAGEMENT SYSTEM
//                       </li>
//                     </Link>
//                     <Link to="/digitalmarketing" className="link">
//                       <li className="Nav-technology-item">DIGITAL MARKETING</li>
//                     </Link>
//                   </ul>
//                   <h6 className="Nav-teachnology-main-heading">
//                     CREATIVE DESIGN
//                   </h6>
//                   <ul className="Nav-technology-sub-container-items">
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">UI/UX DESIGN</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">LOGO DESIGN</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">BROCHURE DESIGN</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">IIS</li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div className="nav-service-flex-contianer-items">
//                   <h6 className="Nav-teachnology-main-heading">CONSULTANT</h6>
//                   <ul className="Nav-technology-sub-container-items">
//                     <Link to="/resellermendix" className="link">
//                       <li className="Nav-technology-item">
//                         MENDIX SOLUTION CONSULTANT
//                       </li>
//                     </Link>
//                     <Link to="/polarianalm" className="link">
//                       <li className="Nav-technology-item">
//                         POLARION SOLUTION CONSULTANT
//                       </li>
//                     </Link>
//                     <Link to="/salesforcepage" className="link">
//                       <li className="Nav-technology-item">
//                         SALESFORCE SOLUTION CONSULTANT
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">
//                         CONVENTIONAL DEVELOPMENT CONSULTANT
//                       </li>
//                     </Link>
//                   </ul>
//                   <h6 className="Nav-teachnology-main-heading">TESTING</h6>
//                   <ul className="Nav-technology-sub-container-items">
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">SOFTWARE TESTING</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">UNIT TESTING</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">
//                         INTEGRATION TESTING
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">SYSTEM TESTING</li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">
//                         DEPLOYMENT AUTOMATION SUPPORT
//                       </li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div className="nav-service-flex-contianer-items">
//                   <h6 className="Nav-teachnology-main-heading">
//                     WEB DESIGN & DEVELOPMENT
//                   </h6>
//                   <ul className="Nav-technology-sub-container-items">
//                     <Link to="/mobileandappdevelopment" className="link">
//                       <li className="Nav-technology-item">WEBSITE DESIGN</li>
//                     </Link>
//                     <Link to="/mobileandappdevelopment" className="link">
//                       <li className="Nav-technology-item">
//                         WEBSITE DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="/salesforcepage" className="link">
//                       <li className="Nav-technology-item">
//                         CRM SOFTWARE DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">
//                         EDUCATIONAL WEB PORTAL DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">
//                         RESTAURANT WEB PORTAL DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">
//                         E-COMMERCE WEBSITE DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">
//                         HEALTHCARE PORTAL DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">
//                         REAL ESTATE PORTAL DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Nav-technology-item">
//                         LEARNING MANAGEMENT SYSTEM DEVELOPMENT
//                       </li>
//                     </Link>
//                     <Link to="" className="link">
//                       <li className="Nav-technology-item">
//                         TAXATION PORTAL DEVELOPMENT
//                       </li>
//                     </Link>
//                   </ul>
//                 </div>
//                 <div className="Mobile-application-flex">
//                   <div className="nav-service-flex-contianer-items">
//                     <h6 className="Nav-teachnology-main-heading">
//                       MOBILE APPLICATION
//                     </h6>
//                     <ul className="Nav-technology-sub-container-items">
//                       <Link to="/mobileandappdevelopment" className="link">
//                         <li className="Nav-technology-item">
//                           MOBILE APP DEVELOPMENT
//                         </li>
//                       </Link>
//                       <Link to="" className="link">
//                         <li className="Nav-technology-item">
//                           WINDOWS APP DEVELOPMENT
//                         </li>
//                       </Link>
//                       <Link to="" className="link">
//                         <li className="Nav-technology-item">
//                           XAMARIN APP DEVELOPMENT
//                         </li>
//                       </Link>
//                       <Link to="/contactus" className="link">
//                         <li className="Nav-technology-item">
//                           HYBRID APP DEVELOPMENT{" "}
//                         </li>
//                       </Link>
//                       <Link to="" className="link">
//                         <li className="Nav-technology-item">
//                           NATIVE APP DEVELOPMENT{" "}
//                         </li>
//                       </Link>
//                     </ul>
//                   </div>
//                   <div className="">
//                     <div>
//                       <h6 className="Nav-teachnology-main-heading">
//                         LOW CODE PLATFORM
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/resellermendix" className="link">
//                           <li className="Nav-technology-item">MENDIX</li>
//                         </Link>
//                       </ul>
//                     </div>
//                     <div>
//                       <h6 className="Nav-teachnology-main-heading">ALM TOOL</h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/polarianalm" className="link">
//                           <li className="Nav-technology-item">POLARION</li>
//                         </Link>
//                       </ul>
//                     </div>
//                     <div>
//                       <h6 className="Nav-teachnology-main-heading">
//                         CRM SOFTWARE
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/salesforcepage" className="link">
//                           <li className="Nav-technology-item">SALESFORCE</li>
//                         </Link>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </ul>
//             </li>
//           </Link>
//           <Link to="/careers" className="nav-link">
//             <li className="nav-mbl-menu-item">CAREERS</li>
//           </Link>
//           <Link to="/resellerpolarian" className="nav-link">
//             <li className="nav-mbl-menu-item">RESELLER</li>
//           </Link>
//           <Link to="/aboutus" className="nav-link">
//             <li className="nav-mbl-menu-item">ABOUT US</li>
//           </Link>

//           <Link to="/contactus" className="nav-link">
//             <li className="nav-mbl-menu-item">CONTACT US</li>
//           </Link>
//         </ul>
//       </div>
//     );
//   };

//   render() {
//     const { showNavItems } = this.state;
//     return (
//       <>
//         <nav className="nav-header">
//           <div className="nav-content">
//             <div className="nav-bar-mobile-logo-container">
//               <Link to="/" className="nav-link">
//                 <img
//                   alt="website logo"
//                   className="nav-mobile-logo"
//                   src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
//                 />
//               </Link>
//               <button
//                 type="button"
//                 onClick={this.toggleShowNavItems}
//                 className="nav-mobile-btn"
//               >
//                 <GiHamburgerMenu className="nav-mobile-menu-icon" />
//               </button>
//             </div>
//             <div className="nav-bar-large-container">
//               <Link to="/" className="nav-link">
//                 <img
//                   className="nav-website-logo"
//                   src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
//                   alt="website logo"
//                 />
//               </Link>
//               <ul className="nav-menu">
//                 <Link to="/" className="nav-link">
//                   <li className="Nav-Service-container nav-menu-item home-padding">
//                     HOME
//                   </li>
//                 </Link>
//                 <li className="Nav-Service-container nav-menu-item technology-item">
//                   PRODUCTS
//                   <ul className="Nav-Service-container-items">
//                     <Link to="/contactus" className="link">
//                       <li className="Headeroption-item">Quanta Genius</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Headeroption-item">Taxoguru Consulting</li>
//                     </Link>
//                     {/* <Link to="/ptcintegrity" className="link">
//                         <li className="Headeroption-item">PTC Integrity</li>
//                     </Link> */}
//                     <Link to="/contactus" className="link">
//                       <li className="Headeroption-item">Glorious Mindmine</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Headeroption-item">LGS Fresh</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Headeroption-item">Digival</li>
//                     </Link>
//                     <Link to="/contactus" className="link">
//                       <li className="Headeroption-item">
//                         SRM 360 degree Consulting
//                       </li>
//                     </Link>
//                   </ul>
//                 </li>
//                 <Link to="/clientsPage" className="nav-link">
//                   <li className="Nav-Service-container nav-menu-item technology-item">
//                     CLIENTS
//                   </li>
//                 </Link>

//                 <li className="Nav-Service-container nav-menu-item technology-item">
//                   SERVICES
//                   <ul className="Nav-Service-container-items nav-service-flex-contianer ">
//                     <div className="nav-service-flex-contianer-items">
//                       <h6 className="Nav-teachnology-main-heading">
//                         ONLINE MARKETING
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">SEO SERVICES</li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">
//                             SEARCH ENGINE MARKETING
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             LEAD MANAGEMENT SYSTEM
//                           </li>
//                         </Link>
//                         <Link to="/digitalmarketing" className="link">
//                           <li className="Nav-technology-item">
//                             DIGITAL MARKETING
//                           </li>
//                         </Link>
//                       </ul>
//                       <h6 className="Nav-teachnology-main-heading">
//                         CREATIVE DESIGN
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">UI/UX DESIGN</li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">LOGO DESIGN</li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             BROCHURE DESIGN
//                           </li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">IIS</li>
//                         </Link>
//                       </ul>
//                       <h6 className="Nav-teachnology-main-heading">
//                         SAAS & CLOUD
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/saascloudsolutions" className="link">
//                           <li className="Nav-technology-item">
//                             SAAS & CLOUD SOLUTIONS
//                           </li>
//                         </Link>
//                       </ul>
//                     </div>
//                     <div className="nav-service-flex-contianer-items">
//                       <h6 className="Nav-teachnology-main-heading">
//                         CONSULTANT
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             MENDIX SOLUTION CONSULTANT
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             POLARION SOLUTION CONSULTANT
//                           </li>
//                         </Link>
//                         <Link to="/salesforce" className="link">
//                           <li className="Nav-technology-item">
//                             SALESFORCE SOLUTION CONSULTANT
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             CONVENTIONAL DEVELOPMENT CONSULTANT
//                           </li>
//                         </Link>
//                       </ul>
//                       <h6 className="Nav-teachnology-main-heading">TESTING</h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             SOFTWARE TESTING
//                           </li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">UNIT TESTING</li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             INTEGRATION TESTING
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             SYSTEM TESTING
//                           </li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">
//                             DEPLOYMENT AUTOMATION SUPPORT
//                           </li>
//                         </Link>
//                       </ul>
//                     </div>
//                     <div className="nav-service-flex-contianer-items">
//                       <h6 className="Nav-teachnology-main-heading">
//                         WEB DESIGN & DEVELOPMENT
//                       </h6>
//                       <ul className="Nav-technology-sub-container-items">
//                         <Link to="/mobileandappdevelopment" className="link">
//                           <li className="Nav-technology-item">
//                             WEBSITE DESIGN
//                           </li>
//                         </Link>
//                         <Link to="/mobileandappdevelopment" className="link">
//                           <li className="Nav-technology-item">
//                             WEBSITE DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="/salesforcepage" className="link">
//                           <li className="Nav-technology-item">
//                             CRM SOFTWARE DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             EDUCATIONAL WEB PORTAL DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">
//                             RESTAURANT WEB PORTAL DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             E-COMMERCE WEBSITE DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             HEALTHCARE PORTAL DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">
//                             REAL ESTATE PORTAL DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="/contactus" className="link">
//                           <li className="Nav-technology-item">
//                             LEARNING MANAGEMENT SYSTEM DEVELOPMENT
//                           </li>
//                         </Link>
//                         <Link to="" className="link">
//                           <li className="Nav-technology-item">
//                             TAXATION PORTAL DEVELOPMENT
//                           </li>
//                         </Link>
//                       </ul>
//                     </div>
//                     <div className="Mobile-application-flex">
//                       <div className="nav-service-flex-contianer-items">
//                         <h6 className="Nav-teachnology-main-heading">
//                           MOBILE APPLICATION
//                         </h6>
//                         <ul className="Nav-technology-sub-container-items">
//                           <Link to="/mobileandappdevelopment" className="link">
//                             <li className="Nav-technology-item">
//                               MOBILE APP DEVELOPMENT
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               WINDOWS APP DEVELOPMENT
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               XAMARIN APP DEVELOPMENT
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               HYBRID APP DEVELOPMENT{" "}
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               NATIVE APP DEVELOPMENT{" "}
//                             </li>
//                           </Link>
//                         </ul>
//                       </div>
//                       <div className="">
//                         <div>
//                           <h6 className="Nav-teachnology-main-heading">
//                             LOW CODE PLATFORM
//                           </h6>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="/resellermendix" className="link">
//                               <li className="Nav-technology-item">MENDIX</li>
//                             </Link>
//                           </ul>
//                         </div>
//                         <div>
//                           <h6 className="Nav-teachnology-main-heading">
//                             ALM TOOL
//                           </h6>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="/polarianalm" className="link">
//                               <li className="Nav-technology-item">POLARION</li>
//                             </Link>
//                           </ul>
//                         </div>
//                         <div>
//                           <h6 className="Nav-teachnology-main-heading">
//                             CRM SOFTWARE
//                           </h6>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="/salesforcepage" className="link">
//                               <li className="Nav-technology-item">
//                                 SALESFORCE
//                               </li>
//                             </Link>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="">
//                         <div></div>
//                       </div>
//                     </div>
//                   </ul>
//                 </li>
//                 <Link to="/" className="nav-link">
//                   <li className="Nav-teachnology-container nav-menu-item technology-item">
//                     TECHNOLOGIES
//                     <ul className="Nav-teachnology-container-items">
//                       <div>
//                         <h6 className="Nav-teachnology-main-heading">
//                           UI DESIGN
//                         </h6>
//                         <ul className="Nav-technology-sub-container-items">
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               HTML/HTML5, CSS3
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               ANGULARJS, JS
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">AJAX/JSON</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               JQUERY, JQUERY UI
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">DRUPAL</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">JOOMLA</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">WORDPRESS</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">REACT</li>
//                           </Link>
//                         </ul>
//                       </div>
//                       <div>
//                         <h6 className="Nav-teachnology-main-heading">
//                           CLOUD COMPUTING
//                         </h6>
//                         <ul className="Nav-technology-sub-container-items">
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               AWS DEVELOPMENT
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               GOOGLE CLOUD
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">GO DADDY</li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">REACT</li>
//                           </Link>
//                         </ul>
//                         <h6 className="Nav-teachnology-main-heading">
//                           TESTING
//                         </h6>
//                         <ul className="Nav-technology-sub-container-items">
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               SOFTWARE TESTING
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               UNIT TESTING
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               INTEGRATION TESTING
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               SYSTEM TESTING
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               DEPLOYMENT AUTOMATION SUPPORT
//                             </li>
//                           </Link>
//                         </ul>
//                       </div>
//                       <div>
//                         <h6 className="Nav-teachnology-main-heading">
//                           SERVER SIDE SCRIPTING
//                         </h6>
//                         <ul className="Nav-technology-sub-container-items">
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">PHP</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               J2EE, J2SE, SWING, SERVLET
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               SPRING, STRUTS, HIBERNATE
//                             </li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">
//                               JSP, JSF, APACHECXF
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               JUNIT, TESTING, MOCKITO
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">
//                               MICROSOFT VISIO, ENTERPRISE ARCHITECT
//                             </li>
//                           </Link>
//                           <Link to="" className="link">
//                             <li className="Nav-technology-item">SHELL</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">PERL</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">PYTHON</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">NODE JS</li>
//                           </Link>
//                           <Link to="/contactus" className="link">
//                             <li className="Nav-technology-item">EXPRESS JS</li>
//                           </Link>
//                         </ul>
//                       </div>
//                       <div className="data-mining-flex">
//                         <div>
//                           <h6 className="Nav-teachnology-main-heading">
//                             DATA MINING & ANALYTICS
//                           </h6>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                               <li className="Nav-technology-item">
//                                 DATA BASE DESIGN: ORACLE
//                               </li>
//                             </Link>
//                             <Link to="/contactus" className="link">
//                               <li className="Nav-technology-item">
//                                 SQL DATABASE
//                               </li>
//                             </Link>
//                             <Link to="/contactus" className="link">
//                               <li className="Nav-technology-item">
//                                 DATABASE DEVELOPMENT MONGO DBE
//                               </li>
//                             </Link>
//                             <Link to="" className="link">
//                               <li className="Nav-technology-item">
//                                 DATABASE CONSULTING SQL SERVER
//                               </li>
//                             </Link>
//                             <Link to="/contactus" className="link">
//                               <li className="Nav-technology-item">
//                                 DATABASE CONSULTING SQL SERVER
//                               </li>
//                             </Link>
//                           </ul>
//                         </div>
//                         <div>
//                           <div>
//                             <h6 className="Nav-teachnology-main-heading">
//                               LOW CODE PLATFORM
//                             </h6>
//                             <ul className="Nav-technology-sub-container-items">
//                               <Link to="/resellermendix" className="link">
//                                 <li className="Nav-technology-item">MENDIX</li>
//                               </Link>
//                             </ul>
//                           </div>
//                           <div>
//                             <h6 className="Nav-teachnology-main-heading">
//                               ALM TOOL
//                             </h6>
//                             <ul className="Nav-technology-sub-container-items">
//                               <Link to="/polarianalm" className="link">
//                                 <li className="Nav-technology-item">
//                                   POLARION
//                                 </li>
//                               </Link>
//                             </ul>
//                           </div>
//                           <div>
//                             <h6 className="Nav-teachnology-main-heading">
//                               CRM SOFTWARE
//                             </h6>
//                             <ul className="Nav-technology-sub-container-items">
//                               <Link to="/salesforcepage" className="link">
//                                 <li className="Nav-technology-item">
//                                   SALESFORCE
//                                 </li>
//                               </Link>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       {/*<div className="Nav-technology-low-code-container">
//                         <div>
//                             <h6 className="Nav-teachnology-main-heading">LOW CODE PLATFORM</h6>
//                             <ul className="Nav-technology-sub-container-items">
//                                 <Link to="" className="link">
//                                         <li className="Nav-technology-item">MENDIX</li>
//                                 </Link>
//                             </ul>
//                             </div>
//                             <div>
//                             <h6 className="Nav-teachnology-main-heading">APPLICATION LIFECYCLE MANAGEMENT TOOL</h6>
//                             <ul className="Nav-technology-sub-container-items">
//                                 <Link to="" className="link">
//                                         <li className="Nav-technology-item">POLARION</li>
//                                 </Link>
//                             </ul>
//                             </div>
//                             <div>
//                             <h6 className="Nav-teachnology-main-heading">CRM SOFTWARE</h6>
//                             <ul className="Nav-technology-sub-container-items">
//                                 <Link to="" className="link">
//                                         <li className="Nav-technology-item">SALESFORCE</li>
//                                 </Link>
//                             </ul>
//                         </div>
//                         </div>*/}
//                     </ul>
//                   </li>
//                 </Link>
//                 <Link to="/careers" className="nav-link">
//                   <li className="nav-menu-item career-padding">CAREERS</li>
//                 </Link>
//                 <li className="Nav-Reseller-container nav-menu-item career-padding technology-item">
//                   RESELLER
//                   <ul className="Nav-Reseller-container-items">
//                     <Link to="/resellerpolarian" className="nav-link">
//                       <li className="nav-reseller-polarion-text">Polarion</li>
//                     </Link>
//                     <Link to="/resellermendix" className="nav-link">
//                       <li className="nav-reseller-mendix-text">Mendix</li>
//                     </Link>
//                   </ul>
//                 </li>
//                 <Link to="/aboutus" className="nav-link">
//                   <li className="nav-menu-item about-us-nav about-padding">
//                     ABOUT US
//                   </li>
//                 </Link>
//                 <Link to="/contactus" className="nav-link">
//                   <li className="nav-menu-item about-us-nav about-padding">
//                     CONTACT US
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//           {showNavItems && this.renderNavItems()}
//         </nav>
//       </>
//     );
//   }
// }

// export default Header;

import { BrowserRouter as Router, Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { Component } from "react";

import "./index.css";

class Header extends Component {
  state = { showNavItems: false, showmblItems: false };

  toggleShowNavItems = () => {
    this.setState((prevState) => ({ showNavItems: !prevState.showNavItems }));
  };

  onClickNavItem = () => {
    this.setState((prevState) => ({ showmblItems: !prevState.showmblItems }));
  };

  // showMblNavminiItems = () => {
  //   const { showmblItems } = this.state;
  //   console.log(showmblItems);
  //   return (
  //     <ul className="mbl-Nav-Service-container-items">
  //         <li className="Headeroption-item">
  //         <Link to="/polarianalm" className="link">Polarion ALM
  //         </Link>
  //         </li>

  //       <Link to="/saascloudsolutions" className="link">
  //         <li className="Headeroption-item">SAAS & cloud Solutions</li>
  //       </Link>
  //       <Link to="/ptcintegrity" className="link">
  //         <li className="Headeroption-item">PTC Integrity</li>
  //       </Link>
  //       <Link to="/mobileandappdevelopment" className="link">
  //         <li className="Headeroption-item">Mobile & APP Development</li>
  //       </Link>
  //       <Link to="/resellermendix" className="link">
  //         <li className="Headeroption-item">Mendix</li>
  //       </Link>
  //       <Link to="/salesforcepage" className="link">
  //         <li className="Headeroption-item">Sales Force</li>
  //       </Link>
  //     </ul>
  //   );
  // };

  renderNavItems = () => {
    const { showNavItems } = this.state;
    return (
      <div className="mbl-nav-items-container">
        <ul className="mbl-nav-menu">
          <li className="nav-mbl-menu-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-mbl-menu-item"><Link to="/clientsPage" className="nav-link">CLIENTS</Link></li>

          <li className="nav-mbl-service-container nav-mbl-menu-item">
            PRODUCTS
            <ul className="mbl-Nav-Service-container-items">
              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Quanta Genius
                </Link>
              </li>
              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Taxoguru Consulting
                </Link>
              </li>

              <li className="Headeroption-item">
                {" "}
                <Link to="/contactus" className="link">
                  Glorious Mindmine
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  LGS Fresh
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Digival
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  SRM 360 degree Consulting
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-mbl-service-container nav-mbl-menu-item">
            TECHNOLOGIES
            <ul className="mbl-Nav-Service-container-items technology-overflow">
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">UI DESIGN</h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      HTML/HTML5, CSS3
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      ANGULARJS, JS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      AJAX/JSON
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      JQUERY, JQUERY UI
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      DRUPAL
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      JOOMLA
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      WORDPRESS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      REACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  CLOUD COMPUTING
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      AWS DEVELOPMENT
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      GOOGLE CLOUD
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      GO DADDY
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      REACT
                    </Link>
                  </li>
                </ul>
                <h6 className="Nav-Mbl-teachnology-main-heading">TESTING</h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SOFTWARE TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      UNIT TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      INTEGRATION TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SYSTEM TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      DEPLOYMENT AUTOMATION SUPPORT
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  SERVER SIDE SCRIPTING
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      PHP
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      J2EE, J2SE, SWING, SERVLET
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SPRING, STRUTS, HIBERNATE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      JSP, JSF, APACHECXF
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      JUNIT, TESTING, MOCKITO
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      MICROSOFT VISIO, ENTERPRISE ARCHITECT
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SHELL
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      PERL
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      PYTHON
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      NODE JS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      EXPRESS JS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  DATA MINING & ANALYTICS
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      DATA BASE DESIGN: ORACLE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      SQL DATABASE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      DATABASE DEVELOPMENT MONGO DBE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      DATABASE CONSULTING SQL SERVER
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      DATABASE CONSULTING SQL SERVER
                    </Link>
                  </li>
                </ul>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  WEB SERVER TECHNOLOGY
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      JBOSS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      APACHE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      TOMCAT
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      IIS
                    </Link>
                  </li>
                </ul>
              </div>

                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    LOW CODE PLATFORM
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    
                      <li className="mbl-product-items"><Link to="/resellermendix" className="link">MENDIX</Link></li>
                    
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    APPLICATION LIFECYCLE MANAGEMENT TOOL
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    
                      <li className="mbl-product-items"><Link to="/polarianalm" className="link">POLARION</Link></li>
                    
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    CRM SOFTWARE
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    
                      <li className="mbl-product-items"><Link to="/salesforcepage" className="link">SALESFORCE</Link></li>
                    
                  </ul>
                </div>
              </ul>
            </li>
         
            <li className="nav-mbl-service-container nav-mbl-menu-item">
              SERVICES
              <ul className="mbl-Nav-Service-container-items technology-overflow">
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">
                    ONLINE MARKETING
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    
                      <li className="Nav-technology-item"><Link to="/contactus" className="link">SEO SERVICES</Link></li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="" className="link">
                        SEARCH ENGINE MARKETING
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        LEAD MANAGEMENT SYSTEM
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item"><Link to="/digitalmarketing" className="link">DIGITAL MARKETING</Link></li>
                    
                  </ul>
                  <h6 className="Nav-teachnology-main-heading">
                    CREATIVE DESIGN
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    
                      <li className="Nav-technology-item"><Link to="/contactus" className="link">UI/UX DESIGN</Link></li>
                    
                    
                      <li className="Nav-technology-item"><Link to="/contactus" className="link">LOGO DESIGN</Link></li>
                    
                    
                      <li className="Nav-technology-item"><Link to="" className="link">BROCHURE DESIGN</Link></li>
                    
                    
                      <li className="Nav-technology-item"><Link to="/contactus" className="link">IIS</Link></li>
                    
                  </ul>
                </div>
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">CONSULTANT</h6>
                  <ul className="Nav-technology-sub-container-items">
                    
                      <li className="Nav-technology-item">
                      <Link to="/resellermendix" className="link">
                        MENDIX SOLUTION CONSULTANT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/polarianalm" className="link">
                        POLARION SOLUTION CONSULTANT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/salesforcepage" className="link">
                        SALESFORCE SOLUTION CONSULTANT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        CONVENTIONAL DEVELOPMENT CONSULTANT
                        </Link>
                      </li>
                    
                  </ul>
                  <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                  <ul className="Nav-technology-sub-container-items">
                   
                      <li className="Nav-technology-item"> <Link to="" className="link">SOFTWARE TESTING</Link></li>
                    
                    
                      <li className="Nav-technology-item"><Link to="/contactus" className="link">UNIT TESTING </Link></li>
                   
                    
                      <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        INTEGRATION TESTING
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item"><Link to="/contactus" className="link">SYSTEM TESTING</Link></li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="" className="link">
                        DEPLOYMENT AUTOMATION SUPPORT
                        </Link>
                      </li>
                    
                  </ul>
                </div>
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">
                    WEB DESIGN & DEVELOPMENT
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    
                      <li className="Nav-technology-item"><Link to="/mobileandappdevelopment" className="link">WEBSITE DESIGN</Link></li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/mobileandappdevelopment" className="link">
                        WEBSITE DEVELOPMENT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/salesforcepage" className="link">
                        CRM SOFTWARE DEVELOPMENT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="" className="link">
                        EDUCATIONAL WEB PORTAL DEVELOPMENT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        RESTAURANT WEB PORTAL DEVELOPMENT
                        </Link>
                      </li>
                    
                   
                      <li className="Nav-technology-item">
                      <Link to="" className="link">
                        E-COMMERCE WEBSITE DEVELOPMENT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        HEALTHCARE PORTAL DEVELOPMENT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="" className="link">
                        REAL ESTATE PORTAL DEVELOPMENT
                        </Link>
                      </li>
                    
                   
                      <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        LEARNING MANAGEMENT SYSTEM DEVELOPMENT
                        </Link>
                      </li>
                    
                    
                      <li className="Nav-technology-item">
                      <Link to="" className="link">
                        TAXATION PORTAL DEVELOPMENT
                        </Link>
                      </li>
                    
                  </ul>
                </div>
                <div className="Mobile-application-flex">
                  <div className="nav-service-flex-contianer-items">
                    <h6 className="Nav-teachnology-main-heading">
                      MOBILE APPLICATION
                    </h6>
                    <ul className="Nav-technology-sub-container-items">
                      
                        <li className="Nav-technology-item">
                        <Link to="/mobileandappdevelopment" className="link">
                          MOBILE APP DEVELOPMENT
                          </Link>
                        </li>
                      
                     
                        <li className="Nav-technology-item">
                        <Link to="" className="link">
                          WINDOWS APP DEVELOPMENT
                          </Link>
                        </li>
                      
                      
                        <li className="Nav-technology-item">
                        <Link to="" className="link">
                          XAMARIN APP DEVELOPMENT
                          </Link>
                        </li>
                      
                      
                        <li className="Nav-technology-item">
                        <Link to="/contactus" className="link">
                          HYBRID APP DEVELOPMENT{" "}
                          </Link>
                        </li>
                      
                      
                        <li className="Nav-technology-item">
                        <Link to="" className="link">
                          NATIVE APP DEVELOPMENT{" "}
                          </Link>
                        </li>
                      
                    </ul>
                  </div>
                  <div className="">
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        LOW CODE PLATFORM
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        
                          <li className="Nav-technology-item"><Link to="/resellermendix" className="link">MENDIX </Link></li>
                       
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">ALM TOOL</h6>
                      <ul className="Nav-technology-sub-container-items">
                        
                          <li className="Nav-technology-item"><Link to="/polarianalm" className="link">POLARION</Link></li>
                        
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        CRM SOFTWARE
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        
                          <li className="Nav-technology-item"><Link to="/salesforcepage" className="link">SALESFORCE</Link></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          
            <li className="nav-mbl-menu-item"><Link to="/careers" className="nav-link">CAREERS</Link></li>
          
            <li className="nav-mbl-service-container nav-mbl-menu-item">
            RESELLER
            <ul className="mbl-Nav-Service-container-items">
              <li className="Headeroption-item">
                <Link to="/resellermendix" className="link">
                  MENDIX
                </Link>
              </li>
              <li className="Headeroption-item">
                <Link to="/resellerpolarian" className="link">
                  POLARION
                </Link>
              </li>
            </ul>
          </li>
            <li className="nav-mbl-menu-item"><Link to="/aboutus" className="nav-link">ABOUT US</Link></li>
          
            <li className="nav-mbl-menu-item"><Link to="/contactus" className="nav-link">CONTACT US</Link></li>
          
        </ul>
      </div>
    );
  };

  render() {
    const { showNavItems } = this.state;
    return (
      <>
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/" className="nav-link">
                <img
                  alt="website logo"
                  className="nav-mobile-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
                />
              </Link>
              <button
                type="button"
                onClick={this.toggleShowNavItems}
                className="nav-mobile-btn"
              >
                <GiHamburgerMenu className="nav-mobile-menu-icon" />
              </button>
            </div>
            <div className="nav-bar-large-container">
              <Link to="/" className="nav-link">
                <img
                  className="nav-website-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
                  alt="website logo"
                />
              </Link>
              <ul className="nav-menu">
                <li className="Nav-Service-container nav-menu-item home-padding">
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="Nav-Service-container nav-menu-item technology-item">
                  PRODUCTS
                  <ul className="Nav-Service-container-items">
                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Quanta Genius
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Taxoguru Consulting
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Glorious Mindmine
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        LGS Fresh
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Digival
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        SRM 360 degree Consulting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  <Link to="/clientsPage" className="nav-link">
                    CLIENTS
                  </Link>
                </li>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  SERVICES
                  <ul className="Nav-Service-container-items nav-service-flex-contianer ">
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        ONLINE MARKETING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SEO SERVICES
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            SEARCH ENGINE MARKETING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            LEAD MANAGEMENT SYSTEM
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/digitalmarketing" className="link">
                            DIGITAL MARKETING
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">
                        CREATIVE DESIGN
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            UI/UX DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            LOGO DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            BROCHURE DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            IIS
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">
                        SAAS & CLOUD
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/saascloudsolutions" className="link">
                            SAAS & CLOUD SOLUTIONS
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        CONSULTANT
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            MENDIX SOLUTION CONSULTANT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            POLARION SOLUTION CONSULTANT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/salesforce" className="link">
                            SALESFORCE SOLUTION CONSULTANT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            CONVENTIONAL DEVELOPMENT CONSULTANT
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SOFTWARE TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            UNIT TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            INTEGRATION TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SYSTEM TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            DEPLOYMENT AUTOMATION SUPPORT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        WEB DESIGN & DEVELOPMENT
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/mobileandappdevelopment" className="link">
                            WEBSITE DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/mobileandappdevelopment" className="link">
                            WEBSITE DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/salesforcepage" className="link">
                            CRM SOFTWARE DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            EDUCATIONAL WEB PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            RESTAURANT WEB PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            E-COMMERCE WEBSITE DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            HEALTHCARE PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            REAL ESTATE PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            LEARNING MANAGEMENT SYSTEM DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            TAXATION PORTAL DEVELOPMENT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="Mobile-application-flex">
                      <div className="nav-service-flex-contianer-items">
                        <h6 className="Nav-teachnology-main-heading">
                          MOBILE APPLICATION
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <li className="Nav-technology-item">
                            <Link
                              to="/mobileandappdevelopment"
                              className="link"
                            >
                              MOBILE APP DEVELOPMENT
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              WINDOWS APP DEVELOPMENT
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              XAMARIN APP DEVELOPMENT
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              HYBRID APP DEVELOPMENT{" "}
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              NATIVE APP DEVELOPMENT{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            LOW CODE PLATFORM
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/resellermendix" className="link">
                                MENDIX
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            ALM TOOL
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/polarianalm" className="link">
                                POLARION
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            CRM SOFTWARE
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/salesforcepage" className="link">
                                SALESFORCE
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="">
                        <div></div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="Nav-teachnology-container nav-menu-item technology-item">
                  TECHNOLOGIES
                  <ul className="Nav-teachnology-container-items">
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        UI DESIGN
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            HTML/HTML5, CSS3
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            ANGULARJS, JS
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            AJAX/JSON
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            JQUERY, JQUERY UI
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            DRUPAL
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            JOOMLA
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            WORDPRESS
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            REACT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        CLOUD COMPUTING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            AWS DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            GOOGLE CLOUD
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            GO DADDY
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            REACT
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SOFTWARE TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            UNIT TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            INTEGRATION TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SYSTEM TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            DEPLOYMENT AUTOMATION SUPPORT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        SERVER SIDE SCRIPTING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            PHP
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            J2EE, J2SE, SWING, SERVLET
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            SPRING, STRUTS, HIBERNATE
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            JSP, JSF, APACHECXF
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            JUNIT, TESTING, MOCKITO
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            MICROSOFT VISIO, ENTERPRISE ARCHITECT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            SHELL
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            PERL
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            PYTHON
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            NODE JS
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            EXPRESS JS
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="data-mining-flex">
                      <div>
                        <h6 className="Nav-teachnology-main-heading">
                          DATA MINING & ANALYTICS
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              DATA BASE DESIGN: ORACLE
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              SQL DATABASE
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              DATABASE DEVELOPMENT MONGO DBE
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              DATABASE CONSULTING SQL SERVER
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              DATABASE CONSULTING SQL SERVER
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            LOW CODE PLATFORM
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/resellermendix" className="link">
                                MENDIX
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            ALM TOOL
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/polarianalm" className="link">
                                POLARION
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            CRM SOFTWARE
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/salesforcepage" className="link">
                                SALESFORCE
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*<div className="Nav-technology-low-code-container">
                        <div>
                            <h6 className="Nav-teachnology-main-heading">LOW CODE PLATFORM</h6>
                            <ul className="Nav-technology-sub-container-items">
                                <Link to="" className="link">
                                        <li className="Nav-technology-item">MENDIX</li>
                                </Link>
                            </ul>
                            </div>
                            <div>
                            <h6 className="Nav-teachnology-main-heading">APPLICATION LIFECYCLE MANAGEMENT TOOL</h6>
                            <ul className="Nav-technology-sub-container-items">
                                <Link to="" className="link">
                                        <li className="Nav-technology-item">POLARION</li>
                                </Link>
                            </ul>
                            </div>
                            <div>
                            <h6 className="Nav-teachnology-main-heading">CRM SOFTWARE</h6>
                            <ul className="Nav-technology-sub-container-items">
                                <Link to="" className="link">
                                        <li className="Nav-technology-item">SALESFORCE</li>
                                </Link>
                            </ul>
                        </div>
                        </div>*/}
                  </ul>
                </li>

                <li className="nav-menu-item career-padding">
                  <Link to="/careers" className="nav-link">
                    CAREERS
                  </Link>
                </li>

                <li className="Nav-Reseller-container nav-menu-item career-padding technology-item">
                  RESELLER
                  <ul className="Nav-Reseller-container-items">
                    <li className="nav-reseller-polarion-text">
                      <Link to="/resellerpolarian" className="nav-link">
                        Polarion
                      </Link>
                    </li>
                    <li className="nav-reseller-mendix-text">
                      <Link to="/resellermendix" className="nav-link">
                        Mendix
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-menu-item about-us-nav about-padding">
                  <Link to="/aboutus" className="nav-link">
                    ABOUT US
                  </Link>
                </li>

                <li className="nav-menu-item about-us-nav about-padding">
                  <Link to="/contactus" className="nav-link">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {showNavItems && this.renderNavItems()}
        </nav>
      </>
    );
  }
}

export default Header;
