import React from 'react';
import "../stylesheets/Nav.css";

export default function Nav() {
  return (
    <nav>
      <a className="logo" >
        <img src="images/logo3.png" alt="Curious Connect Logo"/>
      </a>
      <div className="d-inline-block">
          <button className="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
              </span>
          </button>
      </div>

      <div className="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">
          <ul className="navbar-nav">
              <li className="nav-item dropdown megamenu">
                  <a className="nav-link" href="#adn">
                      Notre ADN
                  </a>
              </li>
              <li className="nav-item dropdown megamenu">
                  <a className="nav-link" href="#appli">
                      Ton App
                  </a>
              </li>
              <li className="nav-item dropdown megamenu">
                  <a className="nav-link" href="#démo">
                      La Démo
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
                  <a className="nav-link" href="#contact">
                      Connecte-moi !
                  </a>
              </li>
          </ul>
      </div>
    </nav>
  )
}
