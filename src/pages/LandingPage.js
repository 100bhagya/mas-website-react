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
// import { Link } from "react-router-dom";

const Card1 = ({ img, title, content }) => {
  return (
    <div class="md:px-24 md:mt-40 lg:mt-12">
      <div class="flex flex-col-reverse lg:flex-row md:rounded-3xl h-[425px] bg-works p-16">
        <div className="md:w-6/12 w-full mt-4 relative top-10 md:top-0">
          <div class=" items-center mb-3">
            <h2 class="text-gray-900 lg:text-2xl md:text-lg text-center md:text-left text-[12px] title-font font-semibold">
              {title}
            </h2>
          </div>

          <p class="leading-relaxed w-full lg:text-base  text-[12px] lg:mt-12 mt-5">
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
    <div class="p-4 lg:m-6 md:m-0 md:mt-5 m-6 md:w-1/3 lg:w-1/4">
      <div class="h-full image shadow-xl bg-card rounded-lg overflow-hidden">
        <img
          class="lg:h-30 mt-7 p-4 bg-white rounded-full md:h-36 "
          src={img}
          alt="blog"
        />
        <div class="p-6 pb-16">
          <div class=" lg:text-2xl font-bold text-gray-900 mb-3">{title}</div>
          <p class="leading-relaxed font-normal md:text-center font lg:w-72 text-left lg:text-left lg:pl-5 lg:mb-3">
            {content}
          </p>
        </div>
      </div>
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

      <div className="flex flex-col-reverse lg:flex-row pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-4xl mx-auto">
          <div className="lg:pt-16 bottom-3 lg:pb-32 pb-10 relative lg:left-[7%] lg:top-3 text-center lg:text-left">
            <h1 className="lg:font-normal font-semibold  text-black text-2xl md:text-3xl lg:text-5xl leading-relaxed font-primary">
              Learn Analytics, The
              <p className="relative bottom-5 lg:mt-10 mt-4">Analytics Way</p>
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
          </div>
          <LoginForm isShowLogin={isShowLogin} closeLogin={closeLogin} />
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
      <section class="text-gray-600 body-font bg-back">
        <div class="text-center justify-center container px-5 lg:py-24 md:py-14 pt-14 pb-7 mx-auto">
          <div class="text-center font-normal text-3xl md:text-4xl lg:text-5xl mb-5">
            What We Do?
          </div>
          <div class="flex justify-center flex-wrap -m-4">
            <Card
              img={Copy}
              title="Preparation Program"
              content="Channelise your efforts through strategic preparation program."
            />
            <Card
              img={Books}
              title="Improve Skill"
              content="Help you hone your skills to make you job ready."
            />
            <Card
              img={Portfolio}
              title="Job Opportunities"
              content="Provide exposure and connect you to market job opportunities."
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font bg-back">
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="lg:text-5xl md:text-3xl sm:text-2xl text-3xl font-medium title-font text-gray-900">
              How It Works?
            </h1>
          </div>
          <div class="block flex-wrap -m-4 md:mt-48 lg:mt-0">
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
