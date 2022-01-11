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

const Card = ({ img, title, content }) => {
  return (
    <div class="p-4 ml-24 rounded-3xl md:w-1/4 lg:h-96 shadow-gray-300 bg-card shadow-lg">
      <div class="rounded-lg h-48 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center z-10 relative lg:left-8 lg:top-8 h-36 w-36"
          src={img}
        ></img>
        <img
          src={Vector}
          alt="design"
          className="h-24 w-36 relative lg:left-11 lg:bottom-12"
        ></img>
      </div>
      <h2 class="text-2xl ml-7 font-medium title-font text-gray-900 mt-5">
        {title}
      </h2>
      <p class="text-sm ml-7 font leading-relaxed lg:w-2/4 mt-2">{content}</p>
    </div>
  );
};

const Offers = () => {
  return (
    <section class="text-gray-600 body-font bg-back">
      <div class="container px-5 py-24 mx-auto">
        <div class=" py-6 mb-12 ">
          <div class="text-center text-gray-900 font-medium text-5xl mb-2 sm:mb-0">
            Our Unique Offerings
          </div>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <Card
            img={Card1}
            title="Internship Opportunities"
            content="Write a brief description of two lines maximum."
          />
          <Card
            img={Card2}
            title="One To One Mentorship Programme"
            content="Write a brief description of two lines maximum."
          />
          <Card
            img={Card3}
            title="Mock Tests & Performance Tracking"
            content="Write a brief description of two lines maximum."
          />
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 mt-20">
          <Card
            img={Card4}
            title="Certified Courses & Projects"
            content="Write a brief description of two lines maximum."
          />
          <Card
            img={Card5}
            title="Communication Skill Enhancement"
            content="Write a brief description of two lines maximum."
          />
          <Card
            img={Card6}
            title="Case Study & Guesstimate Sessions"
            content="Write a brief description of two lines maximum."
          />
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 mt-28">
          <Card
            img={Card7}
            title="Resume Building"
            content="Write a brief description of two lines maximum."
          />
          <Card
            img={Card8}
            title="Mock GDs & Interviews"
            content="Write a brief description of two lines maximum."
          />
          <Card
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
