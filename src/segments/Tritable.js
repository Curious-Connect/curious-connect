import React, { useEffect } from "react";

import { IconContext } from "react-icons";
import { FaChartPie, FaUsers, FaFunnelDollar } from "react-icons/fa";

import { FaCircle } from "react-icons/fa";

const Tritable = () => {
  useEffect(() => {
    /*async function fetchMyAPI() {
    }*/
  }, []);

  const styled = {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    background: "#363390",
    width: "80px",
    alignItems: "center",
    verticalAlign: "middle",
    textAlign: "center",
    height: "80px",
    boxShadow: "0px 0px 2px #888",
    padding: "0.5em 0.6em",
  };

  return (
    //{/*Cards container*/}
    <div className="container text-center">
      <div className="row pb-4 pt-0 d-block text-center">
        <h2>Recrutez vos futurs talents quasi-gratuitement !</h2>
      </div>

      <div className="row pt-2">
        <div className="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
          <div
            className="pt-5 p-3"
            style={{
              minHeight: "55vh",
              boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.29)",
            }}
          >
            <div style={styled}>
              <FaChartPie
                size={32}
                style={{
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="pt-4 pb-3" style={{ letterSpacing: "2px" }}>
              <h6>1. Analyse de vos besoins de recrutement</h6>
            </div>

            <div className="pricing-description">
              <p className="p-2 lead">
                En fonction de votre activité, convention collective, des
                compétences, formation recherchées...{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
          <div
            className="pt-5 p-3"
            style={{
              minHeight: "55vh",
              boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.29)",
            }}
          >
            <div style={styled}>
              <FaUsers
                size={32}
                style={{
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="pt-4 pb-3" style={{ letterSpacing: "2px" }}>
              <h6>
                2. Présélection de 3 candidats parmi nos écoles partenaires
              </h6>
            </div>

            <div className="pricing-description">
              <p className="p-2 lead">
                Notre réseau comprend +10 écoles de commerce, d'ingénieurs, de
                formations Tech en IDF
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
          <div
            className="pt-5 p-3"
            style={{
              minHeight: "55vh",
              boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.29)",
            }}
          >
            <div style={styled}>
              <FaFunnelDollar
                size={32}
                style={{
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="pt-4 pb-3" style={{ letterSpacing: "2px" }}>
              <h6>3. Optimisation sur-mesure de vos aides au recrutement</h6>
            </div>

            <div className="pricing-description">
              <p className="p-2 lead">
                Obtenez jusqu'à 13 000€ par recrutement !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tritable;
