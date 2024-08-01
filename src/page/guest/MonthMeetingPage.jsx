import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './MonthMeetingPage.scss';

const MonthMeetingPage = () => {
  return (
    <>
      <Header />
          <div className="soustitre">
                <h2>La réunion mensuelle</h2>
          </div>
          <div className="sujetstyle">
            <h3>La réunion mensuelle du mois de septembre</h3>
          </div>
          <p className="paragraphStyle">
          Nous vous proposons de nous rencontrez au camping de Mayotte à BISCARROSSE à 15h le samedi 7 septembre. <br />
          Nous vous attendons nombreux accompagnés de vos enfants. Le camping nous donne accès à sa base nautique. <br />
          L'actualité est très riche et va nous amener à réagir face aux décisions gouvernementales ...
          </p>
          <div className="sujetstyle">
            <h3>Le rendez-vous du mois dernier : les conclusions</h3>
          </div>
          <p className="paragraphStyle">
         Nous étions peu nombreux ! logique !
         Nous avons cependant évoqué quelques problématiques à soulever pour ce mois de septembre !         

          </p>         
      <Footer />
    </>
  );
};

export default MonthMeetingPage;