import React from "react";
import Circle from "../images/Ellipse 75.png";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Rectangle from "../images/Rectangle 528.png";

const Footer = () => {
  return (
    <footer class="font bg-blue-700 md:h-96">
      <div class="container px-24  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-96 relative top-20">
          <span class=" text-2xl font-normal text-white">About</span>
          <img src={Rectangle} className="ml-4" alt="rectangle"></img>

          <p class="mt-5 leading-6 text-sm text-white">
            My Analytics School aims to bridge the gap between the tremendous
            potential of the students and the acclaim they get. Through our
            strategic program, we aim to instil an industry-centric approach in
            the students. Our goal is to provide the quintessential guidance to
            the students keen on becoming world-class professionals.
          </p>
        </div>
        <div class="flex-grow flex  md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class=" px-4 py-20">
            <div class=" font-bold text-white tracking-widest text-4xl mb-3">
              My Analytics School
            </div>
            <div class=" font-normal text-white tracking-widest text-lg mb-3 mt-24">
              <div className="flex">
                <a href="links" className="mr-1">
                  Home
                </a>
                <img
                  src={Circle}
                  alt="circle"
                  className="mx-1 w-1 h-1 rounded-full relative top-3"
                ></img>
                <a href="links" className="mx-1">
                  Mentors
                </a>
                <img
                  src={Circle}
                  alt="circle"
                  className="mx-1 w-1 h-1 rounded-full relative top-3"
                ></img>

                <a href="links" className="mx-1">
                  Courses
                </a>
                <img
                  src={Circle}
                  alt="circle"
                  className="mx-1 w-1 h-1 rounded-full relative top-3"
                ></img>
                <a href="links" className="mx-1">
                  Tests
                </a>
                <img
                  src={Circle}
                  alt="circle"
                  className="mx-1 w-1 h-1 rounded-full relative top-3"
                ></img>
                <a href="links" className="mx-1">
                  Blog
                </a>
                <img
                  src={Circle}
                  alt="circle"
                  className="mx-1 w-1 h-1 rounded-full relative top-3"
                />

                <a href="links" className="mx-1">
                  FAQs
                </a>
              </div>
            </div>
            <div class=" font-normal text-gray-900 tracking-widest text-xl mt-8">
              myanalyticsschool © 2021
            </div>
          </div>

          <div class=" px-4">
            <div className="mt-24">
              <div className="flex m-6">
                <div className=" w-10 h-10 rounded-full bg-white mx-5 relative top-2">
                  <LocationMarkerIcon className="w-6 h-8 relative top-1 left-2 text-blue-600" />
                </div>
                <a href="link" class="text-white hover:text-red-500 text-lg">
                  BMC <br /> Mumbai,India
                </a>
              </div>
              <div className="flex m-6">
                <div className=" w-10 h-10 rounded-full bg-white mx-5 relative top-2">
                  <PhoneIcon className="w-6 h-8 relative top-1 left-2 text-blue-600" />
                </div>
                <a
                  href="link"
                  class="text-white hover:text-red-500 relative top-4"
                >
                  +919999999999
                </a>
              </div>
              <div className="flex m-6">
                <div className=" w-10 h-10 rounded-full bg-white mx-5 relative top-2">
                  <MailIcon className="w-6 h-8 relative top-1 left-2 text-blue-600" />
                </div>

                <a
                  href="link"
                  class="text-white hover:text-red-500 relative top-4"
                >
                  name@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
