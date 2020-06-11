import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../stylesheets/Header.css";

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
      fade: true,
    };
    return (
      <div className="container mt-5">
        <div className="row cols-xs-space cols-md-space cols-sm-space">
          <div className="col-lg-6">
            <div style={{ height: "600px" }} className="frontImage"></div>
          </div>
          <div className="col-lg-6">
            <div className="container">
              <div className="section-title section-title--style-1 text-center mb-2">
                <h3 className="section-title-inner ">
                  <span>Bienvenue dans l'Accélérateur d'Alternance</span>
                </h3>
                <span className="section-title-delimiter clearfix d-none"></span>
              </div>
            </div>
            <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
              <p style={{ fontWeight: "400" }} className="line-height-1_8">
                <span className="bold">
                  Trouve ton entreprise + la formation qui te correspond !
                </span>{" "}
                <br /> <br />
                <b>Pour qui ?</b> <br /> Les jeunes qui cherchent une alternance
                et disponibles pour se former dans notre école partenaire
                l’Efrei Paris dès septembre 2020. 2 formations de 1 an sont
                ouvertes pour obtenir ton Bac+3 : - Bachelor Marketing Digital
                et Innovation - Bachelor Concepteur développeur
                <br />
                <br /> <b>Comment ? </b>
                <br />
                <li>
                  {/* 2 semaines de programme accéléré pour booster ta candidature */}
                </li>
                <li> 1 campagne de 300-500 candidatures spontanées </li>
                <li> du coaching individuel personnalisé pendant 1 mois </li>
                <br />
                <br />
                <b>Date de l’événement :</b> semaines du 22 et 29 juin 2020
                <br />
                <b>Lieu : </b> 100% à distance depuis chez toi !
              </p>
            </div>
          </div>
        </div>

        {/* <div className="withBg">

        <Slider {...settings} style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <div>
            <h3 className="heading heading-h3 strong-700 c-white">
              <span style={{ opacity: 0.9 }}>Curious Connect accélère la Carrière de Jeunes Talents en Alternance</span>
            </h3>
          </div>
          <div>
            <h3 className="heading heading-h3 strong-700 c-white">
              <span style={{ opacity: 0.9 }}>Nous accompagnons Entreprises, Ecoles et Alternants vers l'excellence</span>
            </h3>
          </div>
        </Slider>
    </div> */}
      </div>
    );
  }
}
