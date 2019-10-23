import React from 'react';
import "../stylesheets/Mission.css";

export default function Mission() {
  return (
    <section className="Mission">
      <div className="section-main">
        <div className="section-content">
          <h2 className="section-title">
            Notre Mission
          </h2>
          <p className="section-description">
            Accompagner les jeunes des Quartiers Prioritaires de la Ville en décrochage scolaire vers le retour en formation grâce à notre application d'e-learning personnalisée.
          </p>
        </div>
      </div>
      <div className="section-sub-all">
        <div className="section-sub">
          <img src="images/point1.png" alt=""/>
          <h3 className="section-sub-title">
            Une plateforme unique pour un parcours sur mesure
          </h3>
          <p className="section-sub-description">
            Curious Connect centralise les ressources et formations accessibles localement aux jeunes pour les suivre tout au long de leur réinsertion.
          </p>
        </div>
        <div className="section-sub">
          <img src="images/point2.png" alt=""/>
          <h3 className="section-sub-title">
            Une solution mobile 100% jeune et dynamique
          </h3>
          <p className="section-sub-description">
            Curious Connect est une solution digitale gamifiée et innovante faite par des jeunes engagé.e.s pour des jeunes fragilisé.e.s.
          </p>
        </div>
        <div className="section-sub">
          <img src="images/point3.png" alt=""/>
          <h3 className="section-sub-title">
            Une communauté connectée
          </h3>
          <p className="section-sub-description">
            Curious Connect place les jeunes au sein d'une communauté d’acteurs associatifs, publics et privés engagés pour la réinsertion des jeunes et l’accès aux formations de demain.
          </p>
        </div>
      </div>
    </section>
  )
}
