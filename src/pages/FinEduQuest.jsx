import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Awards from "../components/Programme/Awards";
import OlympaidPattern from "../components/Programme/OlympaidPattern";
import PHero from "../components/Programme/PHero";

const FinEduQuest = () => {
  return (
    <>
      <Navbar />
      <PHero />
      <OlympaidPattern />
      <Awards />
      <Footer />
    </>
  );
};

export default FinEduQuest;
