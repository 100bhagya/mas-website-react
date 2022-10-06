import React, { useEffect, useState } from "react";
import Bar from "../images/bar.png";
import Circle from "../images/Ellipse 75.png";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";
import Instagram from "../images/instagram_icon.png";
import Facebook from "../images/facebook_white.png";
import LinkedIn from "../images/linked_in.png";
import Logo from "../images/logo_white.png";
import { Link } from "react-router-dom";
import Privacy from "./Privacy";
import Terms from "./Terms";

const Footer = () => {
  const [isShowPrivacy, setIsShowPrivacy] = useState(false);
  const [isShowTerms, setIsShowTerms] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer class="bg-blue-900 p-12">
      {isShowPrivacy ? (
        <Privacy
          setIsShowPrivacy={setIsShowPrivacy}
          isShowTerms={isShowTerms}
        />
      ) : null}
      {isShowTerms ? (
        <Terms setIsShowTerms={setIsShowTerms} isShowPrivacy={isShowPrivacy} />
      ) : null}      

      <div className="flex flex-col space-y-12 items-center justify-around md:flex-row md:space-x-12 md:space-y-0 md:items-start text-white lg:justify-center">
        <div className="">
          <img
            src={Logo}
            className="w-48"
            alt="rectangle"
          ></img>

          <p class="hidden mt-5 leading-5 text-sm text-white md:block max-w-sm">
            My Analytics School is an Ed-Tech start-up founded by IIT alumni,
            providing an end-to-end solution for analytics, data science
            placements and related job preparation. We aim to bridge the gap
            between the tremendous potential of the students and the acclaim
            they get. Through our strategic program, we aim to instill an
            industry-centric approach in the students.
          </p>
        </div>

        <div className="flex flex-col space-y-8 items-center justify-around lg:flex-row lg:space-y-0 lg:space-x-12 lg:items-center">
          <div className="flex flex-col space-y-6 justify-start">
            {/* explore and helpful links */}
            <div className="">
              <h3 className="pb-3 font-bold text-lg tracking-wider">Explore</h3>
              <div className="flex space-x-6 text-sm">
                <Link
                  to="/"
                  className="hover:scale-105 hover:text-slate-300"              
                >
                  Home
                </Link>
                <img src={Bar} alt="circle" className="" />
                <Link
                  to="/courses"
                  className="hover:scale-105 hover:text-slate-300"
                >
                  Courses
                </Link>
                <img src={Bar} alt="circle" className="" />
                <Link
                  to="/mentors"
                  className="hover:scale-105 hover:text-slate-300"
                >
                  Mentors
                </Link>
              </div>
            </div>

            <div>
              <h3 className="pb-3 font-bold text-lg tracking-wider">
                Helpful Links
              </h3>
              <div className="flex space-x-6 text-sm md:flex-col md:space-x-0 md:space-y-2">
                <Link
                  to="/faq"
                  className="hover:text-slate-300"
                >
                  FAQs
                </Link>
                <img src={Bar} alt="circle" className="md:hidden" />  
                <a
                  href="https://myanalyticsschool.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-300"
                >
                  Blogs
                </a>
                <img src={Bar} alt="circle" className="md:hidden" />
                <Link
                  to="/about"
                  className="hover:text-slate-300"
                >
                  About Us
                </Link>
              </div>
            </div>
            
          </div>

          <div className="flex flex-col space-y-8 items-start justify-center">
            {/* contact us and follow us  */}
            <div>
              <div className="text-xl font-semibold text-white">Contact Us</div>
                <div className="flex items-center mt-5">
                  <div className="w-10 h-10 rounded-full border-solid border-2 border-white mr-5">
                    <PhoneIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
                  </div>
                  <a
                    href="tel:9604077455"
                    class="text-white hover:text-slate-300"
                  >
                    +919604077455
                  </a>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full border-solid border-2 border-white mr-5">
                  <MailIcon className="w-6 h-8 relative top-[2px] left-[6px] text-white" />
                </div>
                <a
                  href="mailto:admin@myanalyticsschool.com"
                  class="text-white hover:text-slate-300 text-[14px]"
                >
                  admin@myanalyticsschool.com
                </a>
              </div>
            </div>

            <div>
              <div className="text-xl font-semibold text-white">Follow Us</div>
              <div className="flex items-center mt-3">
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 cursor-pointer hover:scale-105 duration-200">
                  <a
                    href="https://www.linkedin.com/company/my-analytics-school"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedIn}
                      alt="icon"
                      className="w-5 h-5 relative top-2 left-2 text-white"
                    />
                  </a>
                </div>
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 cursor-pointer hover:scale-105 duration-200">
                  <a
                    href="https://instagram.com/myanalyticsschool?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="icon"
                      className="w-5 h-5 relative top-2 left-2 text-white"
                    />
                  </a>
                </div>
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 cursor-pointer hover:scale-105 duration-200">
                  <a
                    href="https://www.facebook.com/myanalyticsschool/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Facebook}
                      alt="icon"
                      className="w-7 h-7 relative top-[3px] left-[3px] text-white"
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>      


      <div className="h-0.5 md:mt-10 mt-20 w-9/10 mx-auto bg-white"></div>
      <div className="flex justify-between items-center w-9/10 mt-4">
        <div className="text-white text-[9px]">
          myanalyticsschool © 2022
        </div>
        <div className="flex justify-end items-center space-x-4">
          <div
            className="text-white text-[9px] cursor-pointer"
            onClick={(e) => {
              setIsShowPrivacy(!isShowPrivacy);
            }}
          >
            Privacy{" "}
          </div>


          <div
            className="text-white text-[9px] cursor-pointer"
            onClick={(e) => {
              setIsShowTerms(!isShowTerms);
            }}
          >
            Terms & Conditions
          </div>
        </div>

      </div>      
    </footer>
  );
};

export default Footer;
