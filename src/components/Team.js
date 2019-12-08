import React from 'react';
import "../stylesheets/Team.css";

export default function Team() {
  return (
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
  )
}
