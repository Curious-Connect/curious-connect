import React from "react";
import "../stylesheets/SocialMedia.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="footer" style={{ backgroundColor: "black" }}>
      <div className="footer-top">
        <div className="container">
          <div className="row cols-xs-space cols-sm-space cols-md-space">
            <div className="col-lg-6">
              <div className="col">
                <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                  Get in touch
                </h4>
                <ul className="social-media">
                  <li>
                    <a href="https://www.linkedin.com/company/curious-connect/about/?viewAsMember=true">
                      <img src="images/linkedin.png" alt="linkedin icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://mobile.twitter.com/curious_connect">
                      <img src="images/twitter.png" alt="twitter icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/curious_connect">
                      <img src="images/instagram.png" alt="instagram icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" style={{ fontSize: "12px" }}>
              <Link to="/privacy">Confidentialité et CGU</Link>
              <br />
              Copyright &copy; 2020 Curious Connect / Icons made by{" "}
              <a
                href="https://www.freepik.com/"
                title="Freepik"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Freepik
              </a>{" "}
              &{" "}
              <a
                href="https://www.flaticon.com/authors/icongeek26"
                title="Icongeek26"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Icongeek26
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                www.flaticon.com
              </a>{" "}
              (licensed by{" "}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                CC 3.0 BY
              </a>
              ) &{" "}
              <a
                href="https://icons8.com/icon/101725/reading-unicorn"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Icons8
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
