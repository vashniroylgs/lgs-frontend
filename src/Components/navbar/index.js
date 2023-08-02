// import { BrowserRouter as Router, Link } from 'react-router-dom';

// import {GiHamburgerMenu} from 'react-icons/gi'

// import {Component} from 'react'
// import {AiFillCloseCircle} from 'react-icons/ai'
// import './index.css'

// class Header extends Component {
//   state = {showNavItems: false,showmblItems: false}

//   toggleShowNavItems = () => {
//     this.setState(prevState => ({showNavItems: !prevState.showNavItems}))
//   }

//   onClickNavItem = () => {
//     this.setState(prevState => ({showmblItems: !prevState.showmblItems}))
//   }

//   showMblNavminiItems = () => {
//     const  {showmblItems} = this.state
//     console.log(showmblItems)
//     return(
//       <ul className="mbl-Nav-Service-container-items">
//         <Link to="/polarianalm" className="link">
//             <li className="Headeroption-item">Polarion ALM</li>
//         </Link>
//         <Link to="/saascloudsolutions" className="link">
//             <li className="Headeroption-item">SAAS & cloud Solutions</li>
//         </Link>
//         <Link to="/ptcintegrity" className="link">
//             <li className="Headeroption-item">PTC Integrity</li>
//         </Link>
//         <Link to="/mobileandappdevelopment" className="link">
//             <li className="Headeroption-item">Mobile & APP Development</li>
//         </Link>
//         <Link to="/resellermendix" className="link">
//             <li className="Headeroption-item">Mendix</li>
//         </Link>
//         <Link to="/salesforcepage" className="link">
//             <li className="Headeroption-item">Sales Force</li>
//         </Link>
//     </ul>
//     )
//     }

//   renderNavItems = () => {
//     const {showmblItems} = this.state
//     return(
//     <div className="mbl-nav-items-container">
//       <ul className="mbl-nav-menu">
//         <Link to="/" className="nav-link" >
//           <li className="nav-menu-item">Home</li>
//         </Link>
//           <li className="nav-menu-item" onClick={this.onClickNavItem}>Services
//           </li>
//           <ul className="mbl-Nav-Service-container-items">
//           <Link to="/polarianalm" className="link">
//               <li className="Headeroption-item">Polarion ALM</li>
//           </Link>
//           <Link to="/saascloudsolutions" className="link">
//               <li className="Headeroption-item">SAAS & cloud Solutions</li>
//           </Link>
//           <Link to="/ptcintegrity" className="link">
//               <li className="Headeroption-item">PTC Integrity</li>
//           </Link>
//           <Link to="/mobileandappdevelopment" className="link">
//               <li className="Headeroption-item">Mobile & APP Development</li>
//           </Link>
//           <Link to="/resellermendix" className="link">
//               <li className="Headeroption-item">Mendix</li>
//           </Link>
//           <Link to="/salesforcepage" className="link">
//               <li className="Headeroption-item">Sales Force</li>
//           </Link>
//         </ul>
//         <Link
//           to="/cart"
//           className="nav-link"
//         >
//           <li className="nav-menu-item">Careers</li>
//         </Link>
//         <Link
//           to="/cart"
//           className="nav-link"
//         >
//         <li>
//             Reseller
//         </li>
//         </Link>
//         <Link
//           to="/aboutus"
//           className="nav-link"
//         >
//         <li>
//             Aboutus
//         </li>
//         </Link>
//         <Link
//           to="/cart"
//           className="nav-link"
//         >
//         <li>
//             ContactUs
//         </li>
//         </Link>
//       </ul>
//     </div>
//   )
// }

//   render() {
//     const {showNavItems} = this.state
//     return (
//         <>
//       <nav className="nav-header">
//         <div className="nav-content">
//           <div className="nav-bar-mobile-logo-container">
//             <Link to="/" className="nav-link">
//               <img
//                 alt="website logo"
//                 className="nav-mobile-logo"
//                 src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
//               />
//             </Link>
    
