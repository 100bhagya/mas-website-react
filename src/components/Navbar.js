import React, { useState } from "react";
import Logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import CloseIcon from "../images/cross_head.png";
import MenuIcon from "../images/menu_head.png";
import Logo_mobile from "../images/logo_head.png";
import LoginForm from "./LoginForm";
import "../index.css";

// function SideMenu() {
//   return (
//     <div className="fixed h-screen w-[75%] md:hidden bg-white z-50 top-[60px]">
//       <div className="w-full items-start flex flex-col">
//         <NavLink
//           to="/"
//           exact
//           activeClassName="active"
//           className="mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/mentors"
//           activeClassName="active"
//           className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
//         >
//           Mentors
//         </NavLink>

//         <NavLink
//           to="/courses"
//           activeClassName="active"
//           className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
//         >
//           Courses
//         </NavLink>

//         <NavLink
//           to="/tests"
//           activeClassName="active"
//           className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
//         >
//           Tests
//         </NavLink>

//         <a
//           href="https://myanalyticsschool.com/blog/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent"
//         >
//           Blogs
//         </a>

//         <NavLink
//           to="/faq"
//           activeClassName="active"
//           className=" mob_pos w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
//         >
//           FAQs
//         </NavLink>

//         <NavLink
//           to="/about"
//           activeClassName="active"
//           className=" mob_pos mob_pos1 w-full px-5 py-2 rounded text-gray-800 items-center justify-center transition duration-150 border-b-4 border-transparent hover:border-blue-600"
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

  return (
    <section>
      <nav className="flex items-center justify-between bg-white fixed w-full px-12 py-1 lg:px-24 navbar z-[50]">
        <a href="/">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-24 md:w-28"></img>
          </Link>
        </a>

        <div id="navigation" className="hidden md:flex justify-center items-center text-sm lg:text-base space-x-8">
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            Home
          </NavLink>

          <NavLink
            to="/mentors"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            Mentors
          </NavLink>

          <NavLink
            to="/courses"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            Courses
          </NavLink>

          <NavLink
            to="/tests"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            Tests
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
            to="/faq"
            activeClassName="active"
            className="text-blue-800 border-b-2 border-transparent hover:border-blue-800"
          >
            FAQs
          </NavLink>

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
                document.getElementById("menu-btn").classList.toggle("open-side-menu");
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
          class="md:hidden fixed top-0 bottom-0 left-0 hidden flex-col self-end h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-slate-900 uppercase bg-slate-100 z-40 w-2/3"
        >
        <NavLink
          to="/"
          exact
          activeClassName="active"          
        >
          Home
        </NavLink>

        <NavLink
          to="/mentors"
          activeClassName="active"          
        >
          Mentors
        </NavLink>

        <NavLink
          to="/courses"
          activeClassName="active"          
        >
          Courses
        </NavLink>

        <NavLink
          to="/tests"
          activeClassName="active"          
        >
          Tests
        </NavLink>

        <a
          href="https://myanalyticsschool.com/blog/"
          target="_blank"
          rel="noopener noreferrer"          
        >
          Blogs
        </a>

        <NavLink
          to="/faq"
          activeClassName="active"          
        >
          FAQs
        </NavLink>

        <NavLink
          to="/about"
          activeClassName="active"          
        >
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
        <div className=" w-full justify-end">
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
