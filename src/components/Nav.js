import React, { Component } from 'react'
import "../stylesheets/Nav.css";
import MediaQuery from 'react-responsive'

export default class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hamburgerMenuDisplayed: true,
      hamburgerMenuOpen: false
    }

    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this)

  }

  toggleHamburgerMenu () {
    this.setState({hamburgerMenuOpen: !this.state.hamburgerMenuOpen})
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar--bold navbar-light">
        <div className="container">
          {/* Brand/Logo */}
          <img className="nav-logo" src="images/old_images/logo3.png" style={{width: 70, height: 67}} alt="logo Curious Connect"/>

          <MediaQuery minDeviceWidth={800}>
            {/* Navbar links */}
            <div className="navbar-menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#mission">
                    Notre Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    L'Equipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#partners">
                    Les supers curieux
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rewards">
                    Nos récompenses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Le Curious Connect Club
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- End of Navbar links  --> */}
          </MediaQuery>

          <MediaQuery maxDeviceWidth={800}>
            <span style={{fontSize:"30px", cursor:"pointer"}} 
            className={this.state.hamburgerMenuOpen ? "hamburger-menu-closed" : "hamburger-menu"} 
            onClick={this.toggleHamburgerMenu}>
              &#9776;
            </span>

            <div className={this.state.hamburgerMenuOpen ? "close-btn" : "close-btn-hidden"} 
            onClick={this.toggleHamburgerMenu}>
              &times;
            </div>

            <div className={this.state.hamburgerMenuOpen ? "mobile-nav" : "hidden-mobile-nav"} >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#mission" onClick={this.toggleHamburgerMenu}>
                    Notre Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team" onClick={this.toggleHamburgerMenu}>
                    L'Equipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#partners" onClick={this.toggleHamburgerMenu}>
                    Les supers curieux
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rewards" onClick={this.toggleHamburgerMenu}>
                    Nos récompenses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" onClick={this.toggleHamburgerMenu}>
                    Le Curious Connect Club
                  </a>
                </li>
              </ul>
            </div>
          </MediaQuery>

        </div>
        {/* <!-- End of navbar container --> */}
      </nav>
    )
  }
}
