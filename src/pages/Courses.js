import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import artboard1 from "../images/courses_artboard1.png";
import artboard2 from "../images/courses_artboard2.png";
import artboard3 from "../images/courses_artboard3.png";
import artboard4 from "../images/courses_artboard4.png";
import artboard5 from "../images/courses_artboard5.png";
import exclusive from "../images/exclusive.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <h1 className="py-8 font-serif text-3xl font-bold text-center text-black">
          Courses
        </h1>

        <p className="px-8 pb-8 text-base text-center text-black md:px-24 lg:top-5 lg:text-lg">
          We provide an arsenal of a wide range of offerings from internships
          to placements which are strategically curated and drafted by
          Analytics professionals as per industry standards.
        </p>        
      </section>

      <section className="py-16 bg-back">
        <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col py-6 pl-6 space-y-4 bg-white shadow-2xl rounded-2xl md:pl-12 md:py-12">
            <div className="flex items-center justify-between w-full pb-4 space-x-12">
              <h3 className="text-2xl font-bold">
                MAS 101
              </h3>
              <div className="relative">                            
                <img
                    src={exclusive}
                    alt="exclusive"
                    className="z-0 h-full"
                />
                <p className="absolute text-white z-10 top-1.5 right-8 font-bold">
                  For IITs, BITS
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col  lg:h-[35vh] h-auto items-center pr-6 space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start md:pr-12">
              <img
                    src={artboard1}
                    alt="artboard"
                    className="w-1/2 h-36 md:ml-8"
                  />
              <div className="text-sm min-w-xl">
              <p className="mb-4">One to one mentorship</p>
                <p className="mb-4">
                  <b>100%</b> doubts solving 
                </p>
                <p className="mb-4">
                  No prior knowledge required
                </p>
                <p className="mb-4">
                  <b>200+</b> tests
                </p>
                <p className="mb-4">30+ industry certified courses</p>
                <p className="mb-4">96% placement success</p>
                <p className="mb-4">250+ company tieups</p>
                <p className="text-[15px] font-semibold text-blue-600">
                  ₹ 3000 + ISA
                </p>

              </div>
            </div>
            <div className="pr-12 text-right" >
              <Link
                  to="/mas101"
                  className="px-4 py-3 mb-4 text-sm text-white bg-blue-800 rounded-xl hover:bg-blue-900 hover:shadow-xl"
                >
                  Explore Now
              </Link>
            </div>
            
          </div>

          <div className="flex flex-col py-6 pl-6 space-y-4 bg-white shadow-2xl rounded-2xl md:pl-12 md:py-12">
            <div className="flex items-center justify-between w-full pb-4 space-x-12">
              <h3 className="text-2xl font-bold">
                MAS 102
              </h3>
              <div className="relative">                            
                <img
                    src={exclusive}
                    alt="exclusive"
                    className="z-0 h-full"
                />
                <p className="absolute text-white z-10 top-1.5 right-8 font-bold">
                  For NITs, BITS
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col lg:h-[35vh] h-auto  items-center pr-6 space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start md:pr-12">
              <img
                    src={artboard2}
                    alt="artboard"
                    className="w-1/2 h-36 md:ml-8"
                  />
              <div className="text-sm min-w-xl">
              <p className="mb-4">One to one mentorship</p>
                <p className="mb-4">
                  <b>100%</b> doubts solving 
                </p>
                <p className="mb-4">
                  No prior knowledge required
                </p>
                <p className="mb-4">
                  <b>200+</b> tests
                </p>
                <p className="mb-4">30+ industry certified courses</p>
                <p className="mb-4">96% placement success</p>
                <p className="mb-4">250+ company tieups</p>
                <p className="text-[15px] font-semibold text-blue-600">
                  ₹ 3000 + ISA
                </p>

              </div>
            </div>
            <div className="pr-12 text-right" >
              <Link
                  to="/mas102"
                  className="px-4 py-3 mb-4 text-sm text-white bg-blue-800 rounded-xl hover:bg-blue-900 hover:shadow-xl"
                >
                  Explore Now
              </Link>
            </div>
            
          </div>
        </div>        
      </section>

      {/* <section className="pb-16 bg-back">      
        <h1 className="py-8 font-serif text-3xl font-bold text-center text-black">
          MAS Prep Drills
        </h1>

        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center justify-center p-6 space-y-6 shadow-2xl bg-card md:p-12 rounded-xl">
            <h3 className="text-2xl font-bold">
              Test Drill
            </h3>
            <img src={artboard3} alt="artboard" className="" />
            <div className="flex flex-col py-4 mx-8 space-y-4 text-sm">
              <p className="">DPPs / Combined / Company Tests</p>              
              <p className="">Quant Sectional Tests</p>
              <p className="">LRDI Sectional Tests</p>
              <p className="">Verbal Sectional Tests</p>
              <p className="">Weekly Test</p>
              <p className="">Price - <span className="line-through">₹ 9000</span></p>
              <p className="">Discount - 50%</p>
              <p className="mb-10 text-[15px] text-blue-600 font-semibold">
                Final Price - ₹ 4500 (Incl. 18 % GST)
              </p>
            </div>
            <div className="flex items-center justify-around space-x-6">
              <a
                href="https://razorpay.com/payment-button/pl_K4pHLfrzbEotPb/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-6 py-2 border-2 border-blue-800 border-solid rounded-xl hover:border-blue-900 hover:shadow-xl">
                  Buy now
                </div>
              </a>

              <div>
                <Link to="/testDrill" className="px-4 py-3 text-white bg-blue-800 cursor-pointer rounded-xl hover:bg-blue-900 hover:shadow-xl">Explore Now</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 space-y-6 shadow-2xl bg-card md:p-12 rounded-xl">
            <h3 className="text-2xl font-bold">
              Placement Drill
            </h3>
            <img src={artboard3} alt="artboard" className="" />
            <div className="flex flex-col py-4 mx-8 space-y-4 text-sm">
              <p className="">DPPs / Combined / Company Tests</p>              
              <p className="">Case Study Expertise</p>
              <p className="">Guesstimates Expertise</p>
              <p className="">Interview Prep & Mocks</p>
              <p className="">GD / Puzzles / Non-Tech Mocks</p>
              <p className="">Price - <span className="line-through">₹ 15000</span></p>
              <p className="">Discount - 50%</p>
              <p className="mb-10 text-[15px] text-blue-600 font-semibold">
                Final Price - ₹ 7500 (Incl. 18 % GST)
              </p>
            </div>
            <div className="flex items-center justify-around space-x-6">
              <a
                href="https://razorpay.com/payment-button/pl_K4pHLfrzbEotPb/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-6 py-2 border-2 border-blue-800 border-solid rounded-xl hover:border-blue-900 hover:shadow-xl">
                  Buy now
                </div>
              </a>

              <div>
                <Link to="/placementDrill" className="px-4 py-3 text-white bg-blue-800 cursor-pointer rounded-xl hover:bg-blue-900 hover:shadow-xl">Explore Now</Link>
              </div>
            </div>
          </div>
        </div>        
      </section> */}

      <Footer />
    </div>
  );
};

export default Courses;
