import React, { useState } from "react";
import Logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import CloseIcon from "../images/cross_head.png";
import MenuIcon from "../images/menu_head.png";
import Logo_mobile from "../images/logo_head.png";
import LoginForm from "./LoginForm";
import "../index.css";

function SideMenu() {
  return (
    <div className="fixed h-screen w-[75%] md:hidden bg-white z-50 top-[60px]">
      <div className="w-full items-start flex flex-col">
        <NavLink
          to="/"
          exact
          activeClassName="active"
          className="mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          Home
        </NavLink>

        <NavLink
          to="/mentors"
          activeClassName="active"
          className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          Mentors
        </NavLink>

        <NavLink
          to="/courses"
          activeClassName="active"
          className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          Courses
        </NavLink>

        <NavLink
          to="/tests"
          activeClassName="active"
          className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          Tests
        </NavLink>

        <a
          href="https://myanalyticsschool.com/blog/"
          target="_blank"
          rel="noopener noreferrer"
          className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          Blogs
        </a>

        <NavLink
          to="/faq"
          activeClassName="active"
          className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          FAQs
        </NavLink>

        <NavLink
          to="/about"
          activeClassName="active"
          className=" mob_pos mob_pos1 w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const closeLogin = () => {
    setIsShowLogin(!isShowLogin);
  };
  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <div className="">
      <nav className="flex lg:pl-20 pl-6 py-0 items-center bg-white p-3 flex-wrap navbar fixed w-full z-[100000]">
        <a href="/" className="p-2 mr-4 inline-flex items-center">
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
        </a>

        <div
          className=" w-full md:inline-flex md:flex-grow-0 md:w-auto"
          id="navigation"
        >
          <div className="md:inline-flex text-[12px] lg:text-[16px] md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/mentors"
              activeClassName="active"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Mentors
            </NavLink>

            <NavLink
              to="/courses"
              activeClassName="active"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Courses
            </NavLink>

            <NavLink
              to="/tests"
              activeClassName="active"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Tests
            </NavLink>

            <a
              href="https://myanalyticsschool.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              Blogs
            </a>

            <NavLink
              to="/faq"
              activeClassName="active"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              FAQs
            </NavLink>

            <NavLink
              to="/about"
              activeClassName="active"
              className="md:inline-flex md:w-auto w-full lg:px-5 px-4 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
            >
              About Us
            </NavLink>
          </div>
        </div>
        <div className=" w-full md:inline-flex md:flex-grow justify-end md:w-auto">
          <div
            className="md:inline-flex cursor-pointer md:w-auto lg:text-lg text-[12px] lg:px-12 px-4 lg:mr-20 mr-3 border-2  border-blue-500 lg:py-2 py-1 rounded-xl text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white"
            onClick={handleClick}
          >
            <span>Register</span>
          </div>
        </div>
      </nav>
      <div className="h-[60px] fixed w-full bg-white z-50 flex">
        <button
          onClick={() => {
            showSideMenu();
          }}
          className="md:hidden menu-button relative left-[7%]"
        >
          {isSideMenuOpen ? (
            <img src={CloseIcon} className="fixed px-1 top-6" alt="close"></img>
          ) : (
            <img src={MenuIcon} className="fixed px-1 top-6" alt="menu"></img>
          )}
        </button>
        {isSideMenuOpen ? SideMenu() : ""}
        <a
          href="/"
          className="p-2 mr-4 relative left-[150px] inline-flex items-center"
        >
          <Link to="/">
            <img src={Logo_mobile} alt="logo"></img>
          </Link>
        </a>
        <div className=" w-full justify-end">
          <div
            onClick={handleClick}
            className=" px-5 relative left-[186px] text-[15px] top-[18px] border-2 border-blue-500 py-1 rounded-md text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white"
          >
            <span>Register</span>
          </div>
        </div>
        <LoginForm isShowLogin={isShowLogin} closeLogin={closeLogin} />
      </div>
    </div>
  );
};

export default Navbar;
