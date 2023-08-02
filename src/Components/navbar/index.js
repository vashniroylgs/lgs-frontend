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

  showMblNavminiItems = () => {
    const { showmblItems } = this.state;
    console.log(showmblItems);
    return (
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
    );
  };

  renderNavItems = () => {
    const { showNavItems } = this.state;
    return (
      <div className="mbl-nav-items-container">
        <ul className="mbl-nav-menu">
          <Link to="/" className="nav-link">
            <li className="nav-mbl-menu-item">HOME</li>
          </Link>
          <li className="nav-mbl-service-container nav-mbl-menu-item">
            PRODUCTS
            <ul className="mbl-Nav-Service-container-items"></ul>
          </li>

          <Link to="/cart" className="nav-link">
            <li className="nav-mbl-service-container nav-mbl-menu-item">
              TECHNOLOGIES
              <ul className="mbl-Nav-Service-container-items technology-overflow">
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    UI DESIGN
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">HTML/HTML5, CSS3</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">ANGULARJS, JS</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">AJAX/JSON</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">JQUERY, JQUERY UI</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">DRUPAL</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">JOOMLA</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">WORDPRESS</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">REACT</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    CLOUD COMPUTING
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">AWS DEVELOPMENT</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">GOOGLE CLOUD</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">GO DADDY</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">REACT</li>
                    </Link>
                  </ul>
                  <h6 className="Nav-Mbl-teachnology-main-heading">TESTING</h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">SOFTWARE TESTING</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">UNIT TESTING</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">INTEGRATION TESTING</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">SYSTEM TESTING</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        DEPLOYMENT AUTOMATION SUPPORT
                      </li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    SERVER SIDE SCRIPTING
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">PHP</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        J2EE, J2SE, SWING, SERVLET
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        SPRING, STRUTS, HIBERNATE
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">JSP, JSF, APACHECXF</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        JUNIT, TESTING, MOCKITO
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        MICROSOFT VISIO, ENTERPRISE ARCHITECT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">SHELL</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">PERL</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">PYTHON</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">NODE JS</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">EXPRESS JS</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    DATA MINING & ANALYTICS
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        DATA BASE DESIGN: ORACLE
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">SQL DATABASE</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        DATABASE DEVELOPMENT MONGO DBE
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        DATABASE CONSULTING SQL SERVER
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">
                        DATABASE CONSULTING SQL SERVER
                      </li>
                    </Link>
                  </ul>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    WEB SERVER TECHNOLOGY
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">JBOSS</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">APACHE</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">TOMCAT</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="mbl-product-items">IIS</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    LOW CODE PLATFORM
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">MENDIX</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    APPLICATION LIFECYCLE MANAGEMENT TOOL
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">POLARION</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    CRM SOFTWARE
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="mbl-product-items">SALESFORCE</li>
                    </Link>
                  </ul>
                </div>
              </ul>
            </li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="nav-mbl-service-container nav-mbl-menu-item">
              SERVICES
              <ul className="mbl-Nav-Service-container-items technology-overflow">
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">
                    ONLINE MARKETING
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="Nav-technology-item">SEO SERVICES</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        SEARCH ENGINE MARKETING
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        LEAD MANAGEMENT SYSTEM
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">DIGITAL MARKETING</li>
                    </Link>
                  </ul>
                  <h6 className="Nav-teachnology-main-heading">
                    CREATIVE DESIGN
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="Nav-technology-item">UI/UX DESIGN</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">LOGO DESIGN</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">BROCHURE DESIGN</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">IIS</li>
                    </Link>
                  </ul>
                </div>
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">CONSULTANT</h6>
                  <ul className="Nav-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        MENDIX SOLUTION CONSULTANT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        POLARION SOLUTION CONSULTANT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        SALESFORCE SOLUTION CONSULTANT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        CONVENTIONAL DEVELOPMENT CONSULTANT
                      </li>
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
                      <li className="Nav-technology-item">
                        INTEGRATION TESTING
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">SYSTEM TESTING</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        DEPLOYMENT AUTOMATION SUPPORT
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">
                    WEB DESIGN & DEVELOPMENT
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    <Link to="" className="link">
                      <li className="Nav-technology-item">WEBSITE DESIGN</li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        WEBSITE DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        CRM SOFTWARE DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        EDUCATIONAL WEB PORTAL DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        RESTAURANT WEB PORTAL DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        E-COMMERCE WEBSITE DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        HEALTHCARE PORTAL DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        REAL ESTATE PORTAL DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        LEARNING MANAGEMENT SYSTEM DEVELOPMENT
                      </li>
                    </Link>
                    <Link to="" className="link">
                      <li className="Nav-technology-item">
                        TAXATION PORTAL DEVELOPMENT
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="Mobile-application-flex">
                  <div className="nav-service-flex-contianer-items">
                    <h6 className="Nav-teachnology-main-heading">
                      MOBILE APPLICATION
                    </h6>
                    <ul className="Nav-technology-sub-container-items">
                      <Link to="" className="link">
                        <li className="Nav-technology-item">
                          MOBILE APP DEVELOPMENT
                        </li>
                      </Link>
                      <Link to="" className="link">
                        <li className="Nav-technology-item">
                          WINDOWS APP DEVELOPMENT
                        </li>
                      </Link>
                      <Link to="" className="link">
                        <li className="Nav-technology-item">
                          XAMARIN APP DEVELOPMENT
                        </li>
                      </Link>
                      <Link to="" className="link">
                        <li className="Nav-technology-item">
                          HYBRID APP DEVELOPMENT{" "}
                        </li>
                      </Link>
                      <Link to="" className="link">
                        <li className="Nav-technology-item">
                          NATIVE APP DEVELOPMENT{" "}
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="">
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        LOW CODE PLATFORM
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="" className="link">
                          <li className="Nav-technology-item">MENDIX</li>
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">ALM TOOL</h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="" className="link">
                          <li className="Nav-technology-item">POLARION</li>
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        CRM SOFTWARE
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="" className="link">
                          <li className="Nav-technology-item">SALESFORCE</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </Link>
          <Link to="/aboutus" className="nav-link">
            <li className="nav-mbl-menu-item">CAREERS</li>
          </Link>
          <Link to="/resellerpolarian" className="nav-link">
            <li className="nav-mbl-menu-item">RESELLER</li>
          </Link>
          <Link to="/aboutus" className="nav-link">
            <li className="nav-mbl-menu-item">ABOUT US</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="nav-mbl-menu-item">CONTACT US</li>
          </Link>
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
                <Link to="/" className="nav-link">
                  <li className="Nav-Service-container nav-menu-item home-padding">
                    HOME
                  </li>
                </Link>
                <li className="Nav-Service-container nav-menu-item technology-item">
                  PRODUCTS
                  <ul className="Nav-Service-container-items">
                    <Link to="/polarianalm" className="link">
                      <li className="Headeroption-item">Quanta Genius</li>
                    </Link>
                    <Link to="/saascloudsolutions" className="link">
                      <li className="Headeroption-item">Taxoguru Consulting</li>
                    </Link>
                    {/* <Link to="/ptcintegrity" className="link">
                        <li className="Headeroption-item">PTC Integrity</li>
                    </Link> */}
                    <Link to="/mobileandappdevelopment" className="link">
                      <li className="Headeroption-item">Glorious Mindmine</li>
                    </Link>
                    <Link to="/resellermendix" className="link">
                      <li className="Headeroption-item">LGS Fresh</li>
                    </Link>
                    <Link to="/salesforcepage" className="link">
                      <li className="Headeroption-item">Digival</li>
                    </Link>
                    <Link to="/salesforcepage" className="link">
                      <li className="Headeroption-item">
                        SRM 360 degree Consulting
                      </li>
                    </Link>
                  </ul>
                </li>
                <Link to="/clientsPage" className="nav-link">
                  <li className="Nav-Service-container nav-menu-item technology-item">
                    CLIENTS
                  </li>
                </Link>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  SERVICES
                  <ul className="Nav-Service-container-items nav-service-flex-contianer ">
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        ONLINE MARKETING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">SEO SERVICES</li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            SEARCH ENGINE MARKETING
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            LEAD MANAGEMENT SYSTEM
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            DIGITAL MARKETING
                          </li>
                        </Link>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">
                        CREATIVE DESIGN
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">UI/UX DESIGN</li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">LOGO DESIGN</li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            BROCHURE DESIGN
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">IIS</li>
                        </Link>
                      </ul>
                    </div>
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        CONSULTANT
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            MENDIX SOLUTION CONSULTANT
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            POLARION SOLUTION CONSULTANT
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            SALESFORCE SOLUTION CONSULTANT
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            CONVENTIONAL DEVELOPMENT CONSULTANT
                          </li>
                        </Link>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            SOFTWARE TESTING
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">UNIT TESTING</li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            INTEGRATION TESTING
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            SYSTEM TESTING
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            DEPLOYMENT AUTOMATION SUPPORT
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        WEB DESIGN & DEVELOPMENT
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <Link to="/mobileandappdevelopment" className="link">
                          <li className="Nav-technology-item">
                            WEBSITE DESIGN
                          </li>
                        </Link>
                        <Link to="/mobileandappdevelopment" className="link">
                          <li className="Nav-technology-item">
                            WEBSITE DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            CRM SOFTWARE DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            EDUCATIONAL WEB PORTAL DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            RESTAURANT WEB PORTAL DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            E-COMMERCE WEBSITE DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            HEALTHCARE PORTAL DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            REAL ESTATE PORTAL DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="/contactus" className="link">
                          <li className="Nav-technology-item">
                            LEARNING MANAGEMENT SYSTEM DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="" className="link">
                          <li className="Nav-technology-item">
                            TAXATION PORTAL DEVELOPMENT
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div className="Mobile-application-flex">
                      <div className="nav-service-flex-contianer-items">
                        <h6 className="Nav-teachnology-main-heading">
                          MOBILE APPLICATION
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <Link to="/mobileandappdevelopment" className="link">
                            <li className="Nav-technology-item">
                              MOBILE APP DEVELOPMENT
                            </li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">
                              WINDOWS APP DEVELOPMENT
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              XAMARIN APP DEVELOPMENT
                            </li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">
                              HYBRID APP DEVELOPMENT{" "}
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              NATIVE APP DEVELOPMENT{" "}
                            </li>
                          </Link>
                        </ul>
                      </div>
                      <div className="">
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            LOW CODE PLATFORM
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="/resellermendix" className="link">
                              <li className="Nav-technology-item">MENDIX</li>
                            </Link>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            ALM TOOL
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="/polarianalm" className="link">
                              <li className="Nav-technology-item">POLARION</li>
                            </Link>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            CRM SOFTWARE
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="" className="link">
                              <li className="Nav-technology-item">
                                SALESFORCE
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <Link to="/" className="nav-link">
                  <li className="Nav-teachnology-container nav-menu-item technology-item">
                    TECHNOLOGIES
                    <ul className="Nav-teachnology-container-items">
                      <div>
                        <h6 className="Nav-teachnology-main-heading">
                          UI DESIGN
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">
                              HTML/HTML5, CSS3
                            </li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">
                              ANGULARJS, JS
                            </li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">AJAX/JSON</li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">
                              JQUERY, JQUERY UI
                            </li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">DRUPAL</li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">JOOMLA</li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">WORDPRESS</li>
                          </Link>
                          <Link to="/contactus" className="link">
                            <li className="Nav-technology-item">REACT</li>
                          </Link>
                        </ul>
                      </div>
                      <div>
                        <h6 className="Nav-teachnology-main-heading">
                          CLOUD COMPUTING
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              AWS DEVELOPMENT
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              GOOGLE CLOUD
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">GO DADDY</li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">REACT</li>
                          </Link>
                        </ul>
                        <h6 className="Nav-teachnology-main-heading">
                          TESTING
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              SOFTWARE TESTING
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              UNIT TESTING
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              INTEGRATION TESTING
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              SYSTEM TESTING
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              DEPLOYMENT AUTOMATION SUPPORT
                            </li>
                          </Link>
                        </ul>
                      </div>
                      <div>
                        <h6 className="Nav-teachnology-main-heading">
                          SERVER SIDE SCRIPTING
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <Link to="" className="link">
                            <li className="Nav-technology-item">PHP</li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              J2EE, J2SE, SWING, SERVLET
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              SPRING, STRUTS, HIBERNATE
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              JSP, JSF, APACHECXF
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              JUNIT, TESTING, MOCKITO
                            </li>
                          </Link>
                          <Link to="" className="link">
                            <li className="Nav-technology-item">
                              MICROSOFT VISIO, ENTERPRISE ARCHITECT
                            </li>
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
                      <div className="data-mining-flex">
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            DATA MINING & ANALYTICS
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <Link to="" className="link">
                              <li className="Nav-technology-item">
                                DATA BASE DESIGN: ORACLE
                              </li>
                            </Link>
                            <Link to="" className="link">
                              <li className="Nav-technology-item">
                                SQL DATABASE
                              </li>
                            </Link>
                            <Link to="" className="link">
                              <li className="Nav-technology-item">
                                DATABASE DEVELOPMENT MONGO DBE
                              </li>
                            </Link>
                            <Link to="" className="link">
                              <li className="Nav-technology-item">
                                DATABASE CONSULTING SQL SERVER
                              </li>
                            </Link>
                            <Link to="" className="link">
                              <li className="Nav-technology-item">
                                DATABASE CONSULTING SQL SERVER
                              </li>
                            </Link>
                          </ul>
                        </div>
                        <div>
                          <div>
                            <h6 className="Nav-teachnology-main-heading">
                              LOW CODE PLATFORM
                            </h6>
                            <ul className="Nav-technology-sub-container-items">
                              <Link to="" className="link">
                                <li className="Nav-technology-item">MENDIX</li>
                              </Link>
                            </ul>
                          </div>
                          <div>
                            <h6 className="Nav-teachnology-main-heading">
                              ALM TOOL
                            </h6>
                            <ul className="Nav-technology-sub-container-items">
                              <Link to="" className="link">
                                <li className="Nav-technology-item">
                                  POLARION
                                </li>
                              </Link>
                            </ul>
                          </div>
                          <div>
                            <h6 className="Nav-teachnology-main-heading">
                              CRM SOFTWARE
                            </h6>
                            <ul className="Nav-technology-sub-container-items">
                              <Link to="" className="link">
                                <li className="Nav-technology-item">
                                  SALESFORCE
                                </li>
                              </Link>
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
                </Link>
                <Link to="/careers" className="nav-link">
                  <li className="nav-menu-item career-padding">CAREERS</li>
                </Link>
                <li className="Nav-Reseller-container nav-menu-item career-padding technology-item">
                  RESELLER
                  <ul className="Nav-Reseller-container-items">
                    <Link to="/resellerpolarian" className="nav-link">
                      <li className="nav-reseller-polarion-text">Polarion</li>
                    </Link>
                    <Link to="/resellermendix" className="nav-link">
                      <li className="nav-reseller-mendix-text">Mendix</li>
                    </Link>
                  </ul>
                </li>
                <Link to="/aboutus" className="nav-link">
                  <li className="nav-menu-item about-us-nav about-padding">
                    ABOUT US
                  </li>
                </Link>
                <Link to="/contactus" className="nav-link">
                  <li className="nav-menu-item about-us-nav about-padding">
                    CONTACT US
                  </li>
                </Link>
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
