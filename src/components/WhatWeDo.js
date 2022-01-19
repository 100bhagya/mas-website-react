import React from "react";
import Copy from "../images/copy.png";
import Books from "../images/e-books.png";
import Portfolio from "../images/portfolio.png";
import "../index.css";

const Card = ({ img, title, content }) => {
  return (
    <div class="p-4 m-6 md:w-1/4">
      <div class="h-full image shadow-xl bg-card rounded-lg overflow-hidden">
        <img
          class="lg:h-30 mt-7 p-4 bg-white rounded-full md:h-36 "
          src={img}
          alt="blog"
        />
        <div class="p-6 pb-16">
          <div class=" lg:text-2xl font-bold text-gray-900 mb-3">{title}</div>
          <p class="leading-relaxed font-normal font w-72 text-left pl-5 mb-3">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Learning = () => {
  return (
    <section class="text-gray-600 body-font bg-back">
      <div class="text-center justify-center container px-5 py-24 mx-auto">
        <div class="text-center font-normal lg:text-5xl mb-5">What We Do?</div>
        <div class="flex justify-center flex-wrap -m-4">
          <Card
            img={Copy}
            title="Prepration Program"
            content="Channelise your efforts through strategic preparation program."
          />
          <Card
            img={Books}
            title="Improve Skill"
            content="Help you hone your skills to make you job ready."
          />
          <Card
            img={Portfolio}
            title="Job Opportunities"
            content="Provide exposure and connect you to market job opportunities."
          />
        </div>
      </div>
    </section>
  );
};

export default Learning;
