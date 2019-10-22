import React from 'react';
import "../stylesheets/Nav.css";

export default function Nav() {
  return (
    <nav>
        <div className="logo" >
            <img src="images/logo3.png" alt="Curious Connect Logo"/>
        </div>
        {/* <div className="hamburger">
            <button className="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div> */}

        <ul className="nav-list">
            <li className="nav-item">
                <a className="nav-link" href="#adn">
                    Notre Mission
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#appli">
                    L'App
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#communauté">
                    La Communauté
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#team">
                    La Dream Team
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#partenaires">
                    Les Supers Curieux
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#recompenses">
                    Nos Récompenses
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">
                    Rejoignez-nous !
                </a>
            </li>
        </ul>
    </nav>
  )
}
