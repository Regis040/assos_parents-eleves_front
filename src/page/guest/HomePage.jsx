import React from "react";
import Header from "../../component/guest/Header";
import NewsHome from "../../component/guest/NewsHome";
import Schools from "../../component/guest/Schools";
import Footer from "../../component/guest/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <NewsHome />
      <Schools />      
      <Footer />
    </>
  );
};

export default HomePage;