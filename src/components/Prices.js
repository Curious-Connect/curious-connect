import React, { Component } from "react";
import Slider from "react-slick";

export default class Prices extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="swiper-slide">
              <div className="client-logo client-logo--style-3 img-responsive" style={{textAlign:"center"}}>
                <img src="images/old_images/2_without_bg.png" style={{margin:"auto"}} alt="photo de prix"/>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="client-logo client-logo--style-3 img-responsive" style={{textAlign:"center"}}>
                <img src="images/old_images/3_without_bg.png" style={{margin:"auto"}} alt="photo de prix"/>
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}