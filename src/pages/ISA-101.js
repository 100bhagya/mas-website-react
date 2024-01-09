import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Data from "../data/ISAData";
import Footer from "../components/Footer";
import Rectangle from "../images/Rectangle 52.png";
import Artboard1 from "../images/isa_image.png";

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

const ISA101 = () => {
  const [faqs, setfaqs] = useState(Data);
  const [ctc, setCtc] = useState(12);

  const calculateMonthlyPay = (ctc) => {
    if (ctc >20) {
      return 8800;
    } else if (ctc < 8) {
      return 0;
    } else 
     return Math.ceil((ctc * 100000 * 0.052786) / 12 / 100) * 100;
  }

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
    <div>
      <Navbar />
      <div className="justify-center text-center lg:flex pt-28 bg-blue-50">
        <div className="pb-16 bg-blue-50">
          <h1 className="py-8 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl text-center  font-primary">
            About <span className="text-sky-800">ISA Model</span>
          </h1>

          <p className="px-8 pb-8 text-base text-center text-slate-600 md:px-24 lg:top-5 lg:text-lg max-w-6xl mx-auto">
            Our Income Share Agreement (ISA) is an investment in students'
            career. Students can benefit from our services just by paying a
            negligible amount and contributing a very small part of their income
            once they are placed.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row relative md:left-[9%] md:w-[84%] lg:w-auto mt-24">
        <div className="lg:w-[45%] md:w-full md:pb-12 lg:pb-0 w-[83%] md:bg-card mt-12 lg:mt-[0] md:mt-[5vh] text-center lg:text-left  md:pr-28 md:text-lg mx-8 md:mx-0 text-[12px] text-slate-600  md:pt-[3vh] md:pl-28 lg:pl-12 rounded-l-2xl">
           Our ISA model helps students to utilise our well researched strategic
          plan for placement at zero advance payment and get placed at their
          dream company. Our Income Share Agreement (ISA) helps us to provide a
          training that is usually very expensive for no upfront cost.
        </div>
        <iframe   className="m-auto lg:m-0  lg:h-[40vh] h-[30vh] w-[85vw] lg:w-[40vw]"  src="https://www.youtube.com/embed/IcxKwDWbtWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

       
      </div>

      <div className="md:bg-card lg:w-[59%] text-slate-600 md:w-[85%] relative lg:left-[11%] md:left-[8%] mt-20 lg:ml-36 md:ml-0 md:pt-8 md:px-20 px-5 pb-16 rounded-2xl">
        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300 font-bold">
          Terms and Conditions:
        </p>
        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-sky-700 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-5 rounded-full pr-[14px] md:pl-[10px] pl-[9px] md:pt-[2px] pt-[4px]">
            1
          </p>
          Just 3000/- (inclusive of all taxes) will be charged as registration fee for joining My Analytics School which is fully refundable only if you join My Analytics School and remain unplaced till 30th June 2024.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-sky-700 md:w-7 w-6 md:h-7 h-6 mr-7 text-white rounded-full md:pl-[8px] pl-[7px] md:pt-[2px] pt-[3px]">
            2
          </p>
          No need to pay ISA charges if placed below 6 lakhs.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-sky-700 md:w-7 w-6 md:h-7 h-6 mr-7 text-white rounded-full md:pl-[8px] pl-[7px] md:pt-[2px] pt-[3px]">
            3
          </p>
          You will be signing our ISA once you are registered with us.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-sky-700 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-5 rounded-full pr-[14px] md:pl-[10px] pl-[7px] md:pt-[2px] pt-[3px]">
            4
          </p>
          After registration, the student will have an option to pay ₹ ₹ 34,000
          upfront. No need to pay anything after getting placed, if you have
          chosen upfront payment mode.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4 border-b-2 border-solid border-blue-300">
          <p className="bg-sky-700 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-2 rounded-full pl-[8px] pr-[10px] pt-[3px] md:pt-[2px]">
            5
          </p>
          You are entitled to share offer letter received from the company and
          other documents for assuring proper ISA transactions.
        </p>

        <p className="md:text-[16px] text-[12px] flex md:py-6 py-4">
          <p className="bg-sky-700 md:w-7 w-6  md:h-7 h-6 mr-7 text-white md:mt-5 rounded-full pr-[14px] md:pl-[10px] pl-[9px] md:pt-[2px] pt-[4px]">
            6
          </p>
          In case you are fired/you leave the job/you switch the job before
          completion of ISA, your ISA will be paused and will resume with your
          next job till completion. (Not applicable in case you don’t wish to do
          a job further).
        </p>
      </div>

      <div className=" md:mt-32 py-16">
        <div className="mb-16 text-2xl text-center md:text-3xl">
          Calculate Your ISA Charge
        </div>
        <div className="flex justify-center">
          <div className="border-[2px] border-solid border-black lg:w-[28%] w-[48%]  text-center py-4 text-lg lg:text-2xl">
            Enter CTC (LPA) to find ISA
          </div>
          <div className="border-[2px] border-solid border-black lg:w-[28%] w-[48%]  text-center py-4 text-lg lg:text-2xl">
            Monthly Pay
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="number"
            placeholder="12"
            onChange={(e) => {
              setCtc(e.target.value);
            }}
            value={ctc}
            // style={{ caretColor: "rgba(0,0,0,0)" }}
            className="border-[2px] border-solid border-black lg:w-[28%] w-[48%] text-center py-4 text-5xl"
          ></input>
          <div className="border-[2px] border-solid border-black lg:w-[28%] w-[48%] text-center py-4 text-5xl">
            {calculateMonthlyPay(ctc)}            
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center md:flex-row">
          <div className="mt-8 ml-5 md:mt-14 lg:ml-0">
            <div className="">*Registration Fees: 3000/-</div>
            <div className="mt-4">*Payments will be made for 12 months</div>
          </div>
          <div className="mt-10 ml-3 lg:ml-44 md:ml-24">
            <div className="py-2 md:px-20 text-center md:text-left w-[96%] md:w-full border-[2px] border-solid border-black">
              Your Salary Per Month
            </div>

            <div className="flex md:w-[20%]">
              <div className="py-2 md:px-12 px-11 border-[2px] border-solid border-black">
                {((ctc * 100000) / 12 - (ctc * 15000) / 12).toFixed(0)}
              </div>
              <div className="py-2 md:px-6 px-5 border-[2px] border-solid border-black">
                to
              </div>
              <div className="py-2 md:px-12 px-11 border-[2px] border-solid border-black">
                {((ctc * 100000) / 12 - (ctc * 5000) / 12).toFixed(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:py-16 bg-blue-50">
        <div className="text-[40px] text-center md:my-16">FAQ</div>
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

export default ISA101;
