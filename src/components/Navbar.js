import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex pl-20 py-0 items-center bg-white p-3 flex-wrap">
        <a href="link" className="p-2 mr-4 inline-flex items-center">
          <img src={Logo} alt="logo"></img>
        </a>

        {/* This is hamsburger */}
        {/* <button
          className="text-black inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <i className="material-icons">menu</i>
        </button> */}
        <div
          className=" w-full lg:inline-flex lg:flex-grow-0 lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <Link to="/">Home</Link>
            </a>
            <a
              href="roadmap"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <span>Roadmap</span>
            </a>
            <a
              href="mentors"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <Link to="/mentors">Mentors</Link>
            </a>
            <a
              href="courses"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <span>Courses</span>
            </a>
            <a
              href="tests"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <span>Tests</span>
            </a>
            <a
              href="blogs"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <span>Blogs</span>
            </a>

            <a
              href="faq"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <span>FAQs</span>
            </a>
            <a
              href="about"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-purple-500"
            >
              <Link to="/about">About Us</Link>
            </a>
          </div>
        </div>
        <div className=" w-full lg:inline-flex lg:flex-grow justify-end lg:w-auto">
          <a
            href="register"
            className="lg:inline-flex lg:w-auto w-full px-12 mr-20 border-2 border-blue-500 py-2 rounded-xl text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white"
          >
            <span>Register</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
