import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import artboard1 from "../images/launching soon.jpg";
import artboard2 from "../images/register now.png";
import artboard3 from "../images/exam.avif";
import artboard4 from "../images/courses_artboard4.png";
import artboard5 from "../images/courses_artboard5.png";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import exclusive from "../images/exclusive.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Traction from "../images/Traction.png";
import TrackRecordData from "../data/TrackRecord";

const Courses = () => {
  return (
    <div>
      <Navbar />

      <section className="pt-24 pb-16 bg-blue-50">
        <h1 className="py-8 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl text-center  font-primary">
          Our <span className="text-sky-800">Courses</span>
        </h1>

        <p className="px-8 pb-8 text-base text-center text-slate-600 md:px-24 lg:top-5 lg:text-lg max-w-6xl mx-auto">
        Discover a wide range of offerings from exciting internships to well-planned job placements 
        designed by experienced Analytics experts following industry norms. 
        Unlock your possibilities with our unique opportunities!
        </p>        
      </section>

      <section className=" pb-32 bg-blue-50">         

        <div className="flex flex-col items-center pb-16  justify-center space-y-16 lg:flex-row lg:space-y-4 lg:space-x-20">
          <div className="flex flex-col py-6 pl-6 space-y-4 bg-white shadow-lg border rounded-2xl md:pl-12 md:py-12">
            <div className="flex items-center justify-between w-full pb-4 space-x-12">
              <h3 className="lg:text-2xl text-lg font-bold lg:w-[300px] md:w-[180px] w-[100px]">
                Data Analytics and Data Science Bootcamp
              </h3>
              <div className="relative">                            
                <img
                    src={exclusive}
                    alt="exclusive"
                    className="z-0 h-full"
                />
                <p className="absolute text-white z-10 top-1.5 right-8 font-bold">
                  For All
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col lg:h-[35vh] h-auto  items-center pr-6 space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start md:pr-12">
              <img
                    src={artboard2}
                    alt="artboard"
                    className="w-36 h-36 md:ml-8"
                  />
              <div className="text-sm min-w-xl">
              <p className="mb-4 font-bold">
                In this course, you get:
              </p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              Master Data Skills, <br/> Become an Analyst in 5 Months</p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              Land Your Dream Job</p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              Expert Guidance</p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              Build Real-World Projects </p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              Earn Industry Certificates</p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  <b>100%</b> doubts solving 
                </p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                Guaranteed Placement
                </p>
                <p className="text-[15px] font-semibold text-blue-600">
                  ₹ 19999 + PAP
                </p>

              </div>
            </div>
            <div className="pr-12 text-right" >
              <Link
                  to="/da-ds-bootcamp"
                  className="px-4 py-3 mb-4 text-sm text-white bg-blue-800 rounded-xl hover:bg-blue-900 hover:shadow-xl"
                >
                  Explore Now
              </Link>
            </div>
            
          </div>
          </div>   
        
          <div className="flex flex-col items-center justify-center space-y-16 lg:flex-row lg:space-y-4 lg:space-x-20">
          <div className="flex flex-col py-6 pl-6 space-y-4 bg-white shadow-lg border rounded-2xl md:pl-12 md:py-12">
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
                  For IITs
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col  lg:h-[35vh] h-auto items-center pr-6 space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start md:pr-12">
              <img
                    src={artboard1}
                    alt="artboard"
                    className="w-36 md:ml-4"
                  />
              <div className="text-sm min-w-xl">
              <p className="mb-4 font-bold">
                In this course, you get:
              </p>
              <p className="mb-3 text-slate-600">
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                One to one mentorship
              </p>
                <p className="mb-3 text-slate-600">
                  <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  <b>100%</b> doubts solving 
                </p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  No prior knowledge required
                </p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  <b>200+</b> tests
                </p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  <b>96%</b> placement success
                </p>
                <p className="mb-3 text-slate-600">
                  <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  <b>30+</b> industry certified courses
                </p>
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
          
          <div className="flex flex-col py-6 pl-6 space-y-4 bg-white shadow-lg border rounded-2xl md:pl-12 md:py-12">
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
                  For NITs, BITs
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col lg:h-[35vh] h-auto  items-center pr-6 space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start md:pr-12">
              <img
                    src={artboard1}
                    alt="artboard"
                    className="w-36 h-36 md:ml-8"
                  />
              <div className="text-sm min-w-xl">
              <p className="mb-4 font-bold">
                In this course, you get:
              </p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              One to one mentorship</p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />        
              <b>100%</b> doubts solving </p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              <b>200+</b> tests</p>
              <p className="mb-3 text-slate-600"> 
              <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
              <b>30+</b> industry certified courses</p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                <b>250+</b> company tieups
                </p>
                <p className="mb-3 text-slate-600">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                Off campus job oppurtunities
                </p>
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

      <section className="py-16 mb-16">
        <h1 className="py-8 pb-16 text-3xl font-bold text-center text-black">
          MAS Prep Drills
        </h1>

        <div className="flex flex-col items-center justify-center space-y-16 md:flex-row md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center justify-center p-6 space-y-6 shadow-md border bg-white md:p-12 rounded-xl">
            <h3 className="text-2xl font-bold">
              Test Drill
            </h3>
            <img src={artboard3} alt="artboard" className="w-48" />
            <div className="flex flex-col py-4 mx-8 space-y-4 text-sm">
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                DPPs / Combined / Company Tests</p>              
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                Quant Sectional Tests</p>
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                LRDI Sectional Tests</p>
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                Verbal Sectional Tests</p>
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                Weekly Test</p>
              <p className="text-slate-600 mb-0 font-bold">
                Price - <span className="line-through">₹ 9000</span></p>
              <p className="text-slate-600 mb-0 font-bold">
                Discount - 50%</p>
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

          <div className="flex flex-col items-center justify-center p-6 space-y-6 shadow-md border bg-white md:p-12 rounded-xl">
            <h3 className="text-2xl font-bold">
              Placement Drill
            </h3>
            <img src={artboard3} alt="artboard" className="w-48" />
            <div className="flex flex-col py-4 mx-8 space-y-4 text-sm">
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                DPPs / Combined / Company Tests</p>              
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                Case Study Expertise</p>
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                Guesstimates Expertise</p>
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                Interview Prep & Mocks</p>
              <p className="text-slate-600 mb-0">
                <BadgeCheckIcon className="inline w-5 h-5 mr-1 text-blue-500" />
                GD / Puzzles / Non-Tech Mocks</p>
              <p className="text-slate-600 mb-0 font-bold">
                Price - <span className="line-through">₹ 15000</span></p>
              <p className="text-slate-600 mb-0 font-bold">
                Discount - 50%</p>
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
      </section>

      <section className="py-12 px-4 bg-blue-50">
        <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
          Providing Efficient training
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
      
      <Footer />
    </div>
  );
};

export default Courses;
