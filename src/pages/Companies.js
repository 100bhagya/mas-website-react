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
import Data from "../data/TrackRecord";
import Footer from "../components/Footer";
import { BsBank2 } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { ImUserPlus } from "react-icons/im";
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
      <div className="flex flex-col items-center p-16 my-4 space-y-8 lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:space-x-6 rounded-3xl md:h-auto bg-works">
        <div className="relative">
          <img
            src={Grid}
            alt="grid"
            className="absolute w-48 h-36 -top-10 -left-8"
          ></img>
          <img
            src={Grid}
            alt="grid"
            className="absolute w-48 h-36 -bottom-14 -right-28"
          ></img>
          <img
            src={img}
            alt="design"
            className="relative h-64 border-8 border-blue-300 border-solid w-96 rounded-2xl"
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
      <div className="py-12 px-7 ">
        <div className=" flex flex-col w-64 space-y-1.5 cursor-pointer">
          <h1 className="text-3xl font-black text-blue-800">{data.record}</h1>
          <h1>{data.heading}</h1>
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
            <div className="w-full h-full bg-gradient-to-b from-blue-300 to-white"></div>
            <div>
              <img
                className="absolute top-0  md:top-[7vh] md:left-[22vw] invisible md:visible lg:visible lg:w-[80vw]  lg:left-[35vw]"
                src={Mission}
                alt="mission"
              />
              <p className="absolute text-6xl font-black text-black left-5 md:text-9xl top-16 md:left-10 md:top-28">
                MISSION
              </p>
              <p className="absolute w-2/3 text-black left-5 md:w-1/3 top-48 md:left-10 md:top-1/2 ">
                MAS aims to turn potential into success for students seeking to
                become world-class professionals. Our program is designed to
                provide efficient, affordable and industry-centric guidance to
                bridge the gap between student potential and professional
                acclaim.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div className="w-full h-full bg-gradient-to-b from-blue-300 to-white"></div>
            <img
              className="absolute top-0 md:left-[38vw] md:w-7/12  lg:w-auto  md:top-[5vh] invisible md:visible lg:visible  lg:top-20 lg:left-[60vw]"
              src={Vision}
              alt="mission"
            />
            <p className="absolute text-6xl font-black text-black left-5 md:text-9xl top-16 md:left-10 md:top-28">
              VISION
            </p>
            <p className="absolute w-2/3 text-black left-5 md:w-1/3 top-48 md:left-10 md:top-1/2 ">
              We are optimistic about the future of analytics in India and are
              working to develop a next-generation workforce that meets the
              needs of the industry, both within India and globally.
            </p>
          </SwiperSlide>
        </Swiper>
        <a
          href=""
          target=""
          rel="noopener noreferrer"
          className="relative z-10 p-2 text-white bg-blue-600 border border-transparent rounded-lg cursor-pointer md:bottom-12 lg:bottom-20 md:p-3 bottom-20 left-5 md:left-10"
        >
          Hire Now
        </a>
        <Organization
          props={"Trusted by leading Organizations"}
          data={CompanyData}
        />
        <Organization
          props={"Partnered with prestigious colleges"}
          data={CollegeData}
        />
        <section className="p-12 bg-white">
          <h1 className="py-12 text-xl text-center text-gray-900 lg:text-3xl">
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
        <section>
          <div className="mt-16 text-3xl text-center ">Track Record</div>
          <div className="flex flex-wrap mt-16 ml-7 md:ml-20 track-record">
            {Data.map((data, i) => {
              return <Card key={i} data={data} />;
            })}
          </div>
        </section>
        <section>
          <div className="mt-16 text-3xl text-center ">Our Journey</div>
          <div className="mt-16 track-record">
            <div className="flex flex-wrap py-12 space-y-24 sm:space-y-0 place-content-around container-1 px-7">
              <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
                <div className="">
                  <FaUserGraduate className="w-8 h-8 text-blue-900" />
                </div>
                <h1>
                  10000+ Students Upskilled in Analytics from IIT’s, NIT’s and
                  Tier 1 institutes in past 20 Months
                </h1>
              </div>
              <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
                <div className="">
                  <ImUserPlus className="w-8 h-8 text-blue-900" />
                </div>
                <h1>
                  Students spend 15 Lakhs minutes on Testing themselves on Test
                  Platform
                </h1>
              </div>
              <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
                <div className="">
                  <MdPlayLesson className="w-8 h-8 text-blue-900" />
                </div>
                <h1>
                  Students consumed 9300 Hours of Content on Learn Platform
                </h1>
              </div>
              <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
                <div className="">
                  <BsBank2 className="w-8 h-8 text-blue-900" />
                </div>
                <h1>
                  Collaborated with top 100 colleges of India NIRF Rank (
                  {string})
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap py-12 space-y-24 md:space-y-0 place-content-around container-2 ">
              <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
                <div className="">
                  <BsBagCheckFill className="w-8 h-8 text-blue-900" />
                </div>
                <h1>26 Crore worth Placement Done</h1>
              </div>
              <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
                <div className="">
                  <FaChalkboardTeacher className="w-8 h-8 text-blue-900" />
                </div>
                <h1>Strong force of 300+ Expert Mentors from IIT’s</h1>
              </div>
              <div className="flex flex-col w-64 space-y-3.5 cursor-pointer ">
                <div className="">
                  <ImOffice className="w-8 h-8 text-blue-900" />
                </div>
                <h1>MAS alums working in 250+ Companies</h1>
              </div>
            </div>
          </div>
        </section>
        <TestimonialNew />
        <section className="py-16 bg-white">
          <div className="flex flex-col items-center justify-center p-12 mx-auto space-y-6 shadow-2xl md:flex-row md:space-y-0 md:space-x-8 bg-works rounded-xl lg:w-4/5">
            <div className="flex flex-col space-y-4 md:w-1/2">
              <h2 className="pb-4 font-serif text-3xl font-bold text-center text-black md:text-left">
                From The Founder’s Desk
              </h2>
              <p className="text-sm md:text-base">
                My Analytics School is an Ed-Tech start-up founded by IIT
                alumni, providing an end-to-end solution for Analytics, DS
                Placements and related job preparation. "MAS screens top college
                candidates and upskills them with industry experts to provide
                recruiters with a pool of highly skilled candidates, saving time
                on the hiring process and making the freshers hiring process
                efficient"
              </p>
            </div>
            <iframe
              width="590"
              height="340"
              src="https://www.youtube.com/embed/pKyiLrMLQ80"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className=" rounded-2xl"
            ></iframe>
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
                  <FAQ
                    faq={faq}
                    tag={post.tag}
                    index={i}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>
            );
          })}
          <a
            href="/mentors"
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

