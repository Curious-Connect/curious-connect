import React from 'react';
import "../stylesheets/Team.css";

export default function Team() {
  return (
    <div className="Team">
      <div className="section-main">
        <div className="section-content">
          <h2 className="section-title">
            La Dream Team
          </h2>
          <p className="section-description">
            Issus des quartiers, notre team de choc veut casser les barrières à l’éducation et au numérique. Parce que le monde de demain appartient aux curieux d’aujourd’hui !
          </p>
        </div>
      </div>
      <div className="section-sub-all">
        <div className="section-sub">
          <img src="images/tatijana5.png" alt=""/>
          <h4 className="section-sub-title">
            Tatijana Rajcic
          </h4>
          <p className="section-sub-description">
            CONTRIBUTRICE CRÉATIVE
          </p>
        </div>
        <div className="section-sub">
          <img src="images/bianca3.png" alt=""/>
          <h4 className="section-sub-title">
            Bianca Schor
          </h4>
          <p className="section-sub-description">
            FONDATRICE ET ENTREPRENEUSE ENGAGÉE
          </p>
        </div>
        <div className="section-sub">
          <img src="images/thomas.png" alt=""/>
          <h4 className="section-sub-title">
            Thomas Casca
          </h4>
          <p className="section-sub-description">
            CONTRIBUTEUR CRÉATIF
          </p>
        </div>
        <div className="section-sub">
          <img src="images/jenny.jpeg" alt=""/>
          <h4 className="section-sub-title">
            Jennifer Phan
          </h4>
          <p className="section-sub-description">
            DÉVELOPPEUSE ENGAGÉE
          </p>
        </div>
      </div>
    </div>
  )
}
