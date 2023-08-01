import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class CountriesBar extends Component {
  render() {
    return (
      <>
        <div className="countries-main-container">
          <div className="logos-container">
            <a href="https://www.facebook.com/techasoft/" target="_blank">
              <img
                src="https://www.techasoft.com/debug/img/facebook.svg"
                alt="facebook"
                className="icon-image"
              />
            </a>
            <a href="https://twitter.com/TECHASOFT_BNGLR" target="_blank">
              <img
                src="https://www.techasoft.com/debug/img/twitter-1.svg"
                alt="twitter"
                className="icon-image"
              />
            </a>
            <a
              href="https://in.linkedin.com/company/techasoft-pvt-ltd"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/linkedin-1.svg"
                alt="linkedin"
                className="icon-image"
              />
            </a>
            <a
              href="https://in.pinterest.com/techasoft_pvt_ltd/"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/pinterest.svg"
                alt="pinterest"
                className="icon-image"
              />
            </a>
            <a
              href="https://www.instagram.com/techasoft_pvt_ltd/"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/instagram.svg"
                alt="instagram"
                className="icon-image"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3MLSIMJdEamt0Q0iQ21Omg"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/youtube.svg"
                alt="youtube"
                className="icon-image"
              />
            </a>
          </div>
          <div className="logos-container-2">
            <a
              className="whatsapp_web "
              href="https://wa.me/16474702985?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/canada_watsapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a className="first_nav_content" href="tel:+16474702985">
              +1 647 470 2985
            </a>
            <a
              className="whatsapp_web"
              href="https://wa.me/16108800144?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/usa_watsapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a className="first_nav_content mr-md-2" href="tel:+16108800144">
              +1 610 880 0144
            </a>
            <a
              className="whatsapp_web"
              href="https://wa.me/971564576426?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/dubai_whatapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a
              class="contact-info mob first_nav_content mr-md-2"
              href="tel:+971506089308"
            >
              +971 50 608 9308
            </a>
            <a
              className="whatsapp_web"
              href="https://wa.me/918884739988?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
            >
              <img
                src="https://www.techasoft.com/debug/img/india_watsapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a class="first_nav_content mr-md-2" href="tel:+918884739988">
              +91 8884 739 988
            </a>
            <a
              className="navbar_mob_email first_nav_content mr-2"
              href="mailto:info@techasoft.com"
            >
              <img
                src="https://www.techasoft.com/debug/img/email-3.svg"
                className=" email-icon "
                alt="email"
              />
            </a>
            <a className="first_nav_content">info@techasoft.com</a>
          </div>
        </div>

        <hr className="line" />
      </>
    );
  }
}

export default CountriesBar;
