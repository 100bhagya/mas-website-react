import React from "react";
import Copy from "../images/copy.png";
import Books from "../images/e-books.png";
import Portfolio from "../images/portfolio.png";
import "../index.css";

const Learning = () => {
  return (
    <section class="text-gray-600 body-font bg-gray-50">
      <div class="text-center justify-center container px-5 py-24 mx-auto">
        <div class="text-center lg:text-5xl mb-5">What We Do?</div>
        <div class="flex justify-center flex-wrap -m-4">
          <div class="p-4 m-6 md:w-1/4">
            <div class="h-full image shadow-xl bg-gray-50  rounded-lg overflow-hidden">
              <img
                class="lg:h-30 mt-7 p-4 bg-white rounded-full md:h-36"
                src={Copy}
                alt="blog"
              />
              <div class="p-6 pb-16">
                <div class=" lg:text-2xl font-extrabold text-gray-900 mb-3">
                  Preparation Program
                </div>
                <p class="leading-relaxed w-72 text-left pl-5 mb-3">
                  Channelise your efforts through strategic preparation program.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 m-6 md:w-1/4">
            <div class="h-full image shadow-xl bg-gray-50 rounded-lg overflow-hidden">
              <img
                class="lg:h-30 lg:w-36 mt-7 p-5 bg-white rounded-full md:h-36"
                src={Books}
                alt="blog"
              />
              <div class="p-6 pb-16">
                <div class=" lg:text-2xl font-extrabold text-gray-900 mb-3">
                  Improve Skill
                </div>
                <p class="leading-relaxed w-72 text-left pl-5 mb-3">
                  Help you hone your skills to make you job ready.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 m-6 md:w-1/4">
            <div class="h-full image shadow-xl bg-gray-50 rounded-lg overflow-hidden">
              <img
                class="lg:h-30 mt-7 p-4 bg-white rounded-full md:h-36"
                src={Portfolio}
                alt="blog"
              />
              <div class="p-6 pb-16">
                <div class=" lg:text-2xl font-extrabold text-gray-900 mb-3">
                  Job Oppurtunities
                </div>
                <p class="leading-relaxed w-72 text-left pl-5 mb-3">
                  Provide exposure and connect you to market job opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
