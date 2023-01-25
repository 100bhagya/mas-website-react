import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Organization from "./Organization";
import "../../src/index.css";
import Design5 from "../images/design3.png";
import Grid from "../images/grid.png";
import Data from "../data/TrackRecord";
import Footer from "../components/Footer";
import { BsBank2 } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { ImUserPlus } from "react-icons/im";
const data = [
  {
    id: 1,
    src: "https://wallpapercave.com/wp/jgbFbWR.jpg",
  },
  {
    id: 2,
    src: "https://wallpapercave.com/wp/j1O8bCz.jpg",
  },
  {
    id: 3,
    src: "https://wallpapercave.com/wp/zNbNzrh.jpg",
  },
];
const Card1 = ({ img, title, content }) => {
  return (
    <div className="flex flex-col items-center p-16 my-4 space-y-8 lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:space-x-6 rounded-3xl md:h-auto bg-works">
      <div className="relative">
        <img
          src={Grid}
          alt="grid"
          className="absolute w-48 h-36 -top-10 -left-8"
        ></img>
        <img
          src={Grid}
          alt="grid"
          className="absolute w-48 h-36 -bottom-14 -right-28"
        ></img>
        <img
          src={img}
          alt="design"
          className="relative h-64 border-8 border-blue-300 border-solid w-96 rounded-2xl"
        />
      </div>

      <div className="max-w-md">
        <h2 className="mb-6 text-lg font-semibold text-center text-gray-900 lg:text-2xl lg:text-left">
          {title}
        </h2>

        <p className="w-full text-sm leading-relaxed text-center text-gray-600 lg:text-base lg:text-left">
          {content}
        </p>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="py-12 px-7 ">
      <div className=" flex flex-col w-64 space-y-1.5 cursor-pointer">
        <h1 className="text-3xl font-black text-blue-800">{data.record}</h1>
        <h1>{data.heading}</h1>
      </div>
    </div>
  );
};
const string = "NIRF Rank< 100";

const Companies = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="absolute top-0 w-full h-max">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          // className="absolute bottom-40 md:static md:bottom-0"
        >
          {data.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                // className="absolute top-56 md:static md:top-0 lg:h-full md:h-full"
              >
                <img className="w-full h-full img" src={data.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Organization props={"Trusted by leading Organizations"} />
        <Organization props={"Partnered with prestigious colleges"} />
        <section className="p-12 bg-white">
          <h1 className="py-12 font-serif text-3xl font-bold text-center text-gray-900 lg:text-4xl">
            Why Hire Us?
          </h1>
          <div className="flex flex-col space-y-8">
            <Card1
              img={Design5}
              title="80/20 Hiring Principle"
              content="We provide you with a pool of highly skilled candidates, saving time on the hiring process.
              While hiring from campus, recruiters spends major time on getting those 20% candidates who have the relevant skills. We at MAS brings you those 20% upfront through our screening processes from all top colleges after upskilling them from our industry experts and mentors"
            />
            <Card1
              img={Design5}
              title="Customizable courses"
              content="Now, pick up the top candidates ensuring they are techincally sound as per your requirements by customizing our cohort courses ensuring they are skilled enough for your company (Image idea if needed : images of courses in jigsaw puzzle)"
            />
            <Card1
              img={Design5}
              title="Our Own Assessment Platform"
              content="No need to tie up with 3rd party assessment company. We have our own virtual talent assessment platform for all your needs."
            />
            <Card1
              img={Design5}
              title="Verification"
              content="No need to tie up with 3rd party assessment company. We have our own virtual talent assessment platform for all your needs."
            />
          </div>
        </section>
        <div className="mt-16 text-xl text-center ">Track Record</div>
        <div className="flex flex-wrap mt-16 ml-7 md:ml-20 track-record">
          {Data.map((data) => {
            return <Card data={data} />;
          })}
        </div>
        <div className="mt-16 text-xl text-center ">Our Journey</div>
        <div className="mt-16 track-record">
          <div className="flex flex-wrap py-12 space-y-24 sm:space-y-0 place-content-around container-1 px-7">
            <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
              <div className="">
                <FaUserGraduate className="w-8 h-8 text-blue-900" />
              </div>
              <h1>
                10000+ Students Upskilled in Analytics from IIT’s, NIT’s and
                Tier 1 institutes in past 20 Months
              </h1>
            </div>
            <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
              <div className="">
                <ImUserPlus className="w-8 h-8 text-blue-900"/>
              </div>
              <h1>
                Students spend 15 Lakhs minutes on Testing themselves on Test
                Platform
              </h1>
            </div>
            <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
              <div className="">
                <MdPlayLesson className="w-8 h-8 text-blue-900"/>
              </div>
              <h1>Students consumed 9300 Hours of Content on Learn Platform</h1>
            </div>
            <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
              <div className="">
                <BsBank2 className="w-8 h-8 text-blue-900" />
              </div>
              <h1>
                Collaborated with top 100 colleges of India NIRF Rank ({string})
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap py-12 space-y-24 md:space-y-0 place-content-around container-2 ">
            <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
              <div className="">
                <BsBagCheckFill className="w-8 h-8 text-blue-900"/>
              </div>
              <h1>26 Crore worth Placement Done</h1>
            </div>
            <div className=" flex flex-col w-64 space-y-3.5 cursor-pointer">
              <div className="">
                <FaChalkboardTeacher className="w-8 h-8 text-blue-900"/>
              </div>
              <h1>Strong force of 300+ Expert Mentors from IIT’s</h1>
            </div>
            <div className="flex flex-col w-64 space-y-3.5 cursor-pointer ">
              <div className="">
                <ImOffice className="w-8 h-8 text-blue-900"/>
              </div>
              <h1>MAS alums working in 250+ Companies</h1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Companies;
