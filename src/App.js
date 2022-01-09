import React from "react";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
