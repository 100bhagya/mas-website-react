import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard2.png";
import LinkedIn from "../images/Linkedin.png";
import Aditi from "../images/Aditi.jpg";
import Shruti from "../images/Shruti.jpg";
import Nallani from "../images/Nallani.jpg";
import Yash from "../images/Yash.jpg";
import Grid from "../images/grid.png";
import Design2 from "../images/design2.png";
import "../index.css";
import Data from "../data/DA_DS_BootcampData";
import TrackRecordData from "../data/TrackRecord";
import TrackRecordData1 from "../data/TrackRecord1";
import Rectangle from "../images/Rectangle 52.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {Offers1} from "../components/Offers";
import Fractal from "../images/fractal.png";
import Ola from "../images/ola.png";
import MasterCard from "../images/mastercard.png";
import ICICI from "../images/icici.png";
import AmericaLogo from "../images/america logo.png";
import BankOfAmerica from "../images/bank of america.png";
import Morgan from "../images/morgan.png";
import Express from "../images/american express.png";
import Accenture from "../images/Accenture.png";
import AB from "../images/AB.png";
import PhonePe from "../images/phonepe.png";
import Mynthra from "../images/mynthra.png";
import TestimonialOtherPages from "../components/TestimonialOtherPages";
import FaqMAS102  from "../components/FaqMAS102";
import exclusive from "../images/exclusive.png";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const Testimonial = ({ image, linkedin, name, position }) => {
  return (
    <div class="py-4 md:m-8 m-3 md:w-1/3 w-[12%] lg:w-[16%] shadow-gray-300 bg-card shadow-lg rounded-2xl">
      <div class="rounded-lg w-full md:h-48 h-32 overflow-hidden">
        <img
          alt="content"
          class="relative lg:left-14 md:left-[21%] lg:top-8 md:top-9 md:h-36 md:w-36 h-28 w-28 ml-5 md:ml-0 md:mt-0 mt-4"
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

      <div className="justify-center text-center pb-7">
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
      <div className="text-lg font-semibold faq-question font">
        {faq.question}
      </div>
      <div className="text-sm faq-answer font">
        <div className="mt-2 text-lg font-normal">{faq.Status}</div>
        <div className="mt-10 mb-3">
          {faq.answer.map((post) => {
            return (
              <div className="flex">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="relative w-4 h-1 my-5 mr-7 left-3 bottom-3 rounded-xl"
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

const MahadevBatch = () => {
  const [faqs, setfaqs] = useState(Data);
  const [showFixedDiv, setShowFixedDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFixedDiv(true);
      } else {
        setShowFixedDiv(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div className="flex flex-col-reverse justify-center md:flex-row pt-28 bg-blue-50">
        <div className="md:mb-24 mb-16 relative p-4 lg:right-[5%] md:w-1/2">
          <div className="pb-8 lg:pt-20 max-w-xl">
          <h1 className="py-4 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl  font-primary">
          Join <span className="text-sky-800">Data Analytics & Data Science Bootcamp</span>
          </h1>

          <p className="pb-4 text-base text-slate-600 lg:top-5 text-md lg:text-lg">
            2 Lakh Data Jobs Monthly! Upskill and Get Hired in 5 Months. Don't Wait, Master It with MAS.
          </p>  
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4OSD_FW8zFqw15kQj0wLg4b_fBQQFV37f_IeM25y_h-RXfQ/viewform"
            className="px-8 py-3 text-white bg-sky-700 rounded-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register With Us
          </a>
        </div>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zwZTvWsqAxM"
          title="YouTube video player"
          className="ml-[8%] md:ml-0 mb-5 mt-6"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <div className="flex flex-col py-6 pl-6 space-y-4 bg-white m-3 mb-8 border rounded-2xl">
            <div className="flex items-center justify-between w-full pb-4 space-x-12">
              <h3 className="text-2xl font-bold">
                
              </h3>
              <div className="relative">                            
                <img
                    src={exclusive}
                    alt="exclusive"
                    className="z-0 h-full"
                />
                <p className="absolute text-white z-10 top-1.5 right-8 font-bold">
                  Get 60% off
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col  lg:h-[35vh] h-auto pr-6 space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start md:pr-12">
              <div className="text-sm min-w-xl">
              
                <div className="mb-4">
                  <p className="text-slate-500 text-md">Bootcamp starting from</p>
                  <h4 className="text-sky-900 text-lg font-semibold">
                    15th Feb
                  </h4>
                </div>
                <div className="mb-4">
                  <p className="text-slate-500 text-md">Time Commitment</p>
                  <h4 className="text-sky-900 text-lg font-semibold">
                    12-15 per Week
                  </h4>
                </div>
                <div className="mb-4">
                  <p className="text-slate-500 text-md">Live Classes on</p>
                  <h4 className="text-sky-900 text-lg font-semibold">
                    Weekends
                  </h4>
                </div>
                <div className="mb-2">
                  <p className="text-slate-500 text-md">
                    Get into this Bootcamp at
                  </p>
                </div>
                <div class="flex">
                  <div className="mr-4">
                  <p className="text-lg text-slate-700 font-bold">
                    &#8377;19999

                  <span className="text-sm font-normal line-through mx-2 text-slate-500">
                    &#8377;49999
                    </span>
                  </p>
                  </div>
                  <a
                    href="https://pages.razorpay.com/pl_NNJiKrcwJ2mhPT/view"
                    className="px-8 py-2 text-white bg-sky-700 rounded-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now
                  </a>
                </div>
                <p className="text-md text-red-700 mt-4 flex items-center">
                    <ExclamationCircleIcon className="inline-block h-5 w-5 text-red-700 mr-1" aria-hidden="true" />
                   This offer is valid till 18th Jan
                </p>
              </div>
            </div>
          </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row relative md:left-[9%] md:w-[84%] lg:w-auto mt-24">
        <div className="lg:w-[45%] md:w-full md:pb-12 lg:pb-0 w-[83%] md:bg-card mt-12 lg:mt-[0] md:mt-[5vh] text-center lg:text-left  md:pr-28 md:text-lg mx-8 md:mx-0 text-[12px] text-slate-600  md:pt-[3vh] md:pl-28 lg:pl-12 rounded-l-2xl">
        Discover your path to success in data analytics and science at my analytics school. Elevate your profile and secure your dream job in the dynamic field of data. Unleash your potential with us and take the first step towards a rewarding career.
        </div>
        <iframe   className="m-auto lg:m-0  lg:h-[40vh] h-[30vh] w-[85vw] lg:w-[40vw]"  src="https://www.youtube.com/embed/zwZTvWsqAxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <Offers1 />
      <section class="text-gray-600 body-font py-16  flex justify-center bg-blue-50">
        <div class="container   ">
          <div class="  ">
            <div class=" ">
              <div class="flex flex-col-reverse md:flex-row md:rounded-3xl h-full bg-works py-12 md:py-8">
                <div className="md:w-[43%] w-full ml-5  md:px-16 ">
                  <div class="md:flex items-center  mb-3 mt-28 md:mt-16 lg:mt-28 hidden">
                    <h2 class="text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl  font-primary">
                      Expert <span className="text-sky-800">Mentors</span>
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed w-full md:text-lg text-sm px-8 md:px-0 md:mt-12 mt-7 mb-10 md:mb-16">
                    Our experienced IITian mentors from top companies steer you 
                      through the journey from
                      being a student to an industry-driven professional. With a
                      constant interactive support from our mentors with a
                      personalised touch, get a chance of a lifetime to engage
                      with accomplished and competent mentors who will be adept
                      at tackling your doubts and queries.

                    </p>
                  </div>
                  <Link to="/mentors">
                    <div className="w-[60%] md:w-[100%] lg:w-[50%] py-3 px-8   text-center  bg-sky-700 rounded-2xl text-white  ml-[20%] md:ml-0">
                      Learn more
                    </div>
                  </Link>
                </div>

                <div className="">
                  <div class="flex  text-center justify-center mb-3 md:mt-28 mt-4 md:hidden">
                    <h2 class="text-gray-900 text-2xl title-font font-semibold">
                      Mentors
                    </h2>
                  </div>
                  <div className="flex md:block lg:flex w-[355%] relative px-6 py-3  md:left-[15%]">
                    <Testimonial
                      name="Kumari Aditi"
                      image={Aditi}
                      position="Accenture"
                      Link_linkedin="https://www.linkedin.com/in/kumari-aditi-936935184"
                    />
                    <Testimonial
                      name="Shruti Pandey"
                      image={Shruti}
                      position="JPMC"
                      Link_linkedin="https://www.linkedin.com/in/shruti-pandey-86567b164/"
                    />
                  </div>
                  <div className="flex md:block lg:flex w-[355%] relative px-6 py-3  md:left-[15%]">
                    <Testimonial
                      name="Nallani Venkata Harsha"
                      image={Nallani}
                      position="Mastercard"
                      Link_linkedin="https://www.linkedin.com/in/nallani-venkata-harsha-886579174/"
                    />
                    <Testimonial
                      name="Yash Paliwal"
                      image={Yash}
                      position="Nobroker"
                      Link_linkedin="https://www.linkedin.com/in/yash-paliwal-102164170/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 bg-white py-24">      
      <div className="flex flex-col items-center p-6 border shadow-md bg-white space-y-8 md:p-10 lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:space-x-6 rounded-3xl md:h-auto">
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
              src={Design2}
              alt="design"
              className="relative border-4 border-grey-200 border-solid h-[30vh] w-96 md:h-64 md:w-96 rounded-2xl"
            />
          </div>

          <div className="max-w-md">
            <h2 className="mb-6 text-lg font-semibold text-center text-gray-900 lg:text-2xl lg:text-left">
            Fees & PAP
            </h2>

            <p className="w-full mb-6 text-sm leading-relaxed text-center text-gray-600 lg:text-base lg:text-left">
            Our Pay After Placement program (PAP) is designed to support students in building their careers. Students can avail themselves of our services by paying a registration fee and contributing a small percentage of their income after securing a job.
            </p>

            <Link to="/pap">
              <div className="w-[60%] md:w-[50%] py-3 px-8   text-center  bg-sky-700 rounded-2xl text-white  ml-[20%] md:ml-[30%] lg:ml-0">
                Learn more
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="pt-1 pb-16 lg:pb-16 bg-blue-50">
      <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
        Timeline
      </h1>
        <div className="faqs lg:w-[58%] md:w-[90%] w-full relative lg:left-[21%] md:left-[5%] bg-blue-50 lg:bg-white lg:py-10 lg:px-20 rounded-3xl">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
          <div className="mt-12 mb-6 text-center">
            <a href="https://drive.google.com/file/d/1YEDSoPBT74k7v42hSM4FFQNWiTRpfCxF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="px-3 py-4 bg-sky-700 rounded-2xl text-[15px] font-medium text-white w-[40%] relative left-[30%]">
                Complete Timeline
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-16">
      <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
        Placement Partners
      </h1>
        <div className="">
          <div className="flex justify-center pt-8 mt-8">
            <img
              src={Fractal}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={Ola}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={MasterCard}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={ICICI}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
          </div>
          <div className="flex justify-center mt-14">
            <div className="mx-2 lg:mx-8 md:mx-3">
              <img
                src={AmericaLogo}
                alt=""
                className="relative left-[35%] h-5 md:h-auto"
              />
              <img src={BankOfAmerica} alt="logo" className="w-24 md:w-auto" />
            </div>
            <img
              src={Morgan}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={Express}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={Accenture}
              alt="logo"
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
          </div>
          <div className="flex justify-center pb-10 mt-14">
            <img
              src={AB}
              alt=""
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={PhonePe}
              alt=""
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
            <img
              src={Mynthra}
              alt=""
              className="h-5 mx-2 lg:mx-8 md:mx-3 md:h-auto"
            />
          </div>
        </div>
      </div>
      {/* <TestimonialOtherPages />
      <div className="pt-12 pb-24 text-center bg-blue-50">
        <a
          href="apply"
          className="px-8 py-3 bg-sky-700 text-center rounded-xl text-[15px] font-medium text-white"
        >
          Register Now
        </a>
      </div> */}
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
        <div className={`fixed bottom-0 left-0 right-0 bg-white border-t text-slate-500 p-2  z-50 ${showFixedDiv ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 lg:px-32 md:px-8 gap-4">
          <div className="hidden md:block">
            <p>Bootcamp starting from</p>
            <h4 className="text-slate-700 text-xl font-semibold">
               15th Feb
            </h4>
          </div>
          <div className="hidden lg:block">
            <p>Time Commitment</p>
            <h4 className="text-slate-700 text-xl font-semibold">
               12-15 per Week
            </h4>
          </div>
          <div className="hidden lg:block">
            <p>Live Classes on</p>
            <h4 className="text-slate-700 text-xl font-semibold">
              Weekends
            </h4>
          </div>
          <div class="flex justify-end">
            <div className="md:hidden mr-3">
              <p>Starting from</p>
              <h4 className="text-slate-700 text-md font-semibold">
                15th Feb
              </h4>
            </div>
            <div className="mr-4">
            <p className="text-lg text-slate-700 font-bold">
              &#8377;19999
            </p>
            <p className="text-sm font-normal line-through mx-2 text-slate-500">
              &#8377;49999
              </p>
            </div>
            <a
              href="https://pages.razorpay.com/pl_NNJiKrcwJ2mhPT/view"
              className="p-3 px-6 text-white bg-sky-700 rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
          </div>
        </div>
        </div>
      <FaqMAS102 />
      <Footer />
    </div>
  );
};

export default MahadevBatch;
