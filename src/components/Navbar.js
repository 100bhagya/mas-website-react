import React, { useRef, useState } from "react";
import Logo from "../images/logo.webp";
import { NavLink, Link } from "react-router-dom";
import CloseIcon from "../images/cross_head.webp";
import MenuIcon from "../images/menu_head.webp";
import Logo_mobile from "../images/logo_head.webp";
import LoginForm from "./LoginForm";
import "../index.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Button } from "@material-ui/core";

// function SideMenu() {
//   return (
//     <div className="fixed h-screen w-[75%] md:hidden bg-white z-50 top-[60px]">
//       <div className="flex flex-col items-start w-full">
//         <NavLink
//           to="/"
//           exact
//           activeClassName="active"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos hover:border-blue-600"
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/mentors"
//           activeClassName="active"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos hover:border-blue-600"
//         >
//           Mentors
//         </NavLink>

//         <NavLink
//           to="/courses"
//           activeClassName="active"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos hover:border-blue-600"
//         >
//           Courses
//         </NavLink>

//         <NavLink
//           to="/tests"
//           activeClassName="active"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos hover:border-blue-600"
//         >
//           Tests
//         </NavLink>

//         <a
//           href="https://myanalyticsschool.com/blog/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos"
//         >
//           Blogs
//         </a>

//         <NavLink
//           to="/faq"
//           activeClassName="active"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos hover:border-blue-600"
//         >
//           FAQs
//         </NavLink>

//         <NavLink
//           to="/about"
//           activeClassName="active"
//           className="items-center justify-center w-full px-5 py-2 text-gray-800 transition duration-150 border-b-4 border-transparent rounded mob_pos mob_pos1 hover:border-blue-600"
//         >
//           About Us
//         </NavLink>
//       </div>
//     </div>
//   );
// }

const Navbar = () => {
  // const [isShowLogin, setIsShowLogin] = useState(true);
  // const handleClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin);
  // };
  // const closeLogin = () => {
  //   setIsShowLogin(!isShowLogin);
  // };
  // const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  // const showSideMenu = () => {
  //   isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  // };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <nav className="flex items-center justify-between bg-white fixed w-full px-12 py-1 lg:px-24 navbar z-[50]">
        <a href="/">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-24 md:w-28"></img>
          </Link>
        </a>

        <div
          id="navigation"
          className="items-center justify-center hidden text-sm space-x-7 md:flex lg:text-base"
        >
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            Home
          </NavLink>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center justify-between text-blue-800 duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-800">
              For Students
              {!isOpen ? (
                <IoMdArrowDropdown className="h-8 ml-1 " />
              ) : (
                <IoMdArrowDropup className="h-8 ml-1" />
              )}
            </button>
            {isOpen && (
              <div className="absolute flex flex-col items-start w-1/6 p-2 bg-white rounded-lg shadow-lg ">
                <NavLink
                  to="/courses"
                  activeClassName="active"
                  className="w-full p-4 text-blue-800 border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:shadow-lg hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/tests"
                  activeClassName="active"
                  className="w-full p-4 text-blue-800 border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
                >
                  Tests
                </NavLink>
                <NavLink
                  to="/mentors"
                  activeClassName="active"
                  className="w-full p-4 text-blue-800 border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
                >
                  Mentors
                </NavLink>
                <NavLink
                  to="/faq"
                  activeClassName="active"
                  className="w-full p-4 text-blue-800 border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
                >
                  FAQs
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/colleges"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            For Colleges
          </NavLink>
          <NavLink
            to="/companies"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            For Companies
          </NavLink>

          <a
            href="https://myanalyticsschool.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            Blogs
          </a>

          <NavLink
            to="/about"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            About Us
          </NavLink>
        </div>

        <div class="md:hidden">
          <button
            id="menu-btn"
            type="button"
            class="z-40 block hamburger md:hidden focus:outline-none"
            onClick={() => {
              document
                .getElementById("menu-btn")
                .classList.toggle("open-side-menu");
              document.getElementById("menu").classList.toggle("flex");
              document.getElementById("menu").classList.toggle("hidden");
            }}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <div
        id="menu"
        class="md:hidden fixed top-0 bottom-0 left-0 hidden flex-col self-end h-screen py-1 pt-40 pl-12 space-y-3 text-xl text-slate-900 uppercase bg-slate-100 z-40 w-2/3"
      >
        <NavLink
          to="/"
          exact
          activeClassName="active"
          className="border-b-2 border-transparent hover:border-blue-800"
        >
          Home
        </NavLink>
        <div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-between uppercase duration-300 "
          >
            For Students
            {!isOpen ? (
              <IoMdArrowDropdown className="h-8 ml-1 " />
            ) : (
              <IoMdArrowDropup className="h-8 ml-1" />
            )}
          </button>
          {isOpen && (
            <div className="absolute z-10 flex flex-col items-start w-4/5 space-y-1 text-lg uppercase rounded-lg shadow-lg bg-slate-100 left-7 md:hidden text-slate-900 ">
              <NavLink
                to="/courses"
                activeClassName="active"
                className="w-full px-4 py-1 mt-2 text-lg border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:shadow-lg hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
              >
                Courses
              </NavLink>
              <NavLink
                to="/tests"
                activeClassName="active"
                className="w-full px-4 py-1 text-lg border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
              >
                Tests
              </NavLink>
              <NavLink
                to="/mentors"
                activeClassName="active"
                className="w-full px-4 py-1 text-lg border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
              >
                Mentors
              </NavLink>
              <NavLink
                to="/faq"
                activeClassName="active"
                className="w-full px-4 py-1 text-lg border-b-2 border-l-4 border-transparent rounded-r-lg cursor-pointer hover:bg-blue-50 border-l-transparent hover:border-l-blue-800 hover:border-blue-800"
              >
                FAQs
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/colleges" activeClassName="active" className="text-lg">
          For Colleges
        </NavLink>
        <NavLink to="/companies" activeClassName="active" className="text-lg">
          For Companies
        </NavLink>

        <a
          href="https://myanalyticsschool.com/blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          Blogs
        </a>

        <NavLink to="/about" activeClassName="active" className="text-lg">
          About Us
        </NavLink>
      </div>

      {/* <div className="h-[60px] fixed w-full bg-white z-50 flex">
        <button
          onClick={() => {
            showSideMenu();
          }}
          className="md:hidden relative left-[7%]"
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
        <div className="justify-end w-full ">
          <div
            onClick={handleClick}
            className=" px-5 relative left-[186px] text-[15px] top-[18px] border-2 border-blue-500 py-1 rounded-md text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white"
          >
            <span>Register</span>
          </div>
        </div>
        <LoginForm isShowLogin={isShowLogin} closeLogin={closeLogin} />
      </div> */}
    </section>
  );
};

export default Navbar;
