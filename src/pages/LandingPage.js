import React from "react";
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

const Card1 = ({ img, title, content }) => {
  return (
    <div class="px-24 mt-12">
      <div class="flex rounded-3xl h-full bg-works p-16">
        <div className="w-6/12 mt-4">
          <div class="flex items-center mb-3">
            <h2 class="text-gray-900 text-2xl title-font font-semibold">
              {title}
            </h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed w-full text-base mt-12">{content}</p>
          </div>
        </div>

        <img
          src={img}
          alt="design"
          className="h-64 w-96 relative z-10 lg:left-96 border-8 border-solid rounded-2xl border-white"
        />
        <img
          src={Grid}
          alt="grid"
          className="h-24 w-48 relative md:top-52 md:left-72"
        ></img>
        <img
          src={Grid}
          alt="grid"
          className="h-24 w-48 relative md:bottom-10 md:right-56"
        ></img>
      </div>
    </div>
  );
};

const Card = ({ img, title, content }) => {
  return (
    <div class="p-4 m-6 md:w-1/4">
      <div class="h-full image shadow-xl bg-card rounded-lg overflow-hidden">
        <img
          class="lg:h-30 mt-7 p-4 bg-white rounded-full md:h-36 "
          src={img}
          alt="blog"
        />
        <div class="p-6 pb-16">
          <div class=" lg:text-2xl font-bold text-gray-900 mb-3">{title}</div>
          <p class="leading-relaxed font-normal font w-72 text-left pl-5 mb-3">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-4xl mx-auto">
          <div className="lg:pt-16 pb-32 relative lg:right-24 lg:top-3">
            <h1 className="font-normal  text-black text-xl xs:text-2xl lg:text-5xl leading-relaxed font-primary">
              Learn Analytics, The
              <br />
              <br />
              <p className="relative bottom-5">Analytics Way</p>
            </h1>
            <p className="pt-6 font text-lg  text-gray-400 leading-loose">
              Data analysis is a process of inspecting, cleansing, transforming,
              <br />
              and modelling data with the goal of discovering useful
              information,
            </p>
            <a
              href="download"
              className="inline-block bg-blue-600 mt-20 px-10 py-3 text-white rounded-lg font-normal uppercase font-primary tracking-wide text-sm mr-4"
            >
              Join Today
            </a>
          </div>
        </div>
        <div className="flex">
          <img
            src={design1}
            alt=""
            className="absolute design1  z-10 lg:right-16 lg:top-[68px] h-[70%]"
          />
          <img src={design2} alt="" className="relative design2 lg:bottom-16" />
        </div>
      </div>
      <section class="text-gray-600 body-font bg-back">
        <div class="text-center justify-center container px-5 py-24 mx-auto">
          <div class="text-center font-normal lg:text-5xl mb-5">
            What We Do?
          </div>
          <div class="flex justify-center flex-wrap -m-4">
            <Card
              img={Copy}
              title="Prepration Program"
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
            <h1 class="lg:text-5xl md:text-3xl sm:text-2xl font-medium title-font text-gray-900">
              How It Works?
            </h1>
          </div>
          <div class="block flex-wrap -m-4">
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
