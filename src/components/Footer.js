import React from "react";
import Bar from "../images/bar.png";
import Circle from "../images/Ellipse 75.png";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";
import Instagram from "../images/instagram_icon.png";
import Facebook from "../images/facebook_white.png";
import LinkedIn from "../images/linked_in.png";
import Logo from "../images/logo_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-blue-900">
      <div class="container lg:px-24 px-10 md:px-0  mx-auto md:flex lg:items-start ">
        <div class="w-[380px] relative md:top-20 top-10 left-[11%] lg:left-0">
          <img
            src={Logo}
            className="relative md:bottom-6"
            alt="rectangle"
          ></img>

          <p class="mt-5 leading-6 text-sm text-white hidden md:block">
            My Analytics School is an Ed-Tech start-up founded by IIT alumni,
            providing an end-to-end solution for analytics, data science
            placements and related job preparation. We aim to bridge the gap
            between the tremendous potential of the students and the acclaim
            they get. Through our strategic program, we aim to instill an
            industry-centric approach in the students.
          </p>
        </div>
        <div className="md:hidden mt-24">
          <div className="text-xl font-semibold text-white">Contact Us</div>
          <div className="flex mt-5">
            <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
              <PhoneIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
            </div>
            <a
              href="tel:9604077455"
              class="text-white hover:text-red-500 relative top-4"
            >
              +919604077455
            </a>
          </div>
          <div className="flex mt-4">
            <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
              <MailIcon className="w-6 h-8 relative top-[2px] left-[6px] text-white" />
            </div>

            <a
              href="mailto:admin@myanalyticsschool.com"
              class="text-white hover:text-red-500 relative top-4 text-[14px]"
            >
              admin@myanalyticsschool.com
            </a>
          </div>
        </div>
        <div className="md:block lg:flex">
          <div class=" md:px-4 md:mt-[80px]">
            <div class=" font-normal text-white tracking-widest text-lg mb-3 md:mt-24 md:ml-28 mt-12">
              <div className="relative lg:bottom-[70px] md:-bottom-2 text-xl font-semibold">
                Explore
              </div>
              <div className="flex relative md:bottom-12 top-4 md:top-6 lg:top-0">
                <Link
                  to="/"
                  className="mr-6 md:text-[16px] text-[14px] font-normal "
                >
                  Home
                </Link>
                <img src={Bar} alt="circle" className="md:mx-1" />
                <Link
                  to="/courses"
                  className="mx-6 md:text-[16px] text-[14px] font-normal"
                >
                  Courses
                </Link>
                <img src={Bar} alt="circle" className="md:mx-1" />
                <Link
                  to="/mentors"
                  className="mx-6 md:text-[16px] text-[14px] font-normal"
                >
                  Mentors
                </Link>
              </div>
              <div className="relative md:bottom-1 mt-14 text-[16px] font-semibold">
                Helpful Links
              </div>
              <div className="flex md:flex-col mt-3">
                <Link
                  to="/faq"
                  className="mr-5 md:text-[16px] text-[14px] font-normal"
                >
                  FAQs
                </Link>
                <img src={Bar} alt="circle" className="md:mx-1 md:hidden" />
                <a
                  href="links"
                  className="mx-5 md:mx-0 md:text-[16px] text-[14px] font-normal"
                >
                  Blogs
                </a>
                <img src={Bar} alt="circle" className="md:mx-1 md:hidden" />
                <Link
                  to="/about"
                  className="mx-5 md:mx-0 md:text-[16px] text-[14px] font-normal"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div class=" md:px-4 lg:mt-[104px] md:mt-[54px] md:ml-28">
            <div className="hidden md:block">
              <div className="text-xl font-semibold text-white">Contact Us</div>
              <div className="flex mt-5">
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                  <PhoneIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
                </div>
                <a
                  href="tel:9604077455"
                  class="text-white hover:text-red-500 relative top-4"
                >
                  +919604077455
                </a>
              </div>
              <div className="flex mt-4">
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                  <MailIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
                </div>

                <a
                  href="mailto:admin@myanalyticsschool.com"
                  class="text-white hover:text-red-500 relative top-4"
                >
                  admin@myanalyticsschool.com
                </a>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-xl font-semibold text-white">Follow Us</div>
              <div className="flex mt-3">
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
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
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
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
                <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
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
      <div className="h-[2px] md:mt-10 mt-20 w-[85%] justify-center text-center relative left-[6.3%] bg-white"></div>
      <div className="lg:text-center md:text-left ml-6 lg:ml-0 md:ml-14 mt-3 md:mt-3 lg:mt-7 text-white md:text-lg text-[9px] font-normal">
        myanalyticsschool © 2021
      </div>
      <div className="relative lg:left-[73%] md:left-[58%] left-[54%] bottom-8 flex">
        <a
          href="https://docs.google.com/document/d/1XIVLCoo_91ZfX2-vffUVt8UVUmQsTrzWpME4R1wmro8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white md:text-lg text-[9px] mt-5 md:mt-0 ">
            Privacy{" "}
          </div>
        </a>
        <img
          src={Circle}
          alt=""
          className="rounded-full h-[2px] w-[2px] md:mx-3 mx-2 relative md:top-3 top-6"
        />
        <a
          href="https://docs.google.com/document/d/1XIVLCoo_91ZfX2-vffUVt8UVUmQsTrzWpME4R1wmro8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white md:text-lg text-[9px] mt-5 md:mt-0">
            Terms & Conditions
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
