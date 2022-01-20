import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard2.png";
import Card1 from "../images/id-card 1.png";
import Card2 from "../images/consultation 1.png";
import Card3 from "../images/growth 1.png";
import Card4 from "../images/award 1.png";
import Card5 from "../images/conversation 1.png";
import Card6 from "../images/meeting 1.png";
import Card7 from "../images/online-resume 1.png";
import Card8 from "../images/coworking 1.png";
import Card9 from "../images/job-search 1.png";
import Vector from "../images/Vector 15.png";
import LinkedIn from "../images/Linkedin.png";
import Tanay from "../images/Tanay Kedia.png";
import Suyash from "../images/Suyash Ratna.png";
import Dirghayu from "../images/Dirghayu.png";
import Mahi from "../images/Mahi.png";
import Grid from "../images/grid.png";
import Design2 from "../images/design2.png";
import "../index.css";
import Data from "../components/MAS1O1_Data";
import Rectangle from "../images/Rectangle 52.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Card = ({ img, title }) => {
  return (
    <div class="p-4 ml-24 rounded-3xl md:w-1/4 lg:h-[360px] shadow-gray-300 bg-card shadow-lg">
      <div class="rounded-lg h-48 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center z-10 relative lg:left-8 lg:top-8 h-36 w-36"
          src={img}
        ></img>
        <img
          src={Vector}
          alt="design"
          className="h-24 w-36 relative lg:left-11 lg:bottom-12"
        ></img>
      </div>
      <h2 class="text-2xl ml-7 font-semibold title-font text-gray-900 mt-5">
        {title}
      </h2>
    </div>
  );
};

const Testimonial = ({ image, linkedin, name, position }) => {
  return (
    <div class="py-4 m-8 md:w-1/3 lg:w-[17%] shadow-gray-300 bg-card shadow-lg">
      <div class="rounded-lg w-full h-48 overflow-hidden">
        <img
          alt="content"
          class="relative lg:left-14 lg:top-8 h-36 w-36"
          src={image}
        ></img>
      </div>
      <div>
        <a href={linkedin}>
          <img
            src={LinkedIn}
            alt="icon"
            className="mx-4 hover:scale-110 relative bottom-11 left-[140px]"
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

const MAS1O1 = () => {
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
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="mb-24 relative right-[12%]">
          <div className="lg:pt-20 pb-28 lg:bottom-12">
            <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
              MAS 101
            </h1>

            <p className="relative justify-center lg:top-5 text-lg font  text-black leading-8">
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
          className="relative left-[10%] bottom-12"
        ></img>
      </div>
      <section class="text-gray-600 body-font bg-back">
        <div class="container px-5 py-24 mx-auto">
          <div class=" py-6 mb-12 ">
            <div class="text-center text-gray-900 font-medium text-5xl mb-2 sm:mb-0">
              Our Unique Offerings
            </div>
          </div>

          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <Card img={Card1} title="Internship Opportunities" />
            <Card img={Card2} title="One To One Mentorship Programme" />
            <Card img={Card3} title="Mock Tests & Performance Tracking" />
          </div>
          <div class="flex flex-wrap -mx-4 -mb-10 mt-20">
            <Card img={Card4} title="Certified Courses & Projects" />
            <Card img={Card5} title="Communication Skill Enhancement" />
            <Card img={Card6} title="Case Study & Guesstimate Sessions" />
          </div>
          <div class="flex flex-wrap -mx-4 -mb-10 mt-28">
            <Card img={Card7} title="Resume Building" />
            <Card img={Card8} title="Mock GDs & Interviews" />
            <Card img={Card9} title="Off Campus Job Opportunities" />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font bg-back">
        <div class="container px-5 py-6 mx-auto">
          <div class="block flex-wrap -m-4">
            <div class="px-24 mt-28">
              <div class="flex rounded-3xl h-full bg-works px-16 py-8">
                <div className="w-[43%] mt-4">
                  <div class="flex items-center mb-3 mt-28">
                    <h2 class="text-gray-900 text-2xl title-font font-semibold">
                      Mentors
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed w-full text-lg mt-12 mb-40">
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
                    className=" py-3 px-8 bg-blue-700 rounded-2xl text-white"
                  >
                    <Link to="/mentors">Learn more</Link>
                  </a>
                </div>

                <div className="">
                  <div className="flex w-[355%] relative left-[21%]">
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
                  <div className="flex w-[355%] relative left-[21%]">
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
            <div class="px-24 mt-28 mb-12">
              <div class="flex rounded-3xl h-full bg-works p-16">
                <div className="w-[47%] mt-4">
                  <div class="flex items-center mb-3 mt-20">
                    <h2 class="text-gray-900 text-2xl title-font font-semibold">
                      Fees & ISA
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed w-full text-lg mt-12 mb-16">
                      Our Income Share Agreement (ISA) is an investment in
                      students' career. Students can benefit from our services
                      just by paying a negligible amount and contributing a very
                      small part of their income once they are placed.
                    </p>
                  </div>
                  <a
                    href="apply"
                    className=" py-3 px-8 bg-blue-700 rounded-2xl text-white"
                  >
                    <Link to="/isa">Learn more</Link>
                  </a>
                </div>
                <div className="lg:h-[450px]">
                  <img
                    src={Grid}
                    alt="grid"
                    className="lg:h-[200px] lg:w-[400px] relative lg:left-14"
                  ></img>
                  <img
                    src={Design2}
                    alt="design"
                    className=" relative z-10 lg:left-28 lg:bottom-32 rounded-2xl lg:w-[530px] "
                  />
                  <img
                    src={Grid}
                    alt="grid"
                    className="lg:h-[200px] lg:w-[400px] relative lg:bottom-56 lg:left-[450px]"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-1 pb-36 bg-back">
        <div className="text-[40px] text-center my-12">Timeline</div>
        <div className="faqs width relative left-[21%] bg-white py-10 px-20 rounded-3xl">
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

export default MAS1O1;
