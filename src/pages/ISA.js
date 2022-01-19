import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Data from "../components/Data_ISA";
import Footer from "../components/Footer";
import Rectangle from "../images/Rectangle 52.png";
import Artboard from "../images/isa_artboard.png";
import Circle from "../images/Ellipse 7.png";

const IncomeSlab = ({ income, status, color, round }) => {
  return (
    <div
      className={`flex w-full h-[75px] pt-1 bg-card border-solid border-b-[1px] ${color} ${round}`}
    >
      <div className="text-sm font-normal w-1/4 text-center pt-6">{income}</div>
      <div className="text-sm font-normal w-3/4 text-center pt-6">{status}</div>
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
      <div className="faq-question text-lg font">{faq.question}</div>
      <div className="faq-answer text-sm font flex">
        <img
          src={Rectangle}
          alt="rectangle"
          className="w-4 h-1 mr-7 relative my-5 left-1 rounded-xl"
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
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="lg:pt-16 pb-20 lg:bottom-12">
          <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
            ISA
          </h1>

          <p className="relative justify-center lg:top-5 text-lg font  text-black leading-8">
            Income Share Agreement
          </p>
        </div>
      </div>
      <div className="bg-card w-10/12 mt-20 ml-36 pt-8 px-20 pb-24 rounded-xl">
        <div className="text-center text-2xl font-semibold">About ISA</div>
        <div className="flex mt-16">
          <div className="mt-14">
            <div className="flex mt-10 pr-56">
              <img
                src={Circle}
                alt="circle"
                className="rounded-full h-1 mr-7 mt-3"
              />
              <p className="text-lg">
                Just 2500/- will be charged as registration fee for joining My
                Analytics School which is fully refundable only if you join My
                Analytics School and remain unplaced till 30th June 2022.
              </p>
            </div>
            <div className="flex mt-10">
              <img
                src={Circle}
                alt="circle"
                className="rounded-full h-1 mr-7 mt-3"
              />
              <p className="text-lg">
                No need to pay ISA charges if placed below 6 lakhs.
              </p>
            </div>
            <div className="flex mt-10">
              <img
                src={Circle}
                alt="circle"
                className="rounded-full h-1 mr-7 mt-3"
              />
              <p className="text-lg">
                You will be signing our ISA once you are registered with us.
              </p>
            </div>
          </div>
          <img src={Artboard} alt="artboard" className="relative bottom-14" />
        </div>
        <div className="">
          <div className="flex mt-10">
            <img
              src={Circle}
              alt="circle"
              className="rounded-full h-1 mr-7 mt-3"
            />
            <p className="text-lg">
              After registration, the student will have an option to pay 28,999
              upfront or 5000 for 6 months during preparation (May-Oct 2021). No
              need to pay anything after getting placed, if you have chosen
              upfront payment mode.
            </p>
          </div>
          <div className="flex mt-10">
            <img
              src={Circle}
              alt="circle"
              className="rounded-full h-1 mr-7 mt-3"
            />
            <p className="text-lg">
              If you choose to pay net ISA at once then you have to pay it
              within 15 days of your placement.
            </p>
          </div>
          <div className="flex mt-10">
            <img
              src={Circle}
              alt="circle"
              className="rounded-full h-1 mr-7 mt-3"
            />
            <p className="text-lg">
              You are entitled to share offer letter received from the company
              and other documents for assuring proper ISA transactions.
            </p>
          </div>
          <div className="flex mt-10">
            <img
              src={Circle}
              alt="circle"
              className="rounded-full h-1 mr-7 mt-3"
            />
            <p className="text-lg">
              In case you are fired/you leave the job/you switch the job before
              completion of ISA, your ISA will be paused and will resume with
              your next job till completion. (Not applicable in case you don’t
              wish to do a job further).
            </p>
          </div>
        </div>
      </div>
      <div className="relative left-[21%] mb-20 mt-28">
        <div className="w-7/12 shadow-2xl">
          <div className="flex border-b-2 border-solid border-blue-600 bg-card w-full h-[75px] rounded-t-2xl">
            <div className="text-2xl font-semibold w-1/4 text-blue-600 text-center pt-6">
              Income Slab
            </div>
            <div className="text-2xl font-semibold w-3/4 text-blue-600 text-center pt-6">
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
            color="border-card"
            income="> 15 LPA"
            status="6000 for 12 months after your job starts or 59,999 one time payment once you are placed"
          />
        </div>
      </div>
      <div className="mt-28 mb-40">
        <div className="text-[40px] text-center my-12">FAQ</div>
        <div className="faqs width relative left-[21%] bg-white py-10 px-20 rounded-3xl">
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
