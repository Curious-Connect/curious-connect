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
                                                  <a className="nav-link" href="#appli">
                                                      L'App
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#communauté">
                                                      La Communauté
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#team">
                                                      La Dream Team
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#partenaires">
                                                      Les Supers Curieux
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#recompenses">
                                                      Nos Récompenses
                                                  </a>
                                              </li>
                                              <li className="nav-item dropdown megamenu">
                                                  <a className="nav-link" href="#contact">
                                                      Rejoignez-nous !
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
                            <div className="btn btn-styled btn-lg btn-base-2 btn-shadow strong-600 call-action">Rejoignez-nous !</div>
                          </a>

                          {/* <!-- ------------------------ END OF SWIPER ------------------------ --> */}

                          {/* <!-- ------------------------ OUR VISION ------------------------ --> */}
                          <section className="slice-lg sct-color-1" id="adn">
                              <div className="container">

                                  <div className="section-title section-title--style-1 text-center mb-2">
                                      <h3 className="section-title-inner transformation">
                                          <span>Notre Mission</span>
                                      </h3>
                                      <span className="section-title-delimiter clearfix d-none"></span>
                                  </div>

                                  <span className="clearfix"></span>

                                  <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                      <p className="text-lg line-height-1_8">
                                          Accompagner les jeunes des Quartiers Prioritaires de la Ville en <span className="underlined">décrochage scolaire</span> vers le
                                          retour en formation grâce à notre <span className="underlined">application d'e-learning</span> personnalisée.
                                      </p>
                                  </div>

                                  <span className="space-xs-xl"></span>

                                  <div className="row cols-xs-space cols-md-space cols-sm-space">
                                      <div className="col-lg-4">
                                          <div className="icon-block icon-block--style-2-v1 text-center">
                                              <img className="block-icon" src="images/old_images/point1.png" alt="Une icône qui représente l'ajustement"/>
                                              <h2 className="heading heading-4 strong-500 transformation" style={{color: "#E61D25"}}>Une plateforme unique pour un parcours sur mesure</h2>
                                              <p className="px-4" style={{color: "#818a91"}}>
                                                  Curious Connect centralise les <span className="underlined">ressources et formations</span> accessibles localement aux jeunes
                                                  pour les suivre tout au long de leur <span className = "underlined">réinsertion</span>.
                                              </p>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="icon-block icon-block--style-2-v1 text-center">
                                              <img className="block-icon" src="images/old_images/point2.png" alt="Une icône fun d'une licorne qui apprend"/>
                                              <h2 className="heading heading-4 strong-500 transformation" style={{color: "#2FBEB7"}}>Une solution mobile 100% jeune et dynamique</h2>
                                              <p className="px-4" style={{color: "#818a91"}}>
                                                Curious Connect est une solution digitale <span className="underlined">gamifiée et innovante</span> faite par des jeunes
                                                engagé.e.s pour des jeunes fragilisé.e.s.
                                              </p>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="icon-block icon-block--style-2-v1 text-center">
                                              <img className="block-icon" src="images/old_images/point3.png" alt="Une icône de Wifi"/>
                                              <h2 className="heading heading-4 strong-500 transformation" style={{color: "#363390"}}>Une communauté connectée</h2>
                                              <p className="px-4" style={{color: "#818a91"}}>
                                                Curious Connect place les jeunes au sein d'une communauté d’acteurs associatifs, publics et
                                                privés engagés pour <span className="underlined">la réinsertion des jeunes</span> et <span className="underlined">l’accès aux formations</span> de
                                                demain.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF 3 POINTS ------------------------ --> */}


                          {/* <!-- ------------------------ THE PRODUCT ------------------------ --> */}


                          <section className="slice-lg sct-color-4" id="appli">
                              <div className="sct-inner container">

                                  <div className="section-title section-title--style-1 text-center mb-2">
                                      <h3 className="section-title-inner transformation" style={{color:"white"}}>
                                          <span>L'App</span>
                                      </h3>
                                      <span className="section-title-delimiter clearfix d-none"></span>
                                  </div>

                                  <span className="clearfix"></span>

                                  <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                      <p className="text-lg line-height-1_8" style={{color:"#b7c1c8"}}>
                                          Une interface simple, accessible et gratuite pour le jeune qui peut :
                                      </p>
                                  </div>

                                  <span className="space-xs-xl"></span>

                                  <div className="row cols-xs-space cols-sm-space align-items-center">

                                      <div className="col-lg-4 col-md-6 col-12">

                                          <div className="icon-block--style-1-v1 block-icon-right">
                                              <img className="block-icon" src="images/old_images/needs.png" alt="Une icône qui représente la récolte de besoins"/>
                                              <div className="block-content">
                                                  <h3 className="heading heading-5 strong-600 transformation" style={{color:"#2FBEB7"}}>Définir ses besoins</h3>
                                                  <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                      Le jeune crée son profil en <span className = "underlined">3 minutes</span> puis se fixe des objectifs avec son référent
                                                  </p>
                                              </div>
                                          </div>

                                          <span className="space-xs-md space-sm-xl"></span>

                                          <div className="icon-block--style-1-v1 block-icon-right">
                                              <img className="block-icon" src="images/old_images/jeux.png" alt="Une icône qui représente la gamification"/>
                                              <div className="block-content">
                                                  <h3 className="heading heading-5 strong-600 transformation" style={{color:"#E61D25"}}>Jouer pour mieux raccrocher</h3>
                                                  <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                      Le jeune est en situation de jeu pour une démarche <span className = "underlined">active et ludique</span> de réinsertion
                                                  </p>
                                              </div>
                                          </div>

                                      </div>

                                      <div className="col-lg-4 col-12 hidden-md-down">
                                          <img className="img-center img-responsive" style={{width:"300px"}} src="final_app.png" alt="Une image de la maquette de l'app"/>
                                      </div>


                                      <div className="col-lg-4 col-md-6 col-12">
                                          <div className="icon-block--style-1-v1">
                                              <img className="block-icon" src="images/old_images/app1c.png" alt="Une icône qui représente le fait de poser des questions"/>
                                              <div className="block-content">
                                                  <h3 className="heading heading-5 strong-600 transformation"  style={{color:"#2FBEB7"}}>Poser toutes ses questions</h3>
                                                  <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                      En un clic le jeune pose ses questions et <span className = "underlined">la communauté y répond</span>
                                                  </p>
                                              </div>
                                          </div>

                                          <span className="space-xs-md space-sm-xl"></span>

                                          <div className="icon-block--style-1-v1">
                                              <img className="block-icon" src="images/old_images/skills.png" alt="Une icône qui représente l(accumulation de skills)"/>
                                              <div className="block-content">
                                                  <h3 className="heading heading-5 strong-600 transformation" style={{color:"#E61D25"}}>Booster ses compétences</h3>
                                                  <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                      Le jeune peut se former <span className = "underlined">directement sur l'app</span> et rapidement <span className="underlined">réserver les évènements</span><span className="underlined">près de chez lui</span>
                                                  </p>
                                              </div>
                                          </div>

                                      </div>

                                  </div>
                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF THE PRODUCT ------------------------ --> */}

                          {/* <!-- ------------------------ COMMUNITY ------------------------ --> */}
                          <section className="slice-lg sct-color-1" id="communauté">
                              <div className="sct-inner container">

                                  <div className="section-title section-title--style-1 text-center mb-2">
                                      <h3 className="section-title-inner transformation">
                                          <span>La Communauté</span>
                                      </h3>
                                      <span className="section-title-delimiter clearfix d-none"></span>
                                  </div>

                                  <span className="clearfix"></span>

                                  <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                      <p className="text-lg line-height-1_8" style={{color:"#818a91"}}>
                                        Une plateforme centralisée pour gagner en visibilité et efficacité. Rejoignez la communauté des acteurs engagés de votre territoire et démultipliez votre
                                        impact, <a href="#contact">avec nous !</a>
                                      </p>
                                  </div>

                                  <div className="col-lg-12 col-12 hidden-md-down">
                                    <img src="images/old_images/community.png" className= "img-center img-responsive" style ={{width:"200px"}} alt="une image qui représente la communauté"/>
                                  </div>

                                  <span className="space-xs-xl"></span>

                                  <div className="row cols-xs-space cols-sm-space align-items-center">

                                      <div className="col-lg-6 col-md-6 col-12">

                                          <div className="icon-block--style-1-v1 block-icon-right">
                                              <img src="images/old_images/app4c.png" className="block-icon" alt="une icône qui représente les échanges"/>
                                              <div className="block-content">
                                                  <h3 className="heading heading-5 strong-600 transformation" style={{color:"#2FBEB7"}}>Echangez avec les jeunes</h3>
                                                  <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                      Echangez directement avec les jeunes via notre mur aux questions
                                                  </p>
                                              </div>
                                          </div>

                                          <span className="space-xs-md space-sm-xl"></span>

                                          <div className="icon-block--style-1-v1 block-icon-right">
                                              <img src="images/old_images/savoir.png" className="block-icon" alt="une icône qui représente le savoir"/>
                                              <div className="block-content">
                                                  <h3 className="heading heading-5 strong-600 transformation" style={{color:"#E61D25"}}>Partagez vos formations</h3>
                                                  <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                    Mettez en ligne vos contenus, ateliers et formations tout format auprès des jeunes que vous
                                                    accompagnez
                                                  </p>
                                              </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="icon-block--style-1-v1">
                                            <img src="images/old_images/visibility.png" className="block-icon" alt="une icône qui représente la visibilité"/>
                                                <div className="block-content">
                                                    <h3 className="heading heading-5 strong-600 transformation"  style={{color:"#2FBEB7"}}>Référencez votre structure</h3>
                                                    <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                      Touchez plus de jeunes avec notre référencement gratuit
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="space-xs-md space-sm-xl"></span>

                                            <div className="icon-block--style-1-v1">
                                                <img src="images/old_images/trace.png" className="block-icon" alt="une icône qui représente le suivi"/>
                                                <div className="block-content">
                                                    <h3 className="heading heading-5 strong-600 transformation" style={{color:"#E61D25"}}>Suivez les jeunes jusqu'au bout</h3>
                                                    <p className="mt-3" style={{color:"#b7c1c8"}}>
                                                        Suivez les jeunes sur le long terme avec notre tableau de bord
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                      </div>
                              </div>
                          </section>
                          {/* <!-- ------------------------ END OF COMMUNITY ------------------------ --> */}

                          {/* <!-- ------------------------ OUR TEAM ------------------------ --> */}
                          <section className="slice-lg sct-color-4" id="team">
                              <div className="container">
                                  <div className="section-title section-title--style-1 text-center mb-2">
                                      <h3 className="section-title-inner transformation" style={{color:"white"}}>
                                          <span>La Dream Team</span>
                                      </h3>
                                      <span className="section-title-delimiter clearfix d-none"></span>
                                  </div>

                                  <span className="clearfix"></span>

                                  <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                      <p className="text-lg line-height-1_8" style={{color:"#b7c1c8"}}>
                                        Issus des quartiers, notre team de choc veut casser les barrières à l’éducation et au
                                        numérique. Parce que le monde de demain appartient aux curieux d’aujourd’hui !
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
                                      <h3 className="section-title-inner transformation">
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
                                      <h3 className="section-title-inner transformation" style={{color:"white"}}>
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
