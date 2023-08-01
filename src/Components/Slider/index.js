// import React, { Component } from "react";
// import {Link} from 'react-router-dom'
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

// import "./index.css"; // Create a CSS file to style the slider (Slider.css)

// import { Slide, Container, Heading, Para, Button } from "./styledComponents";



// class ReactSlick extends Component {

//   render() {

//     const slides = [

//       {

//         title: "Welcome to labyrinth global solutions",

//         content: "With over 20 years of IT and development experiance",

//         buttonText: "ContactUs",




//         // Replace with the actual image path

//       },

//       {

//         title: "Build Great Apps Fast",

//         content: "Build Great Apps Fast",

//         buttonText: "ContactUs",

//         // Replace with the actual image path

//       },

//       {

//         title: "Get the best applications development solutions here",

//         content:

//           "we are team of talented designers making websites with Bootstrap",

//         buttonText: "ContactUs",

//         // Replace with the actual image path

//       },

//     ];

//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 2000,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       pauseOnHover: false,
//     };

//     return (
//       <div className="slider-main-container">
//         <Slider {...settings} >
//           {slides.map((slide, index) => (
//             <Slide key={`index${index}`}>
//               <Container>
//                 <Heading>{slide.title}</Heading>
//                 <Para>{slide.content}</Para>
//                 <div>
//                   <Button className="btn btn-primary">
//                     <Link className="slider-contact-link" to='/contactus'>{slide.buttonText}</Link> 
//                   </Button>
//                 </div>
//               </Container>
//             </Slide>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// }



// export default ReactSlick;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Create a CSS file to style the slider (Slider.css)

class ReactSlick extends Component {
  render() {
    const slides = [
      {
        title: "Mendix",
        content: "World's No#1 Low Code Platform  Build Your Apps 5X Faster LGS Asia's Preferred Development Partner",
        buttonText: "ContactUs",

        // Replace with the actual image path
      },
      {
        title: "Polarion",
        content: "World's No#1 Application Lifecycle Management Tool One Stop Solution To Streamline, Automate and Optimize Development Processes",
        buttonText: "ContactUs",
        // Replace with the actual image path
      },
      {
        title: "Salesforce",
        content: "World's No#1 CRM Software Save Time, Money and give your Business the attention it deserves",
        buttonText: "ContactUs",
        // Replace with the actual image path
      },
      {
        title: "Web Design & Development",
        content: "Unleash the Power of Innovation with Our Custom Web Design & Development Solutions Transform Your Vision into Reality with Our Expert Web Developers!",
        buttonText: "ContactUs",
        // Replace with the actual image path
      },
      {
        title: "Mobile Application",
        content: "Building Apps that WOW - Elevate Your User Experience Your Dreams, Our Code - Together, We Build Amazing Apps!",
        buttonText: "ContactUs",
        // Replace with the actual image path
      },
      {
        title: "Digital Marketing",
        content:
          "Drive More Traffic, Generate More Leads, and Boost Sales with Us! Harness the Full Potential of Digital Marketing for Explosive Growth",
        buttonText: "ContactUs",
        // Replace with the actual image path
      },
    ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: false,
    };

    return (
      <div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="slide" key={`index${index}`}>
              <div className="slider-container">
                <h1 className="slider-heading">{slide.title}</h1>
                <p className="slider-paragraph">{slide.content}</p>
                <div>
                  <button className="btn btn-primary slider-button">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ReactSlick;