import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Organization from "./Organization";
import "../../src/index.css";
import Grid from "../images/grid.png";
import TrackRecordData from "../data/TrackRecord";
import TrackRecordData1 from "../data/TrackRecord1";
import Footer from "../components/Footer";
import Traction from "../images/Traction.png";
import Vision from "../images/Vision Mission.png";
import Mission from "../images/mission.png";
import HRData from "../data/HRCardData.js";
import Rectangle from "../images/Rectangle 52.png";
import { useState } from "react";
import MentorSection from "../components/Mentor.js";
import TestimonialNew from "../components/TestimonialNew";
import CollegeData from "../data/College";
import CFQData from "../data/CompaniesFaqData";
import CompanyData from "../data/Company";
import design2 from "../images/Vector 3.png";

function FAQ({ faq, index, toggleFAQ, tag }) {
  return (
    <div className="w-full md:w-2/4 card-container">
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        name={tag}
        onClick={() => toggleFAQ(index, tag)}
      >
        <div className="faq-question md:text-base text-[12px] font font-semibold">
          {faq.question}
        </div>
        <div className="faq-answer md:text-sm text-[11px] font flex font-medium">
          <img
            src={Rectangle}
            alt="rectangle"
            className="lg:w-4 w-3 lg:h-1 h-[3px] lg:mr-7 mr-4 relative lg:my-5 my-4 lg:left-1 rounded-xl"
          />
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

const Companies = () => {
  const [faqs, setfaqs] = useState(CFQData);
  const toggleFAQ = (index, tag) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (faq.tag === tag) {
          faq.questions.map((data, i2) => {
            if (i2 === index) {
              data.open = !data.open;
            } else {
              data.open = false;
            }

            return data;
          });
        } else {
          faq.questions.map((data, i2) => {
            data.open = false;

            return data;
          });
        }
        return faq;
      })
    );
  };

  const Card1 = ({ img, title, content }) => {
    return (    
      <div className="flex flex-col shadow border items-center p-6 bg-white space-y-8 md:p-10 lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:space-x-6 rounded-3xl md:h-auto">
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
            className="relative border-4 bg-white border-grey-200 border-solid h-[30vh] w-96 md:h-64 md:w-96 rounded-2xl"
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

  const Card = ({ data }) => {
    return (
      <div className="px-8 py-12 ">
        <div className=" flex flex-col md:w-64 w-[28vw] space-y-1.5 cursor-pointer">
          <h1 className="text-3xl font-black text-blue-800">{data.record}</h1>
          <h1 className="text-base">{data.heading}</h1>
        </div>
      </div>
    );
  };
  const string = "NIRF Rank< 100";
  return (
    <Fragment>
      <Navbar />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        // className="absolute bottom-40 md:static md:bottom-0"
      >
        <SwiperSlide className="cursor-pointer">
          <div className="flex flex-col-reverse w-full h-full pt-16 lg:flex-row bg-blue-50">
            <div className="max-w-lg relative  bottom-[12vh] md:static px-4 mx-auto lg:flex lg:items-center pt-9 md:max-w-xl lg:max-w-4xl">
              <div className="lg:pt-16 bottom-3 md:top-[5vh] top-[2vh] lg:top-[8vh] lg:pb-32 pb-10 relative lg:left-[7%]  text-center lg:text-left">
                <h1 className="relative text-3xl  leading-relaxed text-black md:bottom-[15vh]  font-black md:text-3xl lg:text-9xl ">
                  MISSION
                </h1>
                <p className="lg:pt-6 md:font-medium text-sm  text-[#787B7D]  lg:text-lg relative md:bottom-[10vh]  leading-loose lg:w-[68%]  ">
                  MAS aims to turn potential into success for students seeking
                  to become world-class professionals. Our program is designed
                  to provide efficient, affordable and industry-centric guidance
                  to bridge the gap between student potential and professional
                  acclaim.
                </p>
                <a
                  href="https://forms.gle/R6XBCdA9nvUVYjZk6"
                  target=""
                  rel="noopener noreferrer"
                  className="relative p-2 text-white bg-sky-700 border border-transparent rounded-lg cursor-pointer top-10 md:static md:p-3"
                >
                  Hire Now
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={Mission}
                alt=""
                className="lg:absolute absolute md:top-[3vh] bottom-[5vh] design1  z-10 lg:left-[50vw] lg:top-[5vw] lg:h-[80%] h-[250px] top-7"
              />
              <img
                src={design2}
                alt=""
                className="relative hidden design2 lg:bottom-16 lg:block"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div className="flex flex-col-reverse justify-between w-full h-full pt-16 lg:flex-row bg-blue-50">
            <div className="max-w-lg px-4  mx-auto relative bottom-[15vh]   lg:flex lg:items-center pt-9 md:max-w-xl lg:max-w-4xl">
              <div className="lg:pt-16 bottom-3 md:top-[17vh]  top-[2vh]  lg:pb-32 pb-10 relative lg:left-[7%] lg:top-[20vh] text-center lg:text-left">
                <div className="relative text-3xl  leading-relaxed text-black md:bottom-[15vh]  font-black md:text-3xl lg:text-9xl ">
                  VISION
                </div>
                <p className="lg:pt-6 md:font-medium text-sm  text-[#787B7D]  lg:text-lg relative md:bottom-[10vh]  leading-loose lg:w-[68%]">
                  We are optimistic about the future of analytics in India and
                  are working to develop a next-generation workforce that meets
                  the needs of the industry, both within India and globally.
                </p>
                <a
                  href="https://forms.gle/R6XBCdA9nvUVYjZk6"
                  target=""
                  rel="noopener noreferrer"
                  className="relative p-2 text-white bg-sky-700 border border-transparent rounded-lg cursor-pointer top-10 md:static md:p-3"
                >
                  Hire Now
                </a>
              </div>
            </div>
            <div className="flex justify-center ">
              <img
                src={Vision}
                alt=""
                className="lg:absolute  absolute design1  z-10 md:top-[7vh] lg:right-16 lg:top-[100px] lg:h-[70%] h-[250px] top-10"
              />
              <img
                src={design2}
                alt=""
                className="relative hidden design2 lg:bottom-16 lg:block"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <a
        href=""
        target=""
        rel="noopener noreferrer"
        className="relative z-10 p-2  text-white bg-sky-700 border border-transparent rounded-lg cursor-pointer       lg:bottom-40 md:p-3 md:bottom-[7vh] md:left-[45vw] bottom-[15vh] left-[40vw]   lg:left-[6vw] "
      >
        Hire Now
      </a> */}
      <Organization
        props={"Trusted by leading Organizations"}
        data={CompanyData}
      />
      <Organization
        props={"Partnered with prestigious colleges"}
        data={CollegeData}
      />
      <section className="p-12 bg-blue-50">
      <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
          Why Hire Us?
        </h1>
        <div className="flex flex-col space-y-8">
          {HRData.map((data, i) => {
            return (
              <Card1
                img={data.image}
                title={data.heading}
                content={data.text}
                key={i}
              />
            );
          })}
        </div>
      </section>
      <MentorSection />
      <section className="py-12 px-4 bg-blue-50">
        <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
          Customized & Efficient training
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 lg:px-16">
          {TrackRecordData.map((data, i) => {
            return (
              <>
              <div class="bg-white p-6 text-center rounded-xl border">
              <h2 className="text-sky-800 text-2xl font-semibold">{data.record}</h2>
                <p className="text-slate-700 mt-1 text-sm">{data.heading}</p>
              </div>
              </>
            )
          })}
        </div>

      </section>

      <section className="py-12 px-4 bg-white">
        <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
          Traction
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 lg:px-16">
          {TrackRecordData1.map((data, i) => {
            return (
              <>
              <div class="bg-white p-6 text-center rounded-xl border">
              <h2 className="text-sky-800 text-2xl font-semibold">{data.record}</h2>
                <p className="text-slate-700 mt-1 text-sm">{data.heading}</p>
              </div>
              </>
            )
          })}
        </div>

      </section>
      
      <TestimonialNew />
      <section className="py-16 bg-white">
        <div className="flex flex-col items-center justify-center p-12 mx-auto space-y-6 shadow-xl border md:flex-row md:space-y-0 md:space-x-8 bg-works rounded-xl lg:w-4/5">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h2 className="pb-4 text-3xl font-bold text-center text-black md:text-left">
              From The Founder's Desk
            </h2>
            <p className="text-sm md:text-base">
              My Analytics School is an Ed-Tech start-up founded by IIT alumni,
              providing an end-to-end solution for Analytics, DS Placements and
              related job preparation. "MAS screens top college candidates and
              upskills them with industry experts to provide recruiters with a
              pool of highly skilled candidates, saving time on the hiring
              process and making the freshers hiring process efficient"
            </p>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_qUgS1jCDfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>
      <section>
        <div className="mt-16 text-3xl text-center ">FAQs</div>
        {CFQData.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-wrap pb-12 mx-14 place-content-around faqs "
            >
              {post.questions.map((faq, i) => (
                <FAQ faq={faq} tag={post.tag} index={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          );
        })}
        <a
          href="/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mb-20 text-blue-800 border-b-2 border-transparent left-40 bottom-10 md:left-3/4 hover:border-blue-800"
        >
          Get More Questions?
        </a>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Companies;
