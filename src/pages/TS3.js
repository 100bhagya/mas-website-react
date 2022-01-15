import React from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard.png";
import Footer from "../components/Footer";

const IncomeSlab = ({ name, no_1, no_2, no_3, color, round }) => {
  return (
    <div className={`flex w-10/12 h-[75px] pt-1 ${color} ${round}`}>
      <div className="text-sm font-normal w-[48%] px-14 text-center pt-6">
        {name}
      </div>
      <div className="text-sm font-normal w-[18%] text-center pt-6">{no_1}</div>
      <div className="text-sm font-normal w-[18%] text-center pt-6">{no_2}</div>
      <div className="text-sm font-normal w-[18%] text-center pt-6">{no_3}</div>
    </div>
  );
};

const TS3 = () => {
  return (
    <div className="bg-back">
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="mb-24 relative right-[12%]">
          <div className="lg:pt-20 pb-28 lg:bottom-12">
            <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
              Test Series 3
            </h1>

            <p className="relative justify-center lg:top-5 text-lg font  text-black leading-8">
              An intense series to test your limits
            </p>
          </div>
          <a
            href="apply"
            className=" py-3 px-8 bg-blue-700 rounded-2xl text-white"
          >
            Apply now
          </a>
        </div>
        <img
          src={Artboard}
          alt="artboard"
          className="relative left-[20%] bottom-12"
        ></img>
      </div>
      <div className="">
        <div className="relative left-[9%] my-20 pb-12">
          <div className="text-center w-10/12 text-[40px] font-medium mb-8">
            Other Offers
          </div>
          <div className="flex bg-[#2255B8] w-10/12 h-[75px] rounded-t-2xl">
            <div className="text-2xl font-semibold w-[48%] text-white text-center pt-6">
              Test Series
            </div>
            <div className="text-2xl font-semibold w-[18%] text-white text-center pt-6">
              1
            </div>
            <div className="text-2xl font-semibold w-[18%] text-white text-center pt-6">
              2
            </div>
            <div className="text-2xl font-semibold w-[18%] text-white text-center pt-6">
              3
            </div>
          </div>

          <IncomeSlab
            name="Sectional test"
            no_1="37"
            no_2="-"
            no_3="37"
            color="bg-[#DCE9FF]"
          />

          <IncomeSlab
            color="bg-[#BAD0F3]"
            name="Combined test"
            no_1="5"
            no_2="20"
            no_3="20"
          />

          <IncomeSlab
            color="bg-[#DCE9FF]"
            name="Practice quizzes"
            no_1="-"
            no_2="-"
            no_3="20"
          />

          <IncomeSlab
            color="bg-[#BAD0F3]"
            name="Company Wise Tests (Based on the pattern and level of tests of top companies visiting the campus)"
            no_1="-"
            no_2="15"
            no_3="15"
          />

          <IncomeSlab
            color="bg-[#DCE9FF]"
            name="Mock Interview from Industry Experts to get you Placement Ready"
            no_1="-"
            no_2="1"
            no_3="1"
          />
          <IncomeSlab
            color="bg-[#BAD0F3]"
            name="One on One Case Study & Guesstimate Session
"
            no_1="-"
            no_2="-"
            no_3="2"
          />
          <IncomeSlab
            color="bg-[#DCE9FF]"
            name="Group Discussion Session"
            no_1="-"
            no_2="-"
            no_3="1"
          />
          <IncomeSlab
            round="rounded-b-2xl"
            color="bg-[#BAD0F3]"
            name="Pricing"
            no_1="₹ 2599"
            no_2="₹ 3999"
            no_3="₹ 5999"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TS3;
