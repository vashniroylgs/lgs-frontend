import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import mendix from "../images/mendix.jpg"
import polarian from "../images/polarian.jpg";
import salesforce from "../images/salesforce.jpg";
import mobile from "../images/mobile.jpg";
import webdesign from "../images/webdesign.jpg";
import marketing from "../images/digitalmarketing.jpg"

const Images = [
  {
    backgroundImage: mendix,
  },
  {
    backgroundImage:
      polarian,
  },
  
  {
    backgroundImage:
      salesforce,
  },
  {
    backgroundImage:
      marketing,
  },
];

class ImageSlider extends Component {
  render() {
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
      <div className="image-main-container">
        <Slider {...settings}>
          {Images.map((slide, index) => (
            <div className="image-slide " key={index}>
              <img
                className="image-slider-image"
                src={slide.backgroundImage}
                alt={`slide${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;