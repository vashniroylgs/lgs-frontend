import { BrowserRouter as Router, Link } from 'react-router-dom';

import {GiHamburgerMenu} from 'react-icons/gi'

import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
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
              <Link
                to="/"
                className="nav-link"
              >
                <li className="nav-menu-item">HOME</li>
              </Link>
              <li className="Nav-Service-container nav-menu-item service-name">
                    SERVICES
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
              <a className="link" target='_blank' href='https://www.linkedin.com/company/labyrinth-global-solutions/mycompany/'>
                <li className="nav-menu-item">CAREERS</li>
              </a>
                <li className="Nav-Reseller-container nav-menu-item">RESELLER
                <ul className="Nav-Reseller-container-items">
                    <li>Polarion</li>
                    <li>Mendix</li>
                </ul>
                </li>
              <Link
                to="/aboutus"
                className="nav-link"
              >
                <li className="nav-menu-item about-us-nav">ABOUT US</li>
              </Link>
              <Link
                to="/contactus"
                className="nav-link"
              >
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