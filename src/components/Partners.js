import React, { Component } from "react";
import Slider from "react-slick";

export default class Partners extends Component {
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
                <img src="images/old_images/partner1.png" style={{margin:"auto"}} alt="photo de partenaire"/>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="client-logo client-logo--style-3 img-responsive" style={{textAlign:"center"}}>
                <img src="images/old_images/partner2.png" style={{margin:"auto"}} alt="photo de partenaire"/>
              </div>
          </div>
          <div className="swiper-slide">
              <div className="client-logo client-logo--style-3 img-responsive" style={{textAlign:"center"}}>
                <img src="images/old_images/partner3.png" style={{margin:"auto"}} alt="photo de partenaire"/>
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}