import React from "react";
import "../stylesheets/Mission.css";

export default function Mission() {
  return (
    <section className="slice-lg sct-color-1" id="mission">
      <div className="container">
        <div className="section-title section-title--style-1 text-center mb-2">
          <h3 className="section-title-inner ">
            <span>Mission Curious Connect</span>
          </h3>
          <span className="section-title-delimiter clearfix d-none"></span>
        </div>

        <span className="clearfix"></span>

        <div className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
          <p className="text-lg line-height-1_8">
            <span className="bold">
              Notre mission est de transformer l'alternance en tremplin de
              réussite grâce au numérique.
            </span>{" "}
            <br></br> Nous avons développé la 1ère solution innovante qui
            intègre tous les acteurs (Ecoles, Entreprises, Jeunes) sur tout le
            parcours de l'alternance, de l'école jusqu'à l'entreprise.
          </p>
        </div>

        <span className="space-xs-xl"></span>

        <div className="row cols-xs-space cols-md-space cols-sm-space">
          <div className="col-lg-4">
            <div className="icon-block icon-block--style-2-v1 text-center">
              <img
                className="block-icon"
                src="images/point2.png"
                alt="Une icône fun d'une licorne qui apprend"
              />
              <h2
                className="heading heading-4 strong-500 "
                style={{ color: "#363390" }}
              >
                Pour les Jeunes
              </h2>
              <p className="px-4" style={{ color: "#818a91" }}>
                Nous t'accompagnons de A à Z et te connectons aux formations et
                entreprises qui correspondent à ton{" "}
                <bold style={{ color: "#363390" }}> projet d'alternance</bold>.
                Et c'est <bold style={{ color: "#363390" }}> gratuit </bold>!
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-block icon-block--style-2-v1 text-center">
              <img
                className="block-icon"
                src="images/point1.png"
                alt="Une icône qui représente l'ajustement"
              />
              <h2
                className="heading heading-4 strong-500"
                style={{ color: "#E61D25" }}
              >
                Pour les Centres de Formation (CFA)
              </h2>
              <p className="px-4" style={{ color: "#818a91" }}>
                Grâce à notre méthodologie et candidatures spontanées
                automatisées nous accélérons vos{" "}
                <bold style={{ color: "#E61D25" }}>
                  {" "}
                  recrutements d'alternants
                </bold>
                , et{" "}
                <bold style={{ color: "#E61D25" }}>
                  {" "}
                  placements en entreprise
                </bold>
                .
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-block icon-block--style-2-v1 text-center">
              <img
                className="block-icon"
                src="images/point3.png"
                alt="Une icône de Wifi"
              />

              <h2
                className="heading heading-4 strong-500 "
                style={{ color: "#2FBEB7" }}
              >
                Pour les Entreprises
              </h2>
              <p className="px-4" style={{ color: "#818a91" }}>
                Notre solution de matching sur mesure et de suivi numérique des
                progrès vous garantit des{" "}
                <bold style={{ color: "#2FBEB7" }}> alternants motivés </bold>{" "}
                et une{" "}
                <bold style={{ color: "#2FBEB7" }}> intégration réussie</bold>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