//             <button
//               type="button"
//               onClick={this.toggleShowNavItems}
//               className="nav-mobile-btn"
//             >
//               <GiHamburgerMenu className="nav-mobile-menu-icon" />
//             </button>
//           </div>
//           <div className="nav-bar-large-container">
//             <Link to="/" className="nav-link">
//               <img
//                 className="nav-website-logo"
//                 src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
//                 alt="website logo"
//               />
//             </Link>
//             <ul className="nav-menu">
    
//               <li className="Nav-Service-container nav-menu-item service-name">
//                     PRODUCTS
//                 <ul className="Nav-Service-container-items">
//                          <Link to="/polarianalm" className="link">
//                          <li className="Headeroption-item">Polarion ALM</li>
//                         </Link>
//                     <Link to="/saascloudsolutions" className="link">
//                          <li className="Headeroption-item">SAAS & cloud Solutions</li>
//                     </Link>
//                     <Link to="/ptcintegrity" className="link">
//                         <li className="Headeroption-item">PTC Integrity</li>
//                     </Link>
//                     <Link to="/mobileandappdevelopment" className="link">
//                         <li className="Headeroption-item">Mobile & APP Development</li>
//                     </Link>
//                     <Link to="/resellermendix" className="link">
//                         <li className="Headeroption-item">Mendix</li>
//                     </Link>
//                     <Link to="/salesforcepage" className="link">
//                         <li className="Headeroption-item">Sales Force</li>
//                     </Link>
//                 </ul>
//               </li>
//               <li className="Nav-Service-container nav-menu-item service-name">
//                     CLIENTS
//                 <ul className="Nav-Service-container-items">
//                          <Link to="/polarianalm" className="link">
//                          <li className="Headeroption-item">Polarion ALM</li>
//                         </Link>
//                     <Link to="/saascloudsolutions" className="link">
//                          <li className="Headeroption-item">SAAS & cloud Solutions</li>
//                     </Link>
//                     <Link to="/ptcintegrity" className="link">
//                         <li className="Headeroption-item">PTC Integrity</li>
//                     </Link>
//                     <Link to="/mobileandappdevelopment" className="link">
//                         <li className="Headeroption-item">Mobile & APP Development</li>
//                     </Link>
//                     <Link to="/resellermendix" className="link">
//                         <li className="Headeroption-item">Mendix</li>
//                     </Link>
//                     <Link to="/salesforcepage" className="link">
//                         <li className="Headeroption-item">Sales Force</li>
//                     </Link>
//                 </ul>
//               </li>
    
//               <li className="Nav-Service-container nav-menu-item service-name">
//                     SERVICES
//                 <ul className="Nav-Service-container-items">
//                          <Link to="/mobileandappdevelopment" className="link">
//                          <li className="Headeroption-item">Mobile & APP Development</li>
//                         </Link>
//                     <Link to="/mobileandappdevelopmen" className="link">
//                          <li className="Headeroption-item">Web Development</li>
//                     </Link>
//                     <Link to="/resellermendix" className="link">
//                         <li className="Headeroption-item">Mendix</li>
//                     </Link>
//                     <Link to="/polarianalm" className="link">
//                         <li className="Headeroption-item">Polarion ALM</li>
//                     </Link>
//                     <Link to="/ptcintegrity" className="link">
//                         <li className="Headeroption-item">PTC Integrity</li>
//                     </Link>
//                     <Link to="/salesforcepage" className="link">
//                         <li className="Headeroption-item">Sales Force</li>
//                     </Link>
//                     <Link to="/saascloudsolutions" className="link">
//                         <li className="Headeroption-item"> SAAS & cloud Solutions</li>
//                     </Link>
//                     <Link to="/" className="link">
//                         <li className="Headeroption-item">Digital Marketing</li>
//                     </Link>
//                 </ul>
//               </li>
//               <Link
//                 to="/"
//                 className="nav-link"
//               >
//                 <li className="Nav-teachnology-container nav-menu-item technology-item">TECHNOLOGIES
                
