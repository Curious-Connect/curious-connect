import React, { Component } from "react";
import Nav from "../components/Nav";
import Mission from "../components/Mission";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Rewards from "../components/Rewards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ReactGA from "react-ga";

import "../stylesheets/old_stylesheets/application.css";
import "../stylesheets/old_stylesheets/boomerang.min.css";
import "../stylesheets/old_stylesheets/bootstrap.min.css";
import "../stylesheets/old_stylesheets/hamburgers.min.css";
import "../stylesheets/Home.css";

export default function Home() {
  return (
    <div classNameName="Home">
      <div classNameName="body-wrap">
        <div id="st-container" className="st-container">
          <div className="st-pusher">
            <div className="st-content">
              <div className="st-content-inner">
                {/*<a href="#contact"> <div class="alert alert-danger" role="alert">
                  ⚠️📢 Fin des inscriptions <b style={{ color: "#E61D25" }}>aujourd'hui à minuit!</b>
  </div> </a>*/}
                <Nav />
                <section className="header">
                  <Header />
                  {/*<a onClick={() =>
                    ReactGA.event({
                      category: "more info",
                      action: "user clicked first button",
                    })} href="#contact">
                    <div className="btn btn-styled btn-lg btn-base-2 btn-shadow strong-600 call-action">Inscris-toi au programme !</div>
                  </a>*/}
                  <div>
                    <div
                      onClick={() => {
                        ReactGA.event({
                          category: "interested company",
                          action: "a company opened the inscription form",
                        });
                        window.open(
                          "https://airtable.com/shr7oQRclG6pOitQp",
                          "_blank"
                        );
                      }}
                      className="btn btn-styled btn-lg btn-base-2 btn-shadow strong-600 call-action"
                    >
                      Recrutez vos futurs Talents !
                    </div>
                  </div>
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
  );
}
