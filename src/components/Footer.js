import React from 'react';
import "../stylesheets/Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer" style={{backgroundColor: "black"}}>
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
                      <img src="images/old_images/linkedin.png" alt="linkedin icon"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/curious-connect/about/?viewAsMember=true">
                      <img src="images/old_images/twitter.png" alt="twitter icon"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/curious-connect/about/?viewAsMember=true">
                      <img src="images/old_images/instagram.png" alt="instagram icon"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" style={{fontSize: "12px"}}>
              Copyright &copy; 2019 Curious Connect
              Icons made by <a href="https://www.freepik.com/" title="Freepik" style={{color:"rgba(255,255,255,0.8)"}}>Freepik</a> & <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26" style={{color:"rgba(255,255,255,0.8)"}}>Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon" style={{color:"rgba(255,255,255,0.8)"}}>www.flaticon.com</a> (licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" style={{color:"rgba(255,255,255,0.8)"}}>CC 3.0 BY</a>) & <a href="https://icons8.com/icon/101725/reading-unicorn" style={{color:"rgba(255,255,255,0.8)"}}>Icons8</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
