import React, { useState } from "react";
import Logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import CloseIcon from "../images/cross.jpg";
import MenuIcon from "../images/menu.png";
import "../index.css";

function SideMenu() {
  return (
    <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-white z-50 bottom-[0px]">
      <ul className="menu-list flex flex-col text-xs font-bold">
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a href="/">Home</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a href="profile">Profile</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a href="setting">Settings</a>
        </li>
      </ul>
    </div>
  );
}

const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <div>
      <nav className="flex pl-20 py-0 items-center bg-white p-3 flex-wrap navbar fixed w-full z-[100000]">
        <a href="/" className="p-2 mr-4 inline-flex items-center">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
        </a>

        <div
          className=" w-full lg:inline-flex lg:flex-grow-0 lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/mentors"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Mentors
            </NavLink>

            <NavLink
              to="/courses"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Courses
            </NavLink>

            <NavLink
              to="/tests"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Tests
            </NavLink>

            <a
              href="https://myanalyticsschool.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Blogs
            </a>

            <NavLink
              to="/faq"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              FAQs
            </NavLink>

            <NavLink
              to="/about"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              About Us
            </NavLink>
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
      <button
        onClick={() => {
          showSideMenu();
        }}
        className="lg:hidden menu-button relative left-[88%]"
      >
        {isSideMenuOpen ? (
          <img src={CloseIcon} className="w-8 h-8 px-2 fixed" alt="close"></img>
        ) : (
          <img src={MenuIcon} className="w-8 h-8 fixed px-2" alt="menu"></img>
        )}
      </button>
      {isSideMenuOpen ? SideMenu() : ""}
    </div>
  );
};

export default Navbar;
