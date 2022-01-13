import React from "react";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
import FaqPage from "./pages/FaqPage";
import Tests from "./pages/Tests";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/mentors" element={<Mentors />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/tests" element={<Tests />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
