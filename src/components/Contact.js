import React, { Component } from "react";
import "../stylesheets/Contact.css";
import ReactGA from "react-ga";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    let _isSent = false;
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API}`,
    });
    this.service = service;
    console.log(process.env.REACT_APP_API);
    this._isSent = _isSent;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    this.service
      .post("/send", { name, email, message })
      .then((response) => {
        console.log(response);
        this._isSent = true;
        this.setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section className="slice sct-color-1" id="contact">
        <div className="sct-inner container">
          {false && (
            <>
              <div className="section-title section-title--style-1 text-center mb-2">
                <h3 className="section-title-inner ">
                  <span>Inscris-toi au programme !</span>
                </h3>
                <span className="section-title-delimiter clearfix d-none"></span>
              </div>

              <span className="clearfix"></span>
              <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                <p className="text-lg line-height-1_8">
                  {/*Curious Connect lance le premier programme Accélérateur d'Alternance 100% à distance le  <bold style={{ color: "#E61D25" }}> 6 avril 2020</bold>.
              </p> <p> Ce programme d'accompagnement accéléré de 2 semaines + 1 mois de suivi en partenariat avec Openclassrooms est entièrement GRATUIT pour tous les jeunes qui comme toi souhaitent se former en alternance, malgré la crise sanitaire.
                <p> </p><p>Pour s'inscrire, rien de plus simple, il te suffit de remplir ce formulaire avant le  <br /> <b style={{ color: "#E61D25" }}> 2 avril 2020 à minuit</b> :  </p>
    */}{" "}
                  Les inscriptions pour le programme sont ouvertes jusqu'au
                  jeudi 18 juin à minuit ici :
                </p>
                <div
                  className="btn btn-styled btn-lg btn-base-2 btn-shadow strong-600"
                  onClick={() => {
                    ReactGA.event({
                      category: "sign up",
                      action: "user clicked second button",
                    });
                    window.open(
                      "https://airtable.com/shrgwstMyHD7XFQFB",
                      "_blank"
                    );
                  }}
                  cs
                >
                  Inscription{" "}
                </div>
                <p> </p>

                {/*              <p>
              Ce programme est disponible pour toutes les personnes{" "}
              <b>inscrites à Pôle emploi</b> sans limite d'âge.{" "}
            </p> */}

                <p></p>
              </div>
            </>
          )}

          <p className="text-lg line-height-1_8">
            Pour toute question, contactez-nous :<br></br>
            <span className="underlined">contact@curious-connect.com</span>
          </p>
          <span className="space-xs-xl"></span>

          {/* old code*/}
          {false && (
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="contact__sent">
                  {this._isSent ? (
                    <p>Email envoyé! Merci de nous avoir contacté!</p>
                  ) : null}
                </div>
                <form
                  className="contact__form form-group"
                  onSubmit={this.handleFormSubmit}
                >
                  <input
                    className="form-control"
                    placeholder="Nom"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <input
                    className="form-control"
                    style={{ height: "100px" }}
                    placeholder="Message..."
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <button className="btn contact__btn" type="submit">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
