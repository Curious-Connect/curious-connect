import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../stylesheets/Swiper.css"

export default class Header extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 300,
      cssEase: "linear",
      fade:true
    };
    return (
      <div className="withBg"> 
        <Slider {...settings} style={{display:"flex", alignItems:"center", height:"100%"}}>
          <div>
            <h3 className="heading heading-xl strong-700 c-white">
              <span style={{opacity: 0.9}}>Curious Connect accélère la Carrière de Jeunes Talents en Alternance</span>
            </h3>
          </div>
          <div>
            <h3 className="heading heading-xl strong-700 c-white">
              <span style={{opacity: 0.9}}>Nous accompagnons Entreprises, CFA et Alternants vers l'excellence</span>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}