import React, { useState } from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import "../index.css";
import design1 from "../images/business.png";
import design2 from "../images/Vector 3.png";
import Copy from "../images/copy.png";
import Books from "../images/e-books.png";
import Portfolio from "../images/portfolio.png";
import Design3 from "../images/design1.png";
import Grid from "../images/grid.png";
import Design4 from "../images/design2.png";
import Design5 from "../images/design3.png";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import LoginForm from "../components/LoginForm";
import JoinToday from "../components/JoinToday";
import { Link } from "react-router-dom";
import Pdf from "../components/MAS Placement Report'21.pdf";
import Banner from "../images/placement banner.png";

const Card1 = ({ img, title, content }) => {
  return (
    <div className="md:px-24 md:mt-40 lg:mt-12">
      <div className="flex flex-col-reverse lg:flex-row md:rounded-3xl h-[425px] md:h-auto bg-works p-16">
        <div className="md:w-6/12 w-full mt-4 relative top-10 md:top-0">
          <div className=" items-center mb-3">
            <h2 className="text-gray-900 lg:text-2xl md:text-lg text-center md:text-left text-[12px] title-font font-semibold">
              {title}
            </h2>
          </div>

          <p className="leading-relaxed w-full lg:text-base  text-[12px] lg:mt-12 mt-5">
            {content}
          </p>
        </div>

        <img
          src={img}
          alt="design"
          className="lg:h-64 lg:w-96 -bottom-6 md:-bottom-0  relative z-10 lg:left-96 border-8 border-solid rounded-2xl border-white"
        />
        <img
          src={Grid}
          alt="grid"
          className="h-24 w-48 relative top-56 -left-6 md:hidden lg:block  md:top-52 md:left-72"
        ></img>
        <img
          src={Grid}
          alt="grid"
          className="h-24 w-48 relative -bottom-[175px] -right-[162px] md:hidden lg:block  md:bottom-10 md:right-56"
        ></img>
      </div>
    </div>
  );
};

const Card = ({ img, title, content }) => {
  return (    
      <div className="flex flex-col items-center justify-center space-y-4 shadow-xl bg-card rounded-xl p-8">
        <img
          className="h-36 rounded-full mt-6 bg-white p-2"
          src={img}
          alt="blog"
        />        
        <div className="text-md lg:text-xl font-semibold text-gray-900 mb-3">{title}</div>
        <p className="text-center max-w-sm text-sm">
          {content}
        </p>      
      </div>    
  );
};

const LandingPage = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const closeLogin = () => {
    setIsShowLogin(!isShowLogin);
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
      <div className="flex flex-col-reverse lg:flex-row pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-4xl mx-auto">
          <div className="lg:pt-16 bottom-3 lg:pb-32 pb-10 relative lg:left-[7%] lg:top-3 text-center lg:text-left">
            <h1 className="lg:font-normal font-semibold  text-black text-2xl md:text-3xl lg:text-5xl leading-relaxed font-primary">
              Learn Analytics,
              <p className="relative bottom-5 lg:mt-10 mt-4">
                The Analytics Way
              </p>
            </h1>
            <p className="lg:pt-6 font text-sm lg:text-lg  text-[#787B7D] leading-loose lg:w-[68%] ">
              My Analytics School is an Ed-Tech start-up founded by IIT alumni,
              providing an end-to-end solution for analytics, data science
              placements and related job preparation
            </p>
            <div
              onClick={handleClick}
              className="inline-block cursor-pointer bg-blue-600 lg:mt-20 mt-8 md:px-10 md:py-3 px-6 py-2 px text-white rounded-lg font-normal uppercase font-primary tracking-wide lg:text-sm text-[12px] mr-4"
            >
              Join Today
            </div>
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <img
                src={Banner}
                alt=""
                className="absolute lg:top-[330px] top-[190px] md:top-[140px] left-[70%] lg:left-[25%] h-32 lg:h-48"
              />
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
            className="relative design2 lg:bottom-16 hidden lg:block"
          />
        </div>
      </div>
      <section className="bg-back py-8">      
          <h1 className="font-serif text-gray-900 text-center py-12 lg:pt-24 text-3xl lg:text-4xl font-bold">
            What We Do?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center m-4 space-y-6 md:space-y-0 md:space-x-6">
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
      <section className="text-gray-600 bg-back py-8">                  
            <h1 className="font-serif text-gray-900 text-center py-12 lg:pt-24 text-3xl md:text-3xl lg:text-4xl font-bold">
              How It Works?
            </h1>          
          <div className="flex flex-col m-4">
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
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
