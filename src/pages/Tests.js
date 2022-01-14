import React from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard.png";
import Grid from "../images/grid.png";
import Footer from "../components/Footer";

const Tests = () => {
  return (
    <div className="bg-back">
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="lg:pt-16 pb-32 lg:bottom-12">
          <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[48px]  leading-8 font-primary">
            Tests
          </h1>

          <p className="relative justify-center lg:top-12 text-lg font  text-black leading-8">
            Our specialised test portal to challenge youself
          </p>
        </div>
      </div>
      <div className="pb-32">
        <div className="flex ml-4">
          <div>
            <div className="bg-card shadow-2xl my-20 ml-28 mr-12  w-3/4 relative left-1/5  rounded-xl">
              <div className="px-12 py-8">
                <div className="text-2xl font-medium mb-6 mt-8">We Offer</div>
                <p className="text-lg my-4">Quant Sectional Tests</p>
                <p className="text-lg my-4"> LRDI Sectional Tests</p>
                <p className="text-lg my-4"> Verbal Sectional Tests</p>
                <p className="text-lg my-4"> Combined Tests</p>
                <p className="text-lg my-4"> Company Wise Tests</p>
                <p className="text-lg my-4"> Weekly Tests</p>
                <p className="text-lg my-4"> Quizzes (Self Evaluation)</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 h-[460px] w-[1000px] my-20 ml-12 rounded-3xl">
            <div className="flex">
              <div className="ml-16 mt-16 mr-36">
                <div className="text-2xl mb-28">Sample test</div>
                <p className="text-lg my-6 underline">
                  Analytics Mock Placement Test
                </p>
                <p className="text-lg my-6 underline">Quant Sectional Test</p>
                <p className="text-lg my-6 underline">Verbal Sectional Test</p>
              </div>
              <img src={Artboard} alt="artboard" className="relative top-10" />
            </div>
          </div>
        </div>
        <div className="bg-blue-50 w-[84%] ml-32 rounded-[30px] flex">
          <div className="w-[37%] my-32 mx-20">
            <div className="text-2xl font-semibold mb-16">
              Overview Of Test Platform
            </div>
            <p className="text-lg font-normal mb-32">
              Having trouble registering on our test platform, click{" "}
              <a
                href="https://myanalyticsschool.com/video/register.pdf"
                className="text-blue-500 underline"
              >
                here
              </a>{" "}
              to download instructions
            </p>
            <a
              href="https://myanalyticsschool.ezexam.in/"
              className="text-[15px] bg-blue-600 py-3 px-6 text-white rounded-xl"
            >
              Visit platform
            </a>
          </div>
          <div className="-mb-[130px]">
            <img
              src={Grid}
              alt="grid"
              className="w-96 relative top-10 right-2"
            />
            <div className=" ml-12 relative bottom-16 z-10">
              <iframe
                width="590"
                height="340"
                src="https://www.youtube.com/embed/pKyiLrMLQ80"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="rounded-2xl border-solid border-white border-[12px]"
              ></iframe>
            </div>
            <img
              src={Grid}
              alt="grid"
              className="w-96 relative bottom-32 left-[450px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tests;
