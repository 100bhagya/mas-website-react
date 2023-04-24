import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Bot from './components/Bot';
import Loader from "./pages/LoadingSpinner"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const About = lazy(() => import('./pages/About'));
const Mentors = lazy(() => import('./pages/Mentors'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const Tests = lazy(() => import('./pages/Tests'));
const ISA101 = lazy(() => import('./pages/ISA-101'));
const ISA102 = lazy(() => import('./pages/ISA-102'));
const PlacementDrill = lazy(() => import('./pages/PlacementDrill'));
const TS2 = lazy(() => import('./pages/TS2'));
const TestDrill = lazy(() => import('./pages/TestDrill'));
const MAS101 = lazy(() => import('./pages/MAS101'));
const MAS102 = lazy(() => import('./pages/MAS102'));
const Courses = lazy(() => import('./pages/Courses'));
const Timeline1 = lazy(() => import('./pages/Timeline1'));
const Timeline2 = lazy(() => import('./pages/Timeline2'));
const Companies = lazy(() => import('./pages/Companies'));
const Colleges = lazy(() => import('./pages/Colleges'));


const App = () => {
  return (
    <div>
      <Bot />
     

      <Router>
      <Navbar />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<About />} />
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
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
