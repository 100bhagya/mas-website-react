import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard2.png";
import LinkedIn from "../images/Linkedin.png";
import Tanay from "../images/Tanay Kedia.png";
import Suyash from "../images/Suyash Ratna.png";
import Dirghayu from "../images/Dirghayu.png";
import Mahi from "../images/Mahi.png";
import Grid from "../images/grid.png";
import Design2 from "../images/design2.png";
import "../index.css";
import Data from "../data/MAS101Data";
import Rectangle from "../images/Rectangle 52.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Offers from "../components/Offers";


const Testimonial = ({ image, linkedin, name, position }) => {
  return (
    <div class="py-4 md:m-8 m-3 md:w-1/3 w-[12%] lg:w-[17%] shadow-gray-300 bg-card shadow-lg rounded-2xl">
      <div class="rounded-lg w-full md:h-48 h-32 overflow-hidden">
        <img
          alt="content"
          class="relative lg:left-14 lg:top-8 md:h-36 md:w-36 h-28 w-28 ml-5 md:ml-0 md:mt-0 mt-4"
          src={image}
        ></img>
      </div>
      <div>
        <a href={linkedin}>
          <img
            src={LinkedIn}
            alt="icon"
            className="mx-4 hover:scale-110 relative bottom-7 md:bottom-11 md:left-[140px] left-[90px]"
          />
        </a>
      </div>

      <div className="text-center justify-center pb-7">
        <h2 class="text-lg font font-semibold text-gray-900">{name}</h2>
        <h2 class="text-sm font font-normal text-gray-400">{position}</h2>
      </div>
    </div>
  );
};

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-lg font font-semibold">
        {faq.question}
      </div>
      <div className="faq-answer text-sm font">
        <div className="text-lg font-normal mt-2">{faq.Status}</div>
        <div className="mt-10 mb-3">
          {faq.answer.map((post) => {
            return (
              <div className="flex">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="w-4 h-1 mr-7 relative my-5 left-3 bottom-3 rounded-xl"
                />
                <div className="">{post.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MAS101 = () => {
  const [faqs, setfaqs] = useState(Data);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row pt-28 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">

        <div className="md:mb-24 mb-16 relative lg:right-[12%] md:w-1/2 lg:w-auto">

          <div className="lg:pt-20 md:pb-28 pb-10 lg:bottom-12">
            <h1 className="md:font-medium font-semibold text-center justify-center relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
              MAS 101
            </h1>

            <p className="relative px-8 md:px-0 justify-center md:top-5 mt-5 md:mt-0 md:text-lg text-sm font  text-black leading-8">
              Our flagship placement programme for IITs, NITs and similar
              college students
            </p>
          </div>
          <a
            href="apply"
            className=" py-3 px-8 bg-blue-700 rounded-2xl text-white"
          >
            Apply now
          </a>
        </div>
        <img
          src={Artboard}
          alt="artboard"
          className="relative lg:left-[10%] md:left-[4%] bottom-12 px-16 md:px-0 md:mt-0 mt-8"
        ></img>
      </div>
      <Offers />
      <section class="text-gray-600 body-font bg-back">
        <div class="container px-5 py-6 mx-auto">
          <div class="block flex-wrap -m-4">
            <div class="lg:px-24 md:mt-28 mt-12">
              <div class="flex flex-col-reverse md:flex-row md:rounded-3xl h-full bg-works md:px-16 py-12 md:py-8">
                <div className="md:w-[43%] w-full mt-4">
                  <div class="md:flex items-center mb-3 mt-28 md:mt-16 lg:mt-28 hidden">
                    <h2 class="text-gray-900 text-2xl title-font font-semibold">
                      Mentors
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed w-full md:text-lg text-sm px-8 md:px-0 md:mt-12 mt-7 mb-10 md:mb-40">
                      Experienced mentors to steer you through the journey from
                      being a student to an industry-driven professional. With a
                      constant interactive support from our mentors with a
                      personalized touch, get a chance of a lifetime to engage
                      with accomplished and competent mentors who will be adept
                      at tackling your doubts and queries.
                    </p>
                  </div>
                  <a
                    href="apply"
                    className=" py-3 px-8 bg-blue-700 rounded-2xl text-white relative left-[28%] md:left-0"
                  >
                    <Link to="/mentors">Learn more</Link>
                  </a>
                </div>

                <div className="">
                  <div class="flex  text-center justify-center mb-3 md:mt-28 mt-4 md:hidden">
                    <h2 class="text-gray-900 text-2xl title-font font-semibold">
                      Mentors
                    </h2>
                  </div>
                  <div className="flex md:block lg:flex w-[355%] relative md:left-[21%]">

                    <Testimonial
                      name="Tanay Kedia"
                      position="Fractal Analytics"
                      linkedin="https://www.linkedin.com/in/tanay-kedia/"
                      image={Tanay}
                    />
                    <Testimonial
                      name="Suyash Ratna"
                      position="PhonePe"
                      linkedin="https://www.linkedin.com/in/suyash-ratna-ba324714a/"
                      image={Suyash}
                    />
                  </div>
                  <div className="lg:flex w-[355%] relative left-[21%] hidden">

                    <Testimonial
                      name="Dirghayu Kaushik"
                      position="ICICI Bank"
                      linkedin="https://www.linkedin.com/in/dirghayukaushik/"
                      image={Dirghayu}
                    />
                    <Testimonial
                      name="Mahi Asati"
                      position="Fractal Analytics"
                      linkedin="https://www.linkedin.com/in/mahiasati/"
                      image={Mahi}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font bg-back">
        <div class="container px-5 py-6 mx-auto">
          <div class="block flex-wrap -m-4">
            <div class="lg:px-24 md:mt-28 mt-20 mb-12">
              <div class="flex md:rounded-3xl flex-col-reverse md:flex-row h-full bg-works md:p-16">
                <div className="md:w-[47%] mt-4 mb-12 md:mb-0">
                  <div class="flex items-center mb-3 mt-20 text-center justify-center md:justify-start">

                    <h2 class="text-gray-900 text-2xl title-font font-semibold">
                      Fees & ISA
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed w-full md:text-lg md:mt-12 mt-8 mb-16 px-10 md:px-0 text-sm">
                      Our Income Share Agreement (ISA) is an investment in
                      students' career. Students can benefit from our services
                      just by paying a negligible amount and contributing a very
                      small part of their income once they are placed.
                    </p>
                  </div>
                  <a
                    href="apply"
                    className=" py-3 px-8 bg-blue-700 rounded-2xl text-white relative left-[28%] md:left-0"
                  >
                    <Link to="/isa">Learn more</Link>
                  </a>
                </div>
                <div className="lg:h-[450px] h-[230px]">
                  <img
                    src={Grid}
                    alt="grid"
                    className="lg:h-[200px] h-32 w-64 lg:w-[400px] relative lg:left-14 md:top-28 lg:top-0"

                  ></img>
                  <img
                    src={Design2}
                    alt="design"
                    className=" relative z-10 lg:left-28 lg:bottom-32 bottom-20 md:-bottom-8 ml-8 lg:ml-0 md:ml-12 rounded-2xl lg:w-[530px] w-[300px] "

                  />
                  <img
                    src={Grid}
                    alt="grid"
                    className="lg:h-[200px] h-32 w-64 lg:w-[400px] relative lg:bottom-56 bottom-36 md:bottom-8 left-[220px] lg:left-[450px] md:left-[240px]"

                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-1 lg:pb-36 pb-16 bg-back">
        <div className="text-[40px] text-center lg:my-12 mt-12">Timeline</div>
        <div className="faqs lg:w-[58%] md:w-[90%] w-full relative lg:left-[21%] md:left-[5%] bg-back lg:bg-white lg:py-10 lg:px-20 rounded-3xl">

          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
          <div className="text-center mt-12 mb-6">
            <a
              href="timeline"
              className="px-3 py-4 bg-blue-600 rounded-2xl text-[15px] font-medium text-white"
            >
              <Link to="/timeline1">Complete Timeline</Link>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MAS101;
