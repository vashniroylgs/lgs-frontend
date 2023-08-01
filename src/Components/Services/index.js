import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
            <h2 className="services-heading">Polarion ALM</h2>
            <p>
              We are a proud partner of Siemens for implementing solutions on
              it’s cutting edge technology Polarion ALM. We provide a range of
              Polarion ALM services including....
              {/* <Link to="/polarianalm">Know More</Link> */}
            </p>
            <img
              src="https://www.labyrinthglobalsolutions.com/assets/img/polarion/siemens.png"
              alt=""
              height={30}
              width={150}
            />
          </div>

          <div class="box red services-reval">
            <h2 className="services-heading">SAAS & Cloud Solutions</h2>
            <p>
              SaaS and the cloud have revolutionized the software industry by
              offering businesses a cost-effective and flexible approach to
              software usage, ensuring automatic updates, data backups, and
              enhanced collaboration possibilities...
              {/* <Link to="/saascloud">Know More</Link> */}
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5256/5256916.png"
              alt=""
              height={80}
              width={80}
            />
          </div>

          <div class="box box-down blue services-reval">
            <h2 className="services-heading">Integrity Lifecycle Manager</h2>
            <p>
              We also do implementations on Windchill RV&S (Requirements
              Validation & Source) formly known as (PTC Integrity Lifecycle
              Manager). Some of the services we provide on this ALM tool are...
              {/* <Link to="/ptcintegrity">Know More</Link> */}
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
            <h2 className="services-heading">Web & Mobile App Development</h2>
            <p>
              We love working on complex web applications and delivering easy to
              use, beautiful products. And we also enjoy creating simple-to-use,
              and good-looking apps for iOS and Android devices....
              {/* <Link to="/webandmobileapp">Know More</Link> */}
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