//                   {/* <ul className="Nav-teachnology-container-items">
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">UI DESIGN</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                           <Link to="" className="link">
//                                   <li className="Nav-technology-item">HTML/HTML5, CSS3</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">ANGULARJS, JS</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">AJAX/JSON</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">JQUERY, JQUERY UI</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">DRUPAL</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">JOOMLA</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">WORDPRESS</li>
//                             </Link>
//                             <Link to="" className="link">
//                                   <li className="Nav-technology-item">REACT</li>
//                             </Link>
//                             </ul>
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">CLOUD COMPUTING</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                           <Link to="" className="link">
//                                   <li className="Nav-technology-item">AWS DEVELOPMENT</li>
//                           </Link>
//                           <Link to="" className="link">
//                                   <li className="Nav-technology-item">GOOGLE CLOUD</li>
//                           </Link>
//                           <Link to="" className="link">
//                                   <li className="Nav-technology-item">GO DADDY</li>
//                           </Link>
//                           <Link to="" className="link">
//                                   <li className="Nav-technology-item">REACT</li>
//                           </Link>
//                           </ul>
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">SERVER SIDE SCRIPTING</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">PHP</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">J2EE, J2SE, SWING, SERVLET</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">SPRING, STRUTS, HIBERNATE</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">JSP, JSF, APACHECXF</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">JUNIT, TESTING, MOCKITO</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">MICROSOFT VISIO, ENTERPRISE ARCHITECT</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">SHELL</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">PERL</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">PYTHON</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">NODE JS</li>
//                             </Link>
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">EXPRESS JS</li>
//                             </Link>
//                           </ul>
//                       </div>
//                       <div>
//                         <h1 className="Nav-teachnology-main-heading">DATA MINING & ANALYTICS</h1>
//                         <ul className="Nav-technology-sub-container-items">
//                           <Link to="" className="link">
//                                     <li className="Nav-technology-item">DATA BASE DESIGN: ORACLE</li>
//                           </Link>
//                           <Link to="" className="link">
//                                     <li className="Nav-technology-item">SQL DATABASE</li>
//                           </Link>
//                           <Link to="" className="link">
//                                     <li className="Nav-technology-item">DATABASE DEVELOPMENT MONGO DBE</li>
//                           </Link>
//                           <Link to="" className="link">
//                                     <li className="Nav-technology-item">DATABASE CONSULTING SQL SERVER</li>
//                           </Link>
//                           <Link to="" className="link">
//                                     <li className="Nav-technology-item">DATABASE CONSULTING SQL SERVER</li>
//                           </Link>
//                         </ul>
                       
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">WEB SERVER TECHNOLOGY</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">JBOSS</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">APACHE</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">TOMCAT</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">IIS</li>
//                             </Link>
//                           </ul>
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">TESTING</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">SOFTWARE TESTING</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">UNIT TESTING</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">INTEGRATION  TESTING</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">SYSTEM TESTING</li>
//                             </Link>
//                             <Link to="" className="link">
//                                       <li className="Nav-technology-item">DEPLOYMENT AUTOMATION SUPPORT</li>
//                             </Link>
//                           </ul>
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">LOW CODE PLATFORM</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">MENDIX</li>
//                             </Link>
//                           </ul>
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">APPLICATION LIFECYCLE MANAGEMENT TOOL</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">POLARION</li>
//                             </Link>
//                           </ul>
//                       </div>
//                       <div>
//                           <h1 className="Nav-teachnology-main-heading">CRM SOFTWARE</h1>
//                           <ul className="Nav-technology-sub-container-items">
//                             <Link to="" className="link">
//                                     <li className="Nav-technology-item">SALESFORCE</li>
//                             </Link>
//                           </ul>
//                       </div>
                        
