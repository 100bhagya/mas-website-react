import React from "react";
import Card1 from "../images/id-card 1.webp";
import Card2 from "../images/consultation 1.webp";
import Card3 from "../images/growth 1.webp";
import Card4 from "../images/award 1.webp";
import Card5 from "../images/conversation 1.webp";
import Card6 from "../images/meeting 1.webp";
import Card7 from "../images/online-resume 1.webp";
import Card8 from "../images/coworking 1.webp";
import Card9 from "../images/job-search 1.webp";
import Vector from "../images/Vector 15.webp";


const Card = ({ img, title, content, flex_direction }) => {
  return (
    <div
      class={`py-4 px-8 flex ${flex_direction} md:flex-col items-center h-[125px] md:h-auto bg-gradient-to-b from-blue-100 to-blue-50 md:rounded-3xl w-full shadow-gray-300 shadow-xl`}
    >
      <div class="rounded-lg w-1/3 md:w-full relative">
        {/* <img
        src={Vector}
        alt="design"
        className="absolute w-20 lg:h-24 lg:w-36 h-14 top-8 left-4"
      ></img> */}
        <div className="absolute w-20 lg:h-24 lg:w-36 h-14 top-8 left-4">
          <img src={Vector} alt="Image" />
        </div>
        <div className="relative w-20 h-20 lg:h-36 lg:w-36 md:h-auto md:w-auto">
          <img src={img} alt="Image" />
        </div>
      </div>
      <div className="w-2/3 md:w-full">
        <h2 class="lg:text-2xl md:text-lg text-sm font-semibold lg:ml-7 mr-2 text-gray-900 mt-5">
          {title}
        </h2>
        <p class="hidden md:block md:text-sm text-[10px] lg:ml-7 mr-2 leading-relaxed mt-2 text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <section class="bg-back py-12">
      <div class="container mx-auto max-w-7xl">
        <h1 className="py-12 font-serif text-3xl font-bold text-center text-gray-900 lg:text-4xl">
          Our Unique Offerings
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 md:mx-8 lg:grid-cols-3">
          <Card
            flex_direction="flex-row-reverse"
            img={Card1}
            title="Internship Opportunities"
            content="An internship is a professional learning experience that offers meaningful, practical work related to a student's field of Interest and MAS helps you to get ONE."
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
