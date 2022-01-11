import React from "react";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
