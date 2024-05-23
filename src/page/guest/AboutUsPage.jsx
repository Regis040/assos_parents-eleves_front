import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <div className="soustitre">
                <h2>Qui sommes-nous ?</h2>
          </div>
      <p className="paragraphStyle">
        Nous sommes une association de parents d'élèves, à but non lucratif, très récente puisque elle a vu le jour en 2021.<br /><br />

        Nous nous sommes développés au départ à Parentis en Born puis rapidement sur Biscarrosse.<br /><br />
        Ce sont les parents d'élèves qui font exister cette association et ainsi portent leur voix dans chaque école et chaque classe.  
      </p>

      <div className="sujetstyle">
            <h3>LES PRIORITES DE L'ASSOCIATION "AU COEUR DE L'ENFANCE</h3>
      </div>

      <div className="objectifsAboutUs">
        <ul>
          <li>PLACER L'INTERET DE L'ENFANT AU COEUR DES PRIORITES</li>
          <li>CREER DES TEMPS DE RENCONTRES ET D'ECHANGES</li>
          <li>FAVORISER LES PROJETS D'ECOLE</li>
          <li>PORTER LA VOIX DE TOUS LES PARENTS</li>
          <li>RELAYER VOS QUESTIONS ET INTERROGATIONS</li>
          <li>SOUTENIR LA QUALITES D'ACCUEIL ET D'ENSEIGNEMENT</li>
       </ul>
      </div>

      <div className="sujetstyle">
            <h3>PORTFOLIO DE L'ASSOCIATION "AU COEUR DE L'ENFANCE"</h3>
      </div>

      <div className="aboutusManagersPics">
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/julien.png" alt="classe maternelle" /></div>
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/olivia.png" alt="classe maternelle" /></div>
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/melanie.png" alt="classe maternelle" /></div>
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/antoine.png" alt="classe maternelle" /></div>
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/charlotte.png" alt="classe maternelle" /></div>
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/nassera.png" alt="classe maternelle" /></div>
        <div><img  className="aboutusManagerPic"  src="../../assets/imgs/jerome.png" alt="classe maternelle" /></div>         
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;