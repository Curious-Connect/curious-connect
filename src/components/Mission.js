import React from 'react';
import "../stylesheets/Mission.css";

export default function Mission() {
  return (
    <section className="slice-lg sct-color-1" id="mission">
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
  )
}
