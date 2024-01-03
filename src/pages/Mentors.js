import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Data from "../data/MentorsData";
import LinkedIn from "../images/Linkedin.png";
import Footer from "../components/Footer";

const Mentors = () => {
  return (
    <div>
      <Navbar />
      
      <section className="pt-24 pb-16 bg-blue-50">
        <h1 className="py-8 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl text-center  font-primary">
           Meet our <span className="text-sky-800">Mentors</span>
        </h1>

        <p className="px-8 pb-8 text-base text-center text-slate-600 md:px-24 lg:top-5 lg:text-lg max-w-6xl mx-auto">
          Experienced mentors to steer you through the journey from being a student to an industry-driven professional.
          With a constant interactive support from our mentors with a personalized touch, get a chance of a lifetime to engage with accomplished and competent mentors who will be adept at tackling your doubts and queries.
        </p>       
      </section>     
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pt-12 pb-20 md:justify-left justify-center">
        {Data.map((post) => {
          return (
            <div class="py-4 md:m-8 m-3 md:w-1/3 lg:w-[17%] w-[40%] shadow-gray-300 border shadow-md rounded-2xl hover:shadow-xl transition-all">
              <div class=" w-full md:h-48 overflow-hidden">
                <img
                  alt="content"
                  class="relative lg:left-[22%] lg:top-8 md:top-7 md:h-36 md:w-36 h-28 w-28 left-[15%] md:left-[23%] lg:[15%]"

                  src={post.image}
                ></img>
              </div>
              <div>
                <a href={post.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="md:mx-4 hover:scale-110 relative md:bottom-11 md:left-[140px] bottom-9 left-[110px] transition-all"
                  />
                </a>
              </div>

              <div className="text-center justify-center pb-7">
                <h2 class="text-lg font font-semibold text-gray-900">
                  {post.name}
                </h2>
                <h2 class="text-sm font font-normal text-gray-500">
                  {post.position}
                </h2>
              </div>
            </div>
          )
        })}
        
      </div>
      <Footer />
    </div>
  )
};

export default Mentors;
