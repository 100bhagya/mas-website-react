import React from "react";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
import FaqPage from "./pages/FaqPage";
import Tests from "./pages/Tests";
import ISA101 from "./pages/ISA-101";
import ISA102 from "./pages/ISA-102";
import PlacementDrill from "./pages/PlacementDrill";
import TS2 from "./pages/TS2";
import TestDrill from "./pages/TestDrill";
import MAS101 from "./pages/MAS101";
import MAS102 from "./pages/MAS102";
import Courses from "./pages/Courses";
import Timeline1 from "./pages/Timeline1";
import Timeline2 from "./pages/Timeline2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Companies from "./pages/Companies";
import Colleges from "./pages/Colleges.js";
import Blogs from "./pages/Blog.js";
import "./App.css";
import  Bot from "./components/Bot.js";

const App = () => {
  return (
    <div>
       <Bot/>
      <Router>
        <Routes>
         
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blogs />} />
          <Route exact path="/colleges" element={<Colleges />} />
          <Route exact path="/companies" element={<Companies />} />
          <Route exact path="/mentors" element={<Mentors />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/tests" element={<Tests />} />
          <Route exact path="/isa-101" element={<ISA101 />} />
          <Route exact path="/isa-102" element={<ISA102 />} />
          <Route exact path="/placementDrill" element={<PlacementDrill />} />
          <Route exact path="/ts2" element={<TS2 />} />
          <Route exact path="/testDrill" element={<TestDrill />} />
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
