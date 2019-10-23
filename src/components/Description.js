import React from 'react';
import "../stylesheets/Description.css";

export default function Description() {
  return (
    <div className="Description">
      <div className="section-main">
        <div className="section-content">
          <h2 className="section-title">
            L'App
          </h2>
          <p className="section-description">
            Une interface simple, accessible et gratuite pour le jeune qui peut :
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
      </div>
    </div>
  )
}
