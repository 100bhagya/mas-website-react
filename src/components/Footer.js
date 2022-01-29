import React from "react";
import Bar from "../images/bar.png";
import Circle from "../images/Ellipse 75.png";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";
import Instagram from "../images/instagram_icon.png";
import Twitter from "../images/twitter_icon.png";
import LinkedIn from "../images/linked_in.png";
import Logo from "../images/logo_white.png";

const Footer = () => {
  return (
    <footer class="bg-blue-900">
      <div class="container md:px-24 px-10  mx-auto md:flex md:items-center lg:items-start ">
        <div class="w-[380px] relative md:top-20 top-10 left-[11%] lg:left-0">
          <img
            src={Logo}
            className="relative md:bottom-6"
            alt="rectangle"
          ></img>

          <p class="mt-5 leading-6 text-sm text-white hidden md:block">
            My Analytics School aims to bridge the gap between the tremendous
            potential of the students and the acclaim they get. Through our
            strategic program, we aim to instil an industry-centric approach in
            the students. Our goal is to provide the quintessential guidance to
            the students keen on becoming world-class professionals.
          </p>
        </div>
        <div className="md:hidden mt-24">
          <div className="text-xl font-semibold text-white">Contact Us</div>
          <div className="flex mt-5">
            <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
              <PhoneIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
            </div>
            <a href="link" class="text-white hover:text-red-500 relative top-4">
              +919999999999
            </a>
          </div>
          <div className="flex mt-4">
            <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
              <MailIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
            </div>

            <a href="link" class="text-white hover:text-red-500 relative top-4">
              name@example.com
            </a>
          </div>
        </div>
        <div class=" md:px-4 md:mt-[80px]">
          <div class=" font-normal text-white tracking-widest text-lg mb-3 md:mt-24 md:ml-28 mt-12">
            <div className="relative md:bottom-[70px] text-xl font-semibold">
              Explore
            </div>
            <div className="flex relative md:bottom-12 top-4 lg:top-0">
              <a
                href="links"
                className="mr-6 md:text-[16px] text-[14px] font-normal "
              >
                Home
              </a>
              <img src={Bar} alt="circle" className="md:mx-1" />
              <a
                href="links"
                className="mx-6 md:text-[16px] text-[14px] font-normal"
              >
                Courses
              </a>
              <img src={Bar} alt="circle" className="md:mx-1" />
              <a
                href="links"
                className="mx-6 md:text-[16px] text-[14px] font-normal"
              >
                Mentors
              </a>
            </div>
            <div className="relative md:bottom-1 mt-14 text-[16px] font-semibold">
              Helpful Links
            </div>
            <div className="flex md:flex-col mt-3">
              <a
                href="links"
                className="mr-5 md:text-[16px] text-[14px] font-normal"
              >
                FAQs
              </a>
              <img src={Bar} alt="circle" className="md:mx-1 md:hidden" />
              <a
                href="links"
                className="mx-5 md:mx-0 md:text-[16px] text-[14px] font-normal"
              >
                Blogs
              </a>
              <img src={Bar} alt="circle" className="md:mx-1 md:hidden" />
              <a
                href="links"
                className="mx-5 md:mx-0 md:text-[16px] text-[14px] font-normal"
              >
                About Us
              </a>
            </div>
          </div>
        </div>

        <div class=" md:px-4 md:mt-[104px] md:ml-28">
          <div className="hidden md:block">
            <div className="text-xl font-semibold text-white">Contact Us</div>
            <div className="flex mt-5">
              <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                <PhoneIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
              </div>
              <a
                href="link"
                class="text-white hover:text-red-500 relative top-4"
              >
                +919999999999
              </a>
            </div>
            <div className="flex mt-4">
              <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                <MailIcon className="w-6 h-8 relative top-1 left-[6px] text-white" />
              </div>

              <a
                href="link"
                class="text-white hover:text-red-500 relative top-4"
              >
                name@example.com
              </a>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-xl font-semibold text-white">Follow Us</div>
            <div className="flex mt-3">
              <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                <img
                  src={Instagram}
                  alt="icon"
                  className="w-5 h-5 relative top-2 left-2 text-white"
                />
              </div>
              <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                <img
                  src={LinkedIn}
                  alt="icon"
                  className="w-5 h-5 relative top-2 left-2 text-white"
                />
              </div>
              <div className=" w-10 h-10 rounded-full border-solid border-2 border-white mr-5 relative top-2">
                <img
                  src={Twitter}
                  alt="icon"
                  className="w-5 h-5 relative top-2 left-2 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] md:mt-10 mt-20 w-[85%] justify-center text-center relative left-[6.3%] bg-white"></div>
      <div className="md:text-center ml-6 md:ml-0 mt-3 md:mt-7 text-white md:text-lg text-[9px] font-normal">
        myanalyticsschool © 2021
      </div>
      <div className="relative md:left-[73%] left-[54%] bottom-8 flex">
        <div className="text-white md:text-lg text-[9px] mt-5 md:mt-0 ">
          Privacy{" "}
        </div>
        <img
          src={Circle}
          alt=""
          className="rounded-full h-[2px] w-[2px] md:mx-3 mx-2 relative md:top-3 top-6"
        />
        <div className="text-white md:text-lg text-[9px] mt-5 md:mt-0">
          Terms & Conditions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
