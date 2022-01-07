import React from "react";
import Design1 from "../images/design1.png";
import Grid from "../images/grid.png";
import Design2 from "../images/design2.png";
import Design3 from "../images/design3.png";

const Card = ({ img, title, content }) => {
  return (
    <div class="px-24 mt-12">
      <div class="flex rounded-3xl h-full bg-blue-50 p-16">
        <div className="w-6/12 mt-4">
          <div class="flex items-center mb-3">

            <h2 class="text-gray-900 text-2xl title-font font-semibold">

              {title}
            </h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed w-full text-base mt-12">{content}</p>
          </div>
        </div>

        <img
          src={img}
          alt="design"
          className="h-64 w-96 relative z-10 lg:left-96 border-8 border-solid rounded-2xl border-white"
        />
        <img
          src={Grid}
          alt="grid"
          className="h-24 w-48 relative md:top-52 md:left-72"
        ></img>
        <img
          src={Grid}
          alt="grid"
          className="h-24 w-48 relative md:bottom-10 md:right-56"
        ></img>
      </div>
    </div>
  );
};

const Working = () => {
  return (
    <section class="text-gray-600 body-font bg-gray-50">
      <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="lg:text-5xl md:text-3xl sm:text-2xl font-medium title-font text-gray-900">
            How It Works?
          </h1>
        </div>
        <div class="block flex-wrap -m-4">
          <Card
            img={Design1}
            title="Test Preparation & Upskilling"
            content="Get hold of the perfect placement preparation strategy in order to get an edge over others by our extensive practice tests, company-specific tests, courses, projects and regular discussions."
          />
          <Card
            img={Design2}
            title="Interview Preparation"
            content="Learn to draft a winning resume, present it in a curated manner and ace the job placements with our mock interviews and GD sessions."
          />
          <Card
            img={Design3}
            title="Off-Campus Opportunities"
            content="Off Campus placement is also in the books. Get connected to the emerging market opportunities via our HR pipeline. We are here to assist."
          />
        </div>
      </div>
    </section>
  );
};

export default Working;
