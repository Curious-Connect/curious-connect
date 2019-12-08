import React, {Component} from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Description from "../components/Description";
import Community from "../components/Community";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Swiper from "../components/Swiper";

import "../stylesheets/old_stylesheets/application.css"
import "../stylesheets/old_stylesheets/boomerang.min.css"
import "../stylesheets/old_stylesheets/bootstrap.min.css"
import "../stylesheets/old_stylesheets/hamburgers.min.css"
import "../stylesheets/Home.css"


export default function Home() {
  return (
    <div classNameName="Home">
      
      {/* Main Wrapper */}
      <div classNameName="body-wrap">
          <div id="st-container" className="st-container">
              <div className="st-pusher">
                  <div className="st-content">
                      <div className="st-content-inner">

                          {/* Header */}
                          <div className="header">
                              {/* Navbar */}
                              <nav className="navbar navbar-expand-lg navbar--bold navbar-light bg-default ">
                                  <div className="container navbar-container">
                                      {/* Brand/Logo */}
                                      <a className="navbar-brand">
                                        <img src="images/old_images/logo3.png" style={{width: 70, height: 67}} alt="logo Curious Connect"/>
                                      </a>
                                      {/* Navbar toggler */}
                                      <div className="d-inline-block">
                                          <button className="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                                              <span className="hamburger-box">
                                                  <span className="hamburger-inner"></span>
                                              </span>
                                          </button>
                                      </div>


                                      {/* Navbar links */}
                                      <div className="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">

                                          <ul className="navbar-nav">
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#adn">
                                                      Notre Mission
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#team">
                                                      L'Equipe
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#contact">
                                                      Le Curious Connect Club
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                      {/* <!-- End of Navbar links  --> */}
                                  </div>
                                  {/* <!-- End of navbar container --> */}
                              </nav>
                              {/* <!-- end of nav --> */}
                          </div>
                          {/* <!-- ------------------------ END OF HEADER ------------------------ --> */}


                          {/* <!-- ------------------------ SWIPER ------------------------ --> */}
                          <section className="swiper">
                            <Swiper />
                              {/* <!-- End of swiper container --> */}
                          </section>

                          <a href="#contact">
                            <div className="btn btn-styled btn-lg btn-base-2 btn-shadow strong-600 call-action">Rejoignez le Curious Connect Club</div>
                          </a>

                          {/* <!-- ------------------------ END OF SWIPER ------------------------ --> */}

                          {/* <!-- ------------------------ OUR VISION ------------------------ --> */}
                          <section className="slice-lg sct-color-1" id="adn">
                              <div className="container">

                                  <div className="section-title section-title--style-1 text-center mb-2">
                                      <h3 className="section-title-inner ">
                                          <span>Notre Mission</span>
                                      </h3>
                                      <span className="section-title-delimiter clearfix d-none"></span>
                                  </div>

                                  <span className="clearfix"></span>

                                  <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                      <p className="text-lg line-height-1_8">
                                        <strong>Faire rimer Alternance avec excellence.</strong> <br></br> Curious Connect est une start-up Tech basée en Île-de-France. Notre mission est de lancer la carrière de jeunes talents dans les entreprises de demain en alternance. 
                                      </p>
                                  </div>

                                  <span className="space-xs-xl"></span>

                                  <div className="row cols-xs-space cols-md-space cols-sm-space">
                                      <div className="col-lg-4">
                                          <div className="icon-block icon-block--style-2-v1 text-center">
                                              <img className="block-icon" src="images/old_images/point1.png" alt="Une icône qui représente l'ajustement"/>
                                              <h2 className="heading heading-4 strong-500" style={{color: "#E61D25"}}>Pour les Centres de Formation (CFA)</h2>
                                              <p className="px-4" style={{color: "#818a91"}}>
                                                  Notre programme accéléré de placement en entreprise allie du coaching personnalisé et des candidatures spontanées automatisées.
                                              </p>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="icon-block icon-block--style-2-v1 text-center">
                                              <img className="block-icon" src="images/old_images/point2.png" alt="Une icône fun d'une licorne qui apprend"/>
                                              <h2 className="heading heading-4 strong-500 " style={{color: "#2FBEB7"}}>Pour les Entreprises</h2>
                                              <p className="px-4" style={{color: "#818a91"}}>
                                                Notre solution de matching sur mesure et de suivi numérique des progrès vous garantit des alternants motivés et une intégration réussie.
                                              </p>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="icon-block icon-block--style-2-v1 text-center">
                                              <img className="block-icon" src="images/old_images/point3.png" alt="Une icône de Wifi"/>
                                              <h2 className="heading heading-4 strong-500 " style={{color: "#363390"}}>Pour les Jeunes Talents</h2>
                                              <p className="px-4" style={{color: "#818a91"}}>
                                                Notre accompagnement inclut des ressources en ligne adaptées et une visibilité sur les réseaux professionnels pour mieux vous connecter aux opportunités.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF 3 POINTS ------------------------ --> */}    

                          {/* <!-- ------------------------ OUR TEAM ------------------------ --> */}
                          <section className="slice-lg sct-color-4" id="team">
                              <div className="container">
                                  <div className="section-title section-title--style-1 text-center mb-2">
                                      <h3 className="section-title-inner " style={{color:"white"}}>
                                          <span>L'Equipe</span>
                                      </h3>
                                      <span className="section-title-delimiter clearfix d-none"></span>
                                  </div>

                                  <span className="clearfix"></span>

                                  <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                      <p className="text-lg line-height-1_8" style={{color:"#b7c1c8"}}>
                                        Notre équipe issue de la diversité veut casser les barrières à l’éducation grâce au
                                        numérique pour tous les talents, où qu'ils se trouvent.
                                      </p>
                                  </div>

                                  <span className="space-xs-xl"></span>

                                  <div className="row cols-xs-space cols-sm-space cols-md-space" style={{justifyContent:"center;"}}>
                                      <div className="col-lg-3">
                                          <div className="block block--style-4">
                                              <div className="block block-image">
                                                  <div id="essai">
                                                    <img src="images/old_images/tatijana5.png" className="block-icon circle imageo" alt="photo Tatijana"/>
                                                    <img src="images/old_images/linkedin_icon.png" className="middle" alt="icone Linkedin" onClick="window.open('https://www.linkedin.com/in/tatijana-rajcic-692389139')"/>
                                                  </div>
                                              </div>
                                              <div className="block-body" style={{textAlign:"center"}}>
                                                  <h3 className="heading heading-5 strong-500" style={{color:"white"}}>Tatijana Rajcic</h3>
                                                  <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">Contributrice créative</h4>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-3">
                                          <div className="block block--style-4">
                                              <div className="block block-image">
                                                  <div id="essai">
                                                    <img src="images/old_images/bianca3.png" className="block-icon circle imageo" alt="photo Bianca"/>
                                                    <img src="images/old_images/linkedin_icon.png" className="middle" alt="icone Linkedin" onClick="window.open('https://www.linkedin.com/in/bianca-schor-443a10102')"/>
                                                  </div>
                                              </div>
                                              <div className="block-body" style={{textAlign:"center"}}>
                                                  <h3 className="heading heading-5 strong-500" style={{color:"white"}}>Bianca Schor</h3>
                                                  <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">Fondatrice et entrepreneuse engagée</h4>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-3">
                                          <div className="block block--style-4">
                                              <div className="block block-image">
                                                  <div id="essai">
                                                    <img src="images/old_images/rafael4.png" className="block-icon circle imageo" alt="photo Raphaël"/>
                                                    <img src="images/old_images/linkedin_icon.png" className="middle" alt="icone Linkedin" onClick="window.open('https://www.linkedin.com/in/rafaelcoyaud/')"/>
                                                  </div>
                                              </div>
                                              <div className="block-body" style={{textAlign:"center"}}>
                                                  <h3 className="heading heading-5 strong-500" style={{color:"white"}}>Rafaël Coyaud</h3>
                                                  <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">Expert Data</h4>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-3">
                                          <div className="block block--style-4">
                                              <div className="block block-image">
                                                  <div id="essai">
                                                    <img src="images/old_images/thomas_with_BG.png" className="block-icon circle imageo" alt="photo Thomas"/>
                                                    <img src="images/old_images/linkedin_icon.png" className="middle" alt="icone Linkedin" onClick="window.open('https://www.linkedin.com/in/thomas-casca-7a2a96175')"/>
                                                  </div>
                                              </div>
                                              <div className="block-body" style={{textAlign:"center"}}>
                                                  <h3 className="heading heading-5 strong-500" style={{color:"white"}}>Thomas Casca</h3>
                                                  <h4 className="heading heading-xs strong-400 text-uppercase letter-spacing-2 c-gray-light">Contributeur créatif</h4>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF OUR TEAM ------------------------ --> */}

                          {/* <!-- ------------------------ OUR PARTNERS ------------------------ --> */}
                          <section className="slice-lg sct-color-1" id="partenaires">
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
                                    <Partners />
                                  </section>

                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF OUR PARTNERS ------------------------ --> */}

                          {/* <!-- ------------------------ OUR REWARDS ------------------------ --> */}
                          <section className="slice-lg sct-color-4" id="recompenses">
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
                                    <Prices />
                                  </section>

                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF OUR REWARDS ------------------------ --> */}

                          {/* <!-- ------------------------ CALL TO ACTION ------------------------ --> */}
                          <section className="slice sct-color-4" id="contact">
                            <Contact />
                          </section>
                          {/* // <!-- ------------------------ END OF CALL TO ACTION ------------------------ --> */}


                          {/* <!-- FOOTER --> */}
                          <footer id="footer" className="footer" style={{backgroundColor: "black"}}>
                              <div className="footer-top">
                                  <div className="container">
                                      <div className="row cols-xs-space cols-sm-space cols-md-space">
                                          <div className="col-lg-6">
                                              <div className="col">
                                                  <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                                      Get in touch
                                                  </h4>

                                                  <ul className="social-media social-media--style-4-v4">
                                                      <li>
                                                          <a href="https://www.linkedin.com/company/curious-connect/about/?viewAsMember=true" className="linkedin" target="_blank" data-toggle="tooltip" data-original-title="Linkedin">
                                                              <i className="fa fa-linkedin"></i>
                                                          </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col-lg-6" style={{fontSize: "12px"}}>
                                              Copyright &copy; 2019 Curious Connect
                                              Icons made by <a href="https://www.freepik.com/" title="Freepik" style={{color:"rgba(255,255,255,0.8)"}}>Freepik</a> & <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26" style={{color:"rgba(255,255,255,0.8)"}}>Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon" style={{color:"rgba(255,255,255,0.8)"}}>www.flaticon.com</a> (licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" style={{color:"rgba(255,255,255,0.8)"}}>CC 3.0 BY</a>) & <a href="https://icons8.com/icon/101725/reading-unicorn" style={{color:"rgba(255,255,255,0.8)"}}>Icons8</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </footer>

                      </div>
                      {/* // <!-- END: st-content-inner--> */}
                  </div>
                  {/* // <!-- END: st-content --> */}
              </div>
              {/* // <!-- END: st-pusher --> */}
          </div>
          {/* // <!-- END: st-container --> */}
      </div>
      {/* // <!-- END: body-wrap --></div> */}
    </div>
  )
}
