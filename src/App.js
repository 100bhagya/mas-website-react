import React from "react";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
import FaqPage from "./pages/FaqPage";
import Tests from "./pages/Tests";
import ISA from "./pages/ISA";
import TS3 from "./pages/TS3";
import TS2 from "./pages/TS2";
import TS1 from "./pages/TS1";
import MAS101 from "./pages/MAS101";
import MAS102 from "./pages/MAS102";
import Courses from "./pages/Courses";
import Timeline1 from "./pages/Timeline1";
import Timeline2 from "./pages/Timeline2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/mentors" element={<Mentors />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/tests" element={<Tests />} />
          <Route exact path="/isa" element={<ISA />} />
          <Route exact path="/ts3" element={<TS3 />} />
          <Route exact path="/ts2" element={<TS2 />} />
          <Route exact path="/ts1" element={<TS1 />} />
          <Route exact path="/mas101" element={<MAS101 />} />
          <Route exact path="/mas102" element={<MAS102 />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/timeline1" element={<Timeline1 />} />
          <Route exact path="/timeline2" element={<Timeline2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
