import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './MaternellePage.scss';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <div class="containers" id="liennewshome">
                <div class="container">
                    <div class="img-container"><img  src="../../assets/imgs/coeur.webp" alt="un coeur" /></div>
                    <div class="content">
                        <h3>La maternelle: une rentrée en douceur</h3>
                        <p>Une prémière rentrée en maternelle sans pleurs  ni inquiètudes, 
                        c'est le souhait de beacoup de parents. Certains enfants, discrets ou ...</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">En savoir +</a></div>
                </div>
                <div class="container">
                <div class="img-container"><img  src="../../assets/imgs/maternelleacceuil.webp" alt="l'accueil à la maternelle" /></div>
                    <div class="content">
                      <h3>Comment aider votre enfant pour son entrée en maternelle</h3>
                        <p>L'enrée en petite section ouvre la porte d'un monde inconnu pour les tout-petits comme pour
                        les parents. Pour favoriser les ...</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">En savoir +</a></div>
                </div>
                <div class="container">
                <div class="img-container"><img  src="../../assets/imgs/accident.jpg" alt="prévention des accidents" /></div>
                    <div class="content">
                    <h3>Prévenir les accidents de la vie courante</h3>
                        <p>Protéger les touts-petits va de soi, mais nous avons parfois tendance à 
                        baisser la garde quand les enfants grandissent. Entre laxisme et ...</p>
                    </div>
                    <div class="button-position"><a href="/articles" class="button">En savoir +</a></div>
                </div>
            </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;