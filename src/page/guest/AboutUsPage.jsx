import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <div class="aboutus">
          <img  src="../../assets/imgs/accueil.jpg" alt="qui sommes-nous?" />
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;