import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./index.css"; // Create a CSS file to style the slider (Slider.css)

import { Slide, Container, Heading, Para, Button } from "./styledComponents";


class ReactSlick extends Component {

  render() {

    const slides = [

      {

        title: "Welcome to labyrinth global solutions",

        content: "With over 20 years of IT and development experiance",

        buttonText: "ContactUs",
        index:1,

        backgroundImage:

          "https://img.freepik.com/premium-vector/futuristic-planet-earth-glowing-map-square-dots-global-network-connection_185386-162.jpg?w=1380", 

      },

      {

        title: "Build Great Apps Fast",

        content: "Build Great Apps Fast",

        buttonText: "ContactUs",
        index: 2,
        backgroundImage:

          "https://www.labyrinthglobalsolutions.com/assets/img/home%201.png", 

      },

      {

        title: "Get the best applications development solutions here",

        content:

          "we are team of talented designers making websites with Bootstrap",

        buttonText: "ContactUs",
        index: 3,

        backgroundImage:

          "https://miro.medium.com/v2/resize:fit:1400/1*8bH8gCSNvHdHelHgEsnEFg.jpeg", 

      },

    ];

    const settings = {

      dots: true,

      infinite: true,

      speed: 2000,

      autoplay: true,

      autoplaySpeed: 5000,

      slidesToShow: 1,

      slidesToScroll: 1,

    };


    return (
      <div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Slide imageUrl={slide.backgroundImage} key={index}>
              <Container>
                <Heading>{slide.title}</Heading>
                <Para>{slide.content}</Para>
                <div>
                  <Button>{slide.buttonText}</Button>
                </div>
              </Container>
            </Slide>
          ))}
        </Slider>
      </div>
    );
  }
}




export default ReactSlick;