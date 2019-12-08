import React, { Component } from "react";
import Slider from "react-slick";
import "../stylesheets/Partners.css"

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

      <section className="slice-lg sct-color-1" id="partners">
        <div className="sct-inner container">
          <div className="section-title section-title--style-1 text-center mb-2">
            <h3 className="section-title-inner ">
              <span>Les Supers Curieux</span>
            </h3>
            <span className="section-title-delimiter clearfix d-none"></span>
          </div>
          <span className="clearfix"></span>
          <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
            <p className="text-lg line-height-1_8">
              Parce qu’ils nous soutiennent et nous poussent vers le haut, un GRAND merci !
            </p>
          </div>
          <span className="space-xs-xl"></span>
          <section className="mobile-swiper">
            <Slider {...settings}>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner1.png" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner2.png" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner3.png" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner4.png" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner5.png" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner6.png" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="partner-img">
                  <img src="images/old_images/partner7.jpeg" style={{margin:"auto"}} alt="photo de partenaire"/>
                </div>
              </div>
            </Slider>
          </section>
        </div>
      </section>
    );
  }
}