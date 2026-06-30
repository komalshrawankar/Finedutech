import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProgramPage from "./pages/ProgramPage";
import FinEduQuest from "./pages/FinEduQuest";
import MoneyMastery from "./pages/MoneyMastery";
import Financial from "./pages/Financial";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/fin-edu-quest" element={<FinEduQuest />} />
        <Route path="/money-mastery" element={<MoneyMastery />} />
        <Route path="/financial-literacy" element={<Financial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
