import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../stylesheets/Swiper.css"

export default class Swiper extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      cssEase: "linear",
      fade:true 
    };
    return (
      <div className="withBg">
        <Slider {...settings}>
          <div>
            <h3 class="heading heading-xl strong-700 c-white animated" data-animation-in="zoomIn" data-animation-onetime="false" data-animation-delay="200">
              <span style={{opacity: 0.9}}>Vous donnez aux jeunes décrocheurs les clés pour réussir ?</span>
            </h3>
          </div>
          <div>
            <h3 class="heading heading-xl strong-700 c-white animated" data-animation-in="zoomIn" data-animation-onetime="false" data-animation-delay="200">
              <span style={{opacity: 0.9}}>L'app Curious Connect est faite pour vous !</span>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}