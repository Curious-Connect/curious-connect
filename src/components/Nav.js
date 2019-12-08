import React from 'react';
import "../stylesheets/Nav.css";

export default function Nav() {
  return (
    // <nav>
    //   <div className="logo" >
    //       <img src="images/logo3.png" alt="Curious Connect Logo"/>
    //   </div>
    //   <ul className="nav-list">
    //       <li className="nav-item">
    //           <a className="nav-link" href="#adn">
    //               Notre Mission
    //           </a>
    //       </li>
    //       <li className="nav-item">
    //           <a className="nav-link" href="#team">
    //               L'Equipe
    //           </a>
    //       </li>
    //       <li className="nav-item">
    //           <a className="nav-link" href="#partners">
    //               Les Supers Curieux
    //           </a>
    //       </li>
    //       <li className="nav-item">
    //           <a className="nav-link" href="#rewards">
    //               Nos Récompenses
    //           </a>
    //       </li>
    //       <li className="nav-item">
    //           <a className="nav-link" href="#contact">
    //               Curious Connect Club
    //           </a>
    //       </li>
    //   </ul>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar--bold navbar-light">
      <div className="container">
        {/* Brand/Logo */}
        <img src="images/old_images/logo3.png" style={{width: 70, height: 67}} alt="logo Curious Connect"/>
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
              <a className="nav-link" href="#mission">
                Notre Mission
              </a>
            </li>
            <li className="nav-item dropdown megamenu">
              <a className="nav-link" href="#team">
                L'Equipe
              </a>
            </li>
            <li className="nav-item dropdown megamenu">
              <a className="nav-link" href="#partners">
                Les supers curieux
              </a>
            </li>
            <li className="nav-item dropdown megamenu">
              <a className="nav-link" href="#rewards">
                Nos récompenses
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
  )
}
