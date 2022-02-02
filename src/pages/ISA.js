import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Data from "../data/ISAData";
import Footer from "../components/Footer";
import Rectangle from "../images/Rectangle 52.png";
import Artboard1 from "../images/isa_image.png";

const IncomeSlab = ({ income, status, color, round }) => {
  return (
    <div
      className={`flex md:px-3 lg:px-0 w-full md:h-[75px] pb-4 md:pb-0 pt-1 md:bg-card border-solid border-b-[1px] ${color} ${round}`}
    >
      <div className="md:text-sm text-[12px] font-normal w-1/4 text-center pt-6">
        {income}
      </div>
      <div className="md:text-sm text-[12px] font-normal w-3/4 text-center pt-6">
        {status}
      </div>
    </div>
  );
};

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question md:text-lg text-[14px] font">
        {faq.question}
      </div>
      <div className="faq-answer md:text-sm text-[12px] font flex">
        <img
          src={Rectangle}
          alt="rectangle"
          className="md:w-4 w-3 md:h-1 h-[3px] md:mr-7 mr-5 relative my-5 left-1 rounded-xl"
        />
        {faq.answer}
      </div>
    </div>
  );
}

const ISA = () => {
  const [faqs, setfaqs] = useState(Data);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="bg-back">
      <Navbar />
      <div className="lg:flex pt-28 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="lg:pt-16 pb-20 lg:bottom-12">
          <h1 className="md:font-medium font-semibold text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
            ISA
          </h1>
          <p className="relative lg:top-12 md:text-[16px] font  text-black md:leading-8 mt-10 md:mt-8 lg:mt-0 text-[13px] px-6 lg:px-64 md:px-28 justify-center text-center">
            Our Income Share Agreement (ISA) is an investment in students'
            career. Students can benefit from our services just by paying a
            negligible amount and contributing a very small part of their income
            once they are placed.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row relative md:left-[9%] md:w-[84%] lg:w-auto mt-24">
        <div className="lg:w-[45%] md:w-full md:pb-12 lg:pb-0 w-[83%] md:bg-card mt-12 md:mt-0 text-center lg:text-left md:pr-28 md:text-lg mx-8 md:mx-0 text-[12px] lg:pt-36 md:pt-0 md:pl-28 lg:pl-12 rounded-l-2xl">
          Our ISA model helps students to utilise our well researched strategic
          plan for placement at zero advance payment and get placed at their
          dream company. Our Income Share Agreement (ISA) helps us to provide a
          training that is usually very expensive for no upfront cost.
        </div>
        <img
          src={Artboard1}
          alt="artboard"
          className="md:bg-card lg:pr-12 md:py-12 px-8 md:px-12 lg:px-0 md:rounded-r-2xl"
        />
      </div>

      <div className="md:bg-card lg:w-[59%] md:w-[85%] relative lg:left-[11%] md:left-[8%] mt-20 lg:ml-36 md:ml-0 md:pt-8 md:px-20 px-5 pb-16 rounded-2xl">
        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-blue-600 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-5 rounded-full pr-[14px] md:pl-[10px] pl-[9px] md:pt-[2px] pt-[4px]">
            1
          </p>
          Just 2500/- will be charged as registration fee for joining My
          Analytics School which is fully refundable only if you join My
          Analytics School and remain unplaced till 30th June 2022.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-blue-600 md:w-7 w-6 md:h-7 h-6 mr-7 text-white rounded-full md:pl-[8px] pl-[7px] md:pt-[2px] pt-[3px]">
            2
          </p>
          No need to pay ISA charges if placed below 6 lakhs.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-blue-600 md:w-7 w-6 md:h-7 h-6 mr-7 text-white rounded-full md:pl-[8px] pl-[7px] md:pt-[2px] pt-[3px]">
            3
          </p>
          You will be signing our ISA once you are registered with us.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-blue-600 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-5 rounded-full pr-[14px] md:pl-[10px] pl-[7px] md:pt-[2px] pt-[3px]">
            4
          </p>
          After registration, the student will have an option to pay 28,999
          upfront or 5000 for 6 months during preparation (May-Oct 2021). No
          need to pay anything after getting placed, if you have chosen upfront
          payment mode.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-blue-600 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-2 rounded-full pl-[8px] pr-[10px] pt-[3px] md:pt-[2px]">
            5
          </p>
          If you choose to pay net ISA at once then you have to pay it within 15
          days of your placement.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-blue-600 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-2 rounded-full pl-[8px] pr-[10px] pt-[3px] md:pt-[2px]">
            6
          </p>
          You are entitled to share offer letter received from the company and
          other documents for assuring proper ISA transactions.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4">
          <p className="bg-blue-600 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-5 rounded-full pr-[14px] md:pl-[10px] pl-[9px] md:pt-[2px] pt-[4px]">
            7
          </p>
          In case you are fired/you leave the job/you switch the job before
          completion of ISA, your ISA will be paused and will resume with your
          next job till completion. (Not applicable in case you don’t wish to do
          a job further).
        </p>
      </div>
      <div className="relative md:left-[21%] md:mb-20 md:mt-28 mt-6">
        <div className="lg:w-[59%] md:w-[85%] relative md:right-28 lg:right-2 md:shadow-2xl mx-4 md:mx-0">
          <div className="flex border-b-2 border-solid border-blue-600 md:bg-card w-full md:h-[75px] rounded-t-2xl">
            <div className="md:text-2xl text-xl font-semibold w-1/4 text-blue-600 text-center pt-6">
              Income Slab
            </div>
            <div className="text-2xl font-semibold  w-3/4 text-blue-600 text-center pt-6">
              ISA
            </div>
          </div>

          <IncomeSlab
            income="< 6 LPA"
            status="No Payment"
            color="border-blue-500"
          />

          <IncomeSlab
            color="border-blue-500"
            income="6 - 9 LPA"
            status="6000 for 6 months after your job starts or 29,999 one time payment once you are placed"
          />

          <IncomeSlab
            color="border-blue-500"
            income="9 - 12 LPA"
            status="6000 for 8 months after your job starts or 39,999 one time payment once you are placed"
          />

          <IncomeSlab
            color="border-blue-500"
            income="12 - 15 LPA"
            status="6000 for 10 months after your job starts or 49,999 one time payment once you are placed"
          />

          <IncomeSlab
            round="rounded-b-2xl"
            income="> 15 LPA"
            status="6000 for 12 months after your job starts or 59,999 one time payment once you are placed"
          />
        </div>
      </div>
      <div className="md:mt-28 mt-16 md:mb-40 mb-10">
        <div className="text-[40px] text-center md:my-12">FAQ</div>
        <div className="faqs lg:w-[58%] md:w-[85%] relative lg:left-[21%] md:left-[7%] md:bg-white md:py-10 py-5 lg:px-20 md:px-8 rounded-3xl">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ISA;
