import React from "react";
import Header from "../../component/guest/Header";
import NewsHomePage from "../../component/guest/NewsHome";
import Schools from "../../component/guest/Schools";
import Footer from "../../component/guest/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <NewsHomePage />
      <Schools />      
      <Footer />
    </>
  );
};

export default HomePage;