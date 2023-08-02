import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Services extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".services-reval");
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
      <div>
        <div class="row1-container">
          <div class="box-2 box-down cyan services-reval">
            <h2 className="services-heading">Web & Mobile App Development </h2>
            <p>
            At Labyrinth Global Solutions, we don't just build websites and apps; we build experiences that connect, inspire, and empower. 
            We are not just developers; 
            we are dreamers and visionaries who are passionate about making a 
            difference in the digital world ...<Link to="/resellermendix">Know More</Link>
            </p>
            <img
              src="https://www.labyrinthglobalsolutions.com/assets/img/polarion/siemens.png"
              alt=""
              height={30}
              width={150}
            />
          </div>

          <div class="box red services-reval">
            <h2 className="services-heading">Mendix</h2>
            <p>
            In today's fast-paced world, staying ahead of the competition requires agility, adaptability, 
            and the ability to rapidly deploy custom applications. 
            That's where Mendix comes in—a powerful low-code development platform that 
            enables us to build robust and scalable applications faster than ever before...<Link to="/resellermendix">Know More</Link>
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5256/5256916.png"
              alt=""
              height={80}
              width={80}
            />
          </div>

          <div class="box box-down blue services-reval">
            <h2 className="services-heading">Digital Marketing</h2>
            <p>
            From crafting captivating websites that leave lasting impressions to implementing data-driven SEO strategies that propel businesses to the top of search engines, we leave no stone unturned in our pursuit of digital excellence. Social media marketing, content creation, email campaigns, and everything in between, 
            we orchestrate the perfect symphony of marketing tactics tailored to your specific needs.. <Link to="/digitalmarketing">Know More</Link> 
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/PTC_Integrity.png/640px-PTC_Integrity.png"
              alt=""
              height={60}
              width={200}
            />
          </div>
        </div>
        <div class="row2-container">
          <div class="box orange services-reval">
            <h2 className="services-heading">Polarion</h2>
            <p>
            Welcome to the cutting-edge world of Polarion Solutions & Development, 
            where innovation meets excellence! We empower businesses and individuals with state-of-the-art 
            Polarion Solutions that redefine possibilities and accelerate growth....<Link to="/resellerpolarian">Know More</Link>
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/7991/7991055.png"
              alt="web-development"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;