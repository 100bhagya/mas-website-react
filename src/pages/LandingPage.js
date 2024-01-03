import React, { useState } from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import "../index.css";
import design1 from "../images/Analytics-bro.svg";
import design2 from "../images/presets_grid.png";
import Copy from "../images/copy.png";
import Books from "../images/e-books.png";
import Portfolio from "../images/portfolio.png";
import Design3 from "../images/design1.png";
import Grid from "../images/grid.png";
import Design4 from "../images/design2.png";
import Design5 from "../images/design3.png";
import {Offers} from "../components/Offers";
import Footer from "../components/Footer";
import TestimonialNew from "../components/TestimonialNew";
import LoginForm from "../components/LoginForm";
import JoinToday from "../components/JoinToday";
import { Link } from "react-router-dom";
import Pdf from "../components/MAS Placement Report'21.pdf";
import Banner from "../images/placement banner.png";
import { ModalForm } from "../components/ModalForm";

const Card1 = ({ img, title, content }) => {
  return (    
    <div className="flex flex-col items-center p-6 bg-white space-y-8 md:p-10 lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:space-x-6 rounded-3xl md:h-auto">
      <div className="relative">
        <img
          src={Grid}
          alt="grid"
          className="absolute h-32 w-44 md:w-48 md:h-36 md:-top-10 md:-left-8 -top-8 -left-6"
        ></img>
        <img
          src={Grid}
          alt="grid"
          className="absolute h-32 w-44 md:w-48 md:h-36 md:-bottom-14 md:-right-28 -bottom-14 -right-24"
        ></img>
        <img
          src={img}
          alt="design"
          className="relative border-4 border-grey-200 border-solid h-[30vh] w-96 md:h-64 md:w-96 rounded-2xl"
        />
      </div>      

      <div className="max-w-md">        
        <h2 className="mb-6 text-lg font-semibold text-center text-gray-900 lg:text-2xl lg:text-left">
          {title}
        </h2>        

        <p className="w-full text-sm leading-relaxed text-center text-gray-600 lg:text-base lg:text-left">
          {content}
        </p>
      </div>      
      
    </div>
  );
};

const Card = ({ img, title, content }) => {
  return (    
      <div className="flex flex-col border justify-center p-8 space-y-4 shadow-lg hover:scale-105 rounded-xl transition-all">
        <div className="flex items-start justify-center">
          <img
            className="p-4 m-6 bg-gray-100 rounded-full w-36 h-36 hover:opacity-80 transition-all"
            src={img}
            alt="blog"
          /> 
        </div>
       
        <h3 className="mb-3 text-base font-semibold text-center text-gray-900 lg:text-xl lg:text-left">{title}</h3>
        <p className="max-w-sm text-sm text-center text-gray-600 lg:text-left">
          {content}
        </p>      
      </div>    
  );
};

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true)
    }    
  };
  return (
    <div>
      <Navbar />
      {/* <a href={Pdf} target="_blank" rel="noopener noreferrer">
        <div className="w-[35%] left-[33%] bg-black text-2xl text-white px-10 py-5 absolute top-[60px] text-center">
          Checkout MAS Placement Report
        </div>
      </a> */}

      {/* <LoginForm isShowLogin={isShowLogin} closeLogin={closeLogin} /> */}
      {/* <JoinToday isShowLogin={isShowLogin} closeLogin={closeLogin} /> */}
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
      <div className="flex flex-col-reverse pt-16 lg:flex-row bg-blue-50">
        <div className="max-w-lg px-4 mx-auto lg:flex lg:items-center pt-9 md:max-w-xl lg:max-w-4xl">
          <div className="lg:pt-16 bottom-3 lg:pb-32 pb-10 lg:pl-12 relative lg:left-[7%] lg:top-3 text-center lg:text-left">
            <h1 className="text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl font-primary">
              Get Placed In
              <p className="relative mt-4 bottom-5 lg:mt-10">
                Your Dream Company
              </p>
            </h1>
            <p className="lg:pt-6 text-sm lg:text-lg  text-slate-600 leading-loose lg:w-[68%] ">
              My Analytics School is an Ed-Tech start-up founded by IIT alumni,
              providing an end-to-end solution for analytics, data science
              placements and related job preparation
            </p>
            <div
              onClick={toggleShowModal}
              className="inline-block cursor-pointer bg-blue-600 lg:mt-10 mt-6 md:px-10 md:py-3 px-6 py-2 px text-white rounded-lg font-medium uppercase font-primary tracking-wide lg:text-sm text-[12px] mr-4"
            >
              Register Now
            </div>
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <div
                className="inline-block cursor-pointer bg-white lg:mt-20 mt-8 md:px-10 md:py-3 px-6 py-2 px text-blue-600 border rounded-lg font-medium uppercase font-primary tracking-wide lg:text-sm text-[12px] mr-4"
              >
                View Placement Report
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={design1}
            alt=""
            className="lg:absolute relative design1  z-10 lg:right-16 lg:top-[120px] lg:h-[70%] h-[250px] top-5"
          />
          <img
            src={design2}
            alt=""
            className="relative hidden design2 lg:bottom-16 lg:block"
          />
        </div>
      </div>

      <section className="p-12 mb-12">      
          <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
            What We Do?
          </h1>
          <div className="flex flex-col items-center max-w-6xl mx-auto space-y-12 lg:flex-row lg:space-y-0 lg:space-x-12">
            <Card
              img={Copy}
              title="Preparation Program"
              content="Channelise your efforts via strategic preparation program."              
            />
            <Card
              img={Books}
              title="Improve Skill"
              content="Help you hone your skills to make you land your dream job."
            />
            <Card
              img={Portfolio}
              title="Job Opportunities"
              content="Provide exposure and connect you to market job opportunities."
            />
          </div>        
      </section>

      <section className="p-12 bg-blue-50 pb-24">                     
          <h1 className="py-12 text-3xl font-bold text-center text-gray-900  lg:text-4xl">
            How It Works?
          </h1>          
          <div className="flex flex-col space-y-16 md:px-28">
            <Card1
              img={Design3}
              title="Test Preparation & Upskilling"
              content="Get hold of the perfect placement preparation strategy in order to get an edge over others by our extensive practice tests, company-specific tests, courses, projects and regular discussions."
            />
            <Card1
              img={Design4}
              title="Interview Preparation"
              content="Learn to draft a winning resume, present it in a curated manner and ace the job placements with our mock interviews and GD sessions."
            />
            <Card1
              img={Design5}
              title="Off-Campus Opportunities"
              content="Off Campus placement is also in the books. Get connected to the emerging market opportunities via our HR pipeline. We are here to assist."
            />
          </div>        
      </section>
           
      <Offers />
      <TestimonialNew />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