//                   </ul>
//                  */}
//                 </li>
//               </Link>
//               <a className="link" target='_blank' href='https://www.linkedin.com/company/labyrinth-global-solutions/mycompany/'>
//                 <li className="nav-menu-item">CAREERS</li>
//               </a>
//                 <li className="Nav-Reseller-container nav-menu-item">RESELLER
//                 <ul className="Nav-Reseller-container-items">
//                     <li>Polarion</li>
//                     <li>Mendix</li>
//                 </ul>
//                 </li>
//               <Link
//                 to="/aboutus"
//                 className="nav-link"
//               >
//                 <li className="nav-menu-item about-us-nav">ABOUT US</li>
//               </Link>
//               <Link
//                 to="/contactus"
//                 className="nav-link"
//               >
//                 <li className="nav-menu-item about-us-nav">CONTACT US</li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//         {showNavItems && this.renderNavItems()}
//       </nav>
//       </>
//     )
//   }
// }

// export default Header

import {BrowserRouter as Router,Link } from 'react-router-dom';

import {GiHamburgerMenu} from 'react-icons/gi'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {showNavItems: false,showmblItems: false}

  toggleShowNavItems = () => {
    this.setState(prevState => ({showNavItems: !prevState.showNavItems}))
  }

  onClickNavItem = () => {
    this.setState(prevState => ({showmblItems: !prevState.showmblItems}))
  }

  showMblNavminiItems = () => {
    const  {showmblItems} = this.state
    console.log(showmblItems)
    return(
      <ul className="mbl-Nav-Service-container-items">
        <Link to="/polarianalm" className="link">
            <li className="Headeroption-item">Polarion ALM</li>
        </Link>
        <Link to="/saascloudsolutions" className="link">
            <li className="Headeroption-item">SAAS & cloud Solutions</li>
        </Link>
        <Link to="/ptcintegrity" className="link">
            <li className="Headeroption-item">PTC Integrity</li>
        </Link>
        <Link to="/mobileandappdevelopment" className="link">
            <li className="Headeroption-item">Mobile & APP Development</li>
        </Link>
        <Link to="/resellermendix" className="link">
            <li className="Headeroption-item">Mendix</li>
        </Link>
        <Link to="/salesforcepage" className="link">
            <li className="Headeroption-item">Sales Force</li>
        </Link>
    </ul>
    )
    }

  renderNavItems = () => {
    const {showmblItems} = this.state
    return(
        
    <div className="mbl-nav-items-container">
      <ul className="mbl-nav-menu">
        <Link to="/" className="nav-link" >
          <li className="nav-menu-item">Home</li>
        </Link>
          <li className="nav-menu-item" onClick={this.onClickNavItem}>Services
          </li>
          <ul className="mbl-Nav-Service-container-items">
          <Link to="/polarianalm" className="link">
              <li className="Headeroption-item">Polarion ALM</li>
          </Link>
          <Link to="/saascloudsolutions" className="link">
              <li className="Headeroption-item">SAAS & cloud Solutions</li>
          </Link>
          <Link to="/ptcintegrity" className="link">
              <li className="Headeroption-item">PTC Integrity</li>
          </Link>
          <Link to="/mobileandappdevelopment" className="link">
              <li className="Headeroption-item">Mobile & APP Development</li>
          </Link>
          <Link to="/resellermendix" className="link">
              <li className="Headeroption-item">Mendix</li>
          </Link>
          <Link to="/salesforcepage" className="link">
              <li className="Headeroption-item">Sales Force</li>
          </Link>
        </ul>
        <Link
          to="/cart"
          className="nav-link"
        >
          <li className="nav-menu-item">Careers</li>
        </Link>
        <Link
          to="/cart"
          className="nav-link"
        >
        <li>
            Reseller
        </li>
        </Link>
        <Link
          to="/aboutus"
          className="nav-link"
        >
        <li>
            Aboutus
        </li>
        </Link>
        <Link
          to="/cart"
          className="nav-link"
        >
        <li>
            ContactUs
        </li>
        </Link>
      </ul>
    </div>
    
  )
}

  render() {
    const {showNavItems} = this.state
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
            <Link to="/" className="nav-link">
            <li className="Nav-Service-container nav-menu-item service-name">
                    HOME
              </li>
              </Link>
              <li className="Nav-Service-container nav-menu-item service-name">
                    PRODUCTS
                <ul className="Nav-Service-container-items">
                         <Link to="/polarianalm" className="link">
                         <li className="Headeroption-item">Polarion ALM</li>
                        </Link>
                    <Link to="/saascloudsolutions" className="link">
                         <li className="Headeroption-item">SAAS & cloud Solutions</li>
                    </Link>
                    <Link to="/ptcintegrity" className="link">
                        <li className="Headeroption-item">PTC Integrity</li>
                    </Link>
                    <Link to="/mobileandappdevelopment" className="link">
                        <li className="Headeroption-item">Mobile & APP Development</li>
                    </Link>
                    <Link to="/resellermendix" className="link">
                        <li className="Headeroption-item">Mendix</li>
                    </Link>
                    <Link to="/salesforcepage" className="link">
                        <li className="Headeroption-item">Sales Force</li>
                    </Link>
                </ul>
              </li>
              <li className="Nav-Service-container nav-menu-item service-name">
                    CLIENTS
                <ul className="Nav-Service-container-items">
                         <Link to="/polarianalm" className="link">
                         <li className="Headeroption-item">Polarion ALM</li>
                        </Link>
                    <Link to="/saascloudsolutions" className="link">
                         <li className="Headeroption-item">SAAS & cloud Solutions</li>
                    </Link>
                    <Link to="/ptcintegrity" className="link">
                        <li className="Headeroption-item">PTC Integrity</li>
                    </Link>
                    <Link to="/mobileandappdevelopment" className="link">
                        <li className="Headeroption-item">Mobile & APP Development</li>
                    </Link>
                    <Link to="/resellermendix" className="link">
                        <li className="Headeroption-item">Mendix</li>
                    </Link>
                    <Link to="/salesforcepage" className="link">
                        <li className="Headeroption-item">Sales Force</li>
                    </Link>
                </ul>
              </li>
    
              <li className="Nav-Service-container nav-menu-item service-name">
                    SERVICES
                <ul className="Nav-Service-container-items">
                         <Link to="/mobileandappdevelopment" className="link">
                         <li className="Headeroption-item">Mobile & APP Development</li>
                        </Link>
                    <Link to="/mobileandappdevelopmen" className="link">
                         <li className="Headeroption-item">Web Development</li>
                    </Link>
                    <Link to="/resellermendix" className="link">
                        <li className="Headeroption-item">Mendix</li>
                    </Link>
                    <Link to="/polarianalm" className="link">
                        <li className="Headeroption-item">Polarion ALM</li>
                    </Link>
                    <Link to="/ptcintegrity" className="link">
                        <li className="Headeroption-item">PTC Integrity</li>
                    </Link>
                    <Link to="/salesforcepage" className="link">
                        <li className="Headeroption-item">Sales Force</li>
                    </Link>
                    <Link to="/saascloudsolutions" className="link">
                        <li className="Headeroption-item"> SAAS & cloud Solutions</li>
                    </Link>
                    <Link to="/" className="link">
                        <li className="Headeroption-item">Digital Marketing</li>
                    </Link>
                </ul>
              </li>
              <Link
                to="/"
                className="nav-link"
              >
                <li className="Nav-teachnology-container nav-menu-item technology-item">TECHNOLOGIES
                  <ul className="Nav-teachnology-container-items">
                      <div>
                          <h6 className="Nav-teachnology-main-heading">UI DESIGN</h6>
                          <ul className="Nav-technology-sub-container-items">
                          <Link to="" className="link">
                                  <li className="Nav-technology-item">HTML/HTML5, CSS3</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">ANGULARJS, JS</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">AJAX/JSON</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">JQUERY, JQUERY UI</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">DRUPAL</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">JOOMLA</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">WORDPRESS</li>
                            </Link>
                            <Link to="" className="link">
                                  <li className="Nav-technology-item">REACT</li>
                            </Link>
                            </ul>
                      </div>
                      <div>
                          <h6 className="Nav-teachnology-main-heading">CLOUD COMPUTING</h6>
                          <ul className="Nav-technology-sub-container-items">
                          <Link to="" className="link">
                                  <li className="Nav-technology-item">AWS DEVELOPMENT</li>
                          </Link>
                          <Link to="" className="link">
                                  <li className="Nav-technology-item">GOOGLE CLOUD</li>
                          </Link>
                          <Link to="" className="link">
                                  <li className="Nav-technology-item">GO DADDY</li>
                          </Link>
                          <Link to="" className="link">
                                  <li className="Nav-technology-item">REACT</li>
                          </Link>
                          </ul>
                          <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">SOFTWARE TESTING</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">UNIT TESTING</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">INTEGRATION  TESTING</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">SYSTEM TESTING</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">DEPLOYMENT AUTOMATION SUPPORT</li>
                            </Link>
                          </ul>
                      </div>
                      <div>
                          <h6 className="Nav-teachnology-main-heading">SERVER SIDE SCRIPTING</h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">PHP</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">J2EE, J2SE, SWING, SERVLET</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">SPRING, STRUTS, HIBERNATE</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">JSP, JSF, APACHECXF</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">JUNIT, TESTING, MOCKITO</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">MICROSOFT VISIO, ENTERPRISE ARCHITECT</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">SHELL</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">PERL</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">PYTHON</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">NODE JS</li>
                            </Link>
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">EXPRESS JS</li>
                            </Link>
                          </ul>
                      </div>
                      <div>
                        <h6 className="Nav-teachnology-main-heading">DATA MINING & ANALYTICS</h6>
                        <ul className="Nav-technology-sub-container-items">
                          <Link to="" className="link">
                                    <li className="Nav-technology-item">DATA BASE DESIGN: ORACLE</li>
                          </Link>
                          <Link to="" className="link">
                                    <li className="Nav-technology-item">SQL DATABASE</li>
                          </Link>
                          <Link to="" className="link">
                                    <li className="Nav-technology-item">DATABASE DEVELOPMENT MONGO DBE</li>
                          </Link>
                          <Link to="" className="link">
                                    <li className="Nav-technology-item">DATABASE CONSULTING SQL SERVER</li>
                          </Link>
                          <Link to="" className="link">
                                    <li className="Nav-technology-item">DATABASE CONSULTING SQL SERVER</li>
                          </Link>
                        </ul>
                        <h6 className="Nav-teachnology-main-heading">WEB SERVER TECHNOLOGY</h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="" className="link">
                                    <li className="Nav-technology-item">JBOSS</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">APACHE</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">TOMCAT</li>
                            </Link>
                            <Link to="" className="link">
                                      <li className="Nav-technology-item">IIS</li>
                            </Link>
                          </ul>
                       
                      </div>
                      <div className="Nav-technology-low-code-container">
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
                      </div>
                  </ul>
                
                </li>
              </Link>
              <Link to="/careers" className="nav-link">
                <li className="nav-menu-item">CAREERS</li>
              </Link>
                <li className="Nav-Reseller-container nav-menu-item">RESELLER
                <ul className="Nav-Reseller-container-items">
                <Link to="/careers" className="nav-link"><li className='nav-reseller-polarion-text'>Polarion</li></Link>
                <Link to="/careers" className="nav-link"><li className='nav-reseller-mendix-text'>Mendix</li></Link>
                </ul>
                </li>
              <Link
                to="/aboutus"
                className="nav-link">
                <li className="nav-menu-item about-us-nav">ABOUT US</li>
              </Link>
              <Link
                to="/contactus"
                className="nav-link">
                <li className="nav-menu-item about-us-nav">CONTACT US</li>
              </Link>
            </ul>
          </div>
        </div>
        {showNavItems && this.renderNavItems()}
      </nav>
      </>
    )
  }
}

export default Header