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
      class={`p-4 md:ml-24 flex ${flex_direction} md:block h-[125px] lg:from-transparent lg:to-transparent bg-gradient-to-b from-blue-100 to-blue-50 md:rounded-3xl w-full md:w-1/4 lg:h-96 shadow-gray-300 lg:bg-card shadow-lg`}
    >
      <div class="rounded-lg h-48 overflow-hidden w-[30%] md:w-full">
        <img
          alt="content"
          class="object-cover object-center z-10 relative lg:left-8 lg:top-8 lg:h-36 lg:w-36 h-20 w-20"
          src={img}
        ></img>
        <img
          src={Vector}
          alt="design"
          className="lg:h-24 lg:w-36 h-14 w-20 relative lg:left-11 left-2 bottom-12"
        ></img>
      </div>
      <div>
        <h2 class="md:text-2xl text-[12px] font-semibold lg:ml-7 mr-2 md:font-medium title-font text-gray-900 mt-5">
          {title}
        </h2>
        <p class="md:text-sm text-[9px] lg:ml-7 mr-2 font leading-relaxed lg:w-2/4 mt-2">
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
            content="Write a brief description of two lines maximum."
          />
          <Card
            flex_direction="flex-row"
            img={Card2}
            title="One To One Mentorship Programme"
            content="Write a brief description of two lines maximum."
          />
          <Card
            flex_direction="flex-row-reverse"
            img={Card3}
            title="Mock Tests & Performance Tracking"
            content="Write a brief description of two lines maximum."
          />
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 md:mt-20 mt-10">
          <Card
            flex_direction="flex-row"
            img={Card4}
            title="Certified Courses & Projects"
            content="Write a brief description of two lines maximum."
          />
          <Card
            flex_direction="flex-row-reverse"
            img={Card5}
            title="Communication Skill Enhancement"
            content="Write a brief description of two lines maximum."
          />
          <Card
            flex_direction="flex-row"
            img={Card6}
            title="Case Study & Guesstimate Sessions"
            content="Write a brief description of two lines maximum."
          />
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 md:mt-28 mt-10">
          <Card
            flex_direction="flex-row-reverse"
            img={Card7}
            title="Resume Building"
            content="Write a brief description of two lines maximum."
          />
          <Card
            flex_direction="flex-row"
            img={Card8}
            title="Mock GDs & Interviews"
            content="Write a brief description of two lines maximum."
          />
          <Card
            flex_direction="flex-row-reverse"
            img={Card9}
            title="Off Campus Job Opportunities"
            content="Write a brief description of two lines maximum."
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
