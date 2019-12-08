import React, {Component} from 'react';
import Nav from "../components/Nav";
import Mission from "../components/Mission";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Rewards from "../components/Rewards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../stylesheets/old_stylesheets/application.css"
import "../stylesheets/old_stylesheets/boomerang.min.css"
import "../stylesheets/old_stylesheets/bootstrap.min.css"
import "../stylesheets/old_stylesheets/hamburgers.min.css"
import "../stylesheets/Home.css"

export default function Home() {
  return (
    <div classNameName="Home">
      <div classNameName="body-wrap">
        <div id="st-container" className="st-container">
          <div className="st-pusher">
            <div className="st-content">
              <div className="st-content-inner">
                <Nav />
                <section className="header">
                  <Header />
                  <a href="#contact">
                    <div className="btn btn-styled btn-lg btn-base-2 btn-shadow strong-600 call-action">Rejoignez le Curious Connect Club</div>
                  </a>
                </section>
                <Mission />
                <Team />
                <Partners />
                <Rewards />
                <Contact />
                <Footer />
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
