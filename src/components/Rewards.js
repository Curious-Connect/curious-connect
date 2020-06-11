import React, { Component } from "react";
import Slider from "react-slick";

export default class Rewards extends Component {
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
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
          }
        }
      ]
    };
    return (

      <section className="slice-lg sct-color-4" id="rewards">
        <div className="sct-inner container">
          <div className="section-title section-title--style-1 text-center mb-2">
            <h3 className="section-title-inner " style={{color:"white"}}>
              <span>Nos Récompenses</span>
            </h3>
            <span className="section-title-delimiter clearfix d-none"></span>
          </div>
          <span className="clearfix"></span>
          <span className="space-xs-xl"></span>
          <section className="mobile-swiper">
            <Slider {...settings}>
              <div className="swiper-slide">
                <div className="client-logo client-logo--style-3 img-responsive" style={{textAlign:"center"}}>
                  <img src="images/2_without_bg.png" style={{margin:"auto"}} alt="photo de prix"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo client-logo--style-3 img-responsive" style={{textAlign:"center"}}>
                  <img src="images/old_images/3_without_bg.png" style={{margin:"auto"}} alt="photo de prix"/>
                </div>
              </div>
            </Slider>
          </section>
        </div>
      </section>
    );
  }
}