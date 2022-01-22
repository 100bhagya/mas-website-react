import React from "react";
import Data from "./Mentors_data";
import LinkedIn from "../images/Linkedin.png";

const Mentors_Testimonial = () => {
  return (
    <div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pl-56 pt-12 pb-20 bg-back">
        {Data.map((post) => {
          return (
            <div class="py-4 m-8 md:w-1/3 lg:w-[17%] shadow-gray-300 bg-card shadow-xl rounded-2xl">
              <div class=" w-full h-48 overflow-hidden">
                <img
                  alt="content"
                  class="relative lg:left-[22%] lg:top-8 h-36 w-36"
                  src={post.image}
                ></img>
              </div>
              <div>
                <a href={post.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="mx-4 hover:scale-110 relative bottom-11 left-[140px]"
                  />
                </a>
              </div>

              <div className="text-center justify-center pb-7">
                <h2 class="text-lg font font-semibold text-gray-900">
                  {post.name}
                </h2>
                <h2 class="text-sm font font-normal text-gray-400">
                  {post.position}
                </h2>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Mentors_Testimonial;
