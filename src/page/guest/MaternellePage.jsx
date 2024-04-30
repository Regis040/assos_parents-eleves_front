import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './MaternellePage.scss';

const MaternellePage = () => {
  return (
    <>
      <Header />      
          <div className="soustitre">
                <h2>La maternelle</h2>
          </div>

          <div className="maternellePic">Photo</div>
          <div className="maternellePhotoTitle">titre de la photo</div>
          <div className="maternelleParagraphIntro">Texte sous la photo</div>

          <div className="sujetstyle">
            <h3>L’école, une expérience totalement nouvelle</h3>
          </div>
          <div className="sujetstyle">
            <h3>Reconnaitre et apprivoiser les lieux</h3>
          </div>
          <div className="sujetstyle">
            <h3>Verbaliser, expliquer les règles et les spécificités de l'école</h3>
          </div>
          <div className="sujetstyle">
            <h3>Et l'enfant particulièrement anxieux ?</h3>
          </div>
      <Footer />
    </>
  );
};

export default MaternellePage;