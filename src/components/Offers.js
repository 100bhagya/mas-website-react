import React from "react";
import Card1 from "../images/id-card 1.png";
import Card2 from "../images/consultation 1.png";
import Card3 from "../images/growth 1.png";
import Card4 from "../images/award 1.png";
import Card5 from "../images/conversation 1.png";
import Card6 from "../images/meeting 1.png";
import Card7 from "../images/online-resume 1.png";
import Card8 from "../images/coworking 1.png";
import Card9 from "../images/job-search 1.png";
import Vector from "../images/Vector 15.png";

const Card = ({ img, title, content, flex_direction }) => {
  return (
    <div
      class={`p-4 lg:ml-24 md:ml-4 flex ${flex_direction} md:block h-[125px] md:h-auto lg:from-transparent lg:to-transparent bg-gradient-to-b from-blue-100 to-blue-50 md:rounded-3xl w-full md:w-[30%] lg:w-1/4 lg:h-[432px] shadow-gray-300 lg:bg-card shadow-lg`}
    >
      <div class="rounded-lg h-48 overflow-hidden w-[30%] md:w-full">
        <img
          alt="content"
          class="lg:object-cover object-center z-10 relative lg:left-8 lg:top-8 lg:h-36 lg:w-36 md:h-auto md:w-auto md:my-3 md:mx-6 lg:mx-0 lg:my-0 h-20 w-20"
          src={img}
        ></img>
        <img
          src={Vector}
          alt="design"
          className="lg:h-24 lg:w-36 md:bottom-14  h-14 w-20 relative lg:left-11 left-2 bottom-12"
        ></img>
      </div>
      <div className="w-[80%] md:w-full">
        <h2 class="lg:text-2xl md:text-lg text-[12px] font-semibold lg:ml-7 mr-2 md:font-medium title-font text-gray-900 mt-5">
          {title}
        </h2>
        <p class="md:text-sm text-[9px] lg:ml-7 mr-2 font leading-relaxed mt-2">
          {content}
        </p>
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <section class="text-gray-600 body-font bg-back">
      <div class="container px-5 md:py-24 py-16 mx-auto">
        <div class=" lg:py-6 py-2 mb-12 ">
          <div class="text-center text-gray-900 font-medium lg:text-5xl text-2xl mb-2 sm:mb-0">
            Our Unique Offerings
          </div>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <Card
            flex_direction="flex-row-reverse"
            img={Card1}
            title="Internship Opportunities"
            content="An internship is a professional learning experience that offers meaningful, practical work related to a student’s field of Interest and MAS helps you to get ONE."
          />
          <Card
            flex_direction="flex-row"
            img={Card2}
            title="One To One Mentorship Programme"
            content="This program will help you connect with an appropriate mentor to provide you guidance, support, encouragement, and growth in a competitive environment."
          />
          <Card
            flex_direction="flex-row-reverse"
            img={Card3}
            title="Mock Tests & Performance Tracking"
            content="Self-evaluation, sectional, combined, and company-specific tests are provided to prepare you for the worst, and performance tracking helps you to achieve the goal. "
          />
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 md:mt-20 mt-10">
          <Card
            flex_direction="flex-row"
            img={Card4}
            title="Certified Courses & Projects"
            content="Learning opportunities are tremendous with projects. It provides the students with the opportunity to collaborate their learnings with practical implementation."
          />
          <Card
            flex_direction="flex-row-reverse"
            img={Card5}
            title="Communication Skill Enhancement"
            content="It gives the interviewer an idea about the personality, attitude, and etiquette of the candidate. We at MAS, would help ameliorate your communication skills."
          />
          <Card
            flex_direction="flex-row"
            img={Card6}
            title="Case Study & Guesstimate Sessions"
            content="Interviews test problem-solving, analytical, reasoning and communication skills. With comprehensive practice and learning sessions we help you develop these skills."
          />
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 md:mt-28 mt-10">
          <Card
            flex_direction="flex-row-reverse"
            img={Card7}
            title="Resume Building"
            content="The job market is competitive – you’ll need an edge to stand out. We at MAS, will help you build a winning resume that will surely turn the tables in your favor. "
          />
          <Card
            flex_direction="flex-row"
            img={Card8}
            title="Mock GDs & Interviews"
            content="Mocks by MAS in a stress-free environment gives you an edge over others by familiarizing yourself with the actual interview environment beforehand."
          />
          <Card
            flex_direction="flex-row-reverse"
            img={Card9}
            title="Off Campus Job Opportunities"
            content="We will direct and emphasize  on how one should present themself in a poised, unfazed manner and shine in an interview. Our well established pipeline connects you to off-campus opportunities."
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
