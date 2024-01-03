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
    <footer class="bg-slate-800 p-12">
      {isShowPrivacy ? (
        <Privacy
          setIsShowPrivacy={setIsShowPrivacy}
          isShowTerms={isShowTerms}
        />
      ) : null}
      {isShowTerms ? (
        <Terms setIsShowTerms={setIsShowTerms} isShowPrivacy={isShowPrivacy} />
      ) : null}

      <div className="flex flex-col items-center justify-around space-y-12 text-slate-200 md:flex-row md:space-x-12 md:space-y-0 md:items-start lg:justify-center">
        <div className="">
          <img src={Logo} className="w-48" alt="rectangle"></img>

          <p class="hidden mt-5 leading-5 text-sm text-slate-200 md:block max-w-sm">
            My Analytics School is an Ed-Tech start-up founded by IIT alumni,
            providing an end-to-end solution for analytics, data science
            placements and related job preparation. We aim to bridge the gap
            between the tremendous potential of the students and the acclaim
            they get. Through our strategic program, we aim to instill an
            industry-centric approach in the students.
          </p>
        </div>

        <div className="flex flex-col items-center justify-around space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12 lg:items-center">
          <div className="flex flex-col justify-start space-y-6">
            {/* explore and helpful links */}
            <div className="">
              <h3 className="pb-3 text-lg ml-[8%] md:ml-0 font-bold text-white tracking-wider">Explore</h3>
              <div className="flex flex-row p-8 space-x-2 text-sm md:p-0 md:space-x-6">
                <div className="flex flex-col space-y-1">
                <Link to="/" className="hover:scale-105 hover:text-white">
                  Home
                </Link>
                <Link to="/mas101" className="hover:scale-105 hover:text-white">
                  MAS 101
                </Link>
                <Link to="/mas102" className="hover:scale-105 hover:text-white">
                  MAS 102
                </Link>
                <a href="https://aceinterview.myanalyticsschool.com/" target="_blank" className="hover:scale-105 hover:text-white">
                  Interviews
                </a>
                </div>
                
                <img src={Bar} alt="circle" className="" />
                <Link
                  to="/courses"
                  className=""
                >
                  For Students
                  <div className="flex flex-col space-y-1 ">
                    <Link
                      to="/courses"
                      className="mt-1 hover:scale-105 hover:text-white"
                    >
                      {" "}
                      Courses
                    </Link>
                    <Link
                      to="/tests"
                      className="hover:scale-105 hover:text-white"
                    >
                      {" "}
                      Tests
                    </Link>
                    <Link
                      to="/mentors"
                      className="hover:scale-105 hover:text-white"
                    >
                      {" "}
                      Mentors
                    </Link>
                  </div>
                </Link>
                <img src={Bar} alt="circle" className="" />
                <Link
                  to="/colleges"
                  className="hover:scale-105 hover:text-white"
                >
                  For Colleges
                </Link>
                <img src={Bar} alt="circle" className="" />
                <Link
                  to="/companies"
                  className="hover:scale-105 hover:text-white"
                >
                  For Companies
                </Link>
              </div>
            </div>

            <div>
              <h3 className="pb-3 ml-[8%] md:ml-0 text-lg font-bold text-white tracking-wider">
                Helpful Links
              </h3> 
              <div className="flex p-8 space-x-2 text-sm md:p-0 md:flex-col md:space-x-0 md:space-y-2">
                <Link to="/faq" className="hover:text-white">
                  FAQs
                </Link>
                <img src={Bar} alt="circle" className="md:hidden" />
                <a
                  href="blog"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Blogs
                </a>
                <img src={Bar} alt="circle" className="md:hidden" />
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start  space-y-8">
            {/* contact us and follow us  */}
            <div>
              <div className="text-xl font-semibold text-white">Contact Us</div>
              <div className="flex mt-2">
                <div className="w-10 h-10 mr-1">
                  <PhoneIcon className="w-6 h-8 relative top-1 left-[6px] text-slate-200" />
                </div>
                <a
                  href="tel:9604077455"
                  class="text-slate-200 hover:text-white"
                >
                  +919604077455
                </a>
              </div>
              <div className="flex mt-2">
                <div className="w-10 h-10 mr-1">
                  <MailIcon className="w-6 h-8 relative top-[2px] left-[6px] text-slate-200" />
                </div>
                <a
                  href="mailto:admin@myanalyticsschool.com"
                  class="text-slate-200 hover:text-white text-[14px]"
                >
                  admin@myanalyticsschool.com
                </a>
              </div>
            </div>

            <div>
              <div className="text-xl font-semibold text-white text-slate-200">Follow Us</div>
              <div className="flex items-center mt-3">
                <div className="w-10 h-10 duration-200 cursor-pointer hover:scale-105">
                  <a
                    href="https://www.linkedin.com/company/my-analytics-school"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedIn}
                      alt="icon"
                      className="relative w-5 h-5 text-slate-200 top-2 left-2"
                    />
                  </a>
                </div>
                <div className="w-10 h-10 duration-200 cursor-pointer hover:scale-105">
                  <a
                    href="https://instagram.com/myanalyticsschool?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="icon"
                      className="relative w-5 h-5 text-slate-200 top-2 left-2"
                    />
                  </a>
                </div>
                <div className="w-10 h-10 duration-200 cursor-pointer hover:scale-105">
                  <a
                    href="https://www.facebook.com/myanalyticsschool/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Facebook}
                      alt="icon"
                      className="w-7 h-7 relative top-[3px] left-[3px] text-slate-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-0.5 md:mt-10 mt-20 w-9/10 mx-auto bg-white"></div>
      <div className="flex items-center justify-between mt-4 w-9/10">
        <div className="text-slate-200 text-[12px]">myanalyticsschool © 2023</div>
        <div className="flex items-center justify-end space-x-4">
          <div
            className="text-slate-200 text-[12px] cursor-pointer"
            onClick={(e) => {
              setIsShowPrivacy(!isShowPrivacy);
            }}
          >
            Privacy{" "}
          </div>

          <div
            className="text-slate-200 text-[12px] cursor-pointer"
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
