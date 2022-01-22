import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Data from "../data/Timeline1Data";
import Rectangle from "../images/Rectangle 52.png";
import Footer from "../components/Footer";

function FAQ({ faq, index, toggleFAQ, tag }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      name={tag}
      onClick={() => toggleFAQ(index, tag)}
    >
      <div className="faq-question text-lg font font-semibold">
        {faq.question}
      </div>
      <div className="faq-answer text-sm font">
        <div className="text-lg font-normal mt-2">{faq.Status}</div>
        <div className="mt-10 mb-3">
          {faq.answer.map((post) => {
            return (
              <div className="flex">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="w-4 h-1 mr-7 relative my-5 left-3 bottom-3 rounded-xl"
                />
                <div className="">{post.role}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="faq-answer text-sm font">
        <div className="text-lg font-normal">{faq?.Status1}</div>
        <div className="mt-10 mb-3">
          {faq?.answer1?.map((post) => {
            return (
              <div className="flex">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="w-4 h-1 mr-7 relative my-5 left-3 bottom-3 rounded-xl"
                />

                <div className="">{post.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Timeline1 = () => {
  const [faqs, setfaqs] = useState(Data);
  const toggleFAQ = (index, tag) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (faq.tag === tag) {
          faq.questions.map((data, i2) => {
            if (i2 === index) {
              data.open = !data.open;
            } else {
              data.open = false;
            }

            return data;
          });
        } else {
          faq.questions.map((data, i2) => {
            data.open = false;

            return data;
          });
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
          <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
            Timeline
          </h1>

          <p className="relative justify-center lg:top-5 text-lg font  text-black leading-8">
            The complete timeline of the course
          </p>
        </div>
      </div>
      <div className="relative lg:left-96 md:left faq_ques top-20 w-[59%] pb-32">
        {Data.map((post) => {
          return (
            <div className="bg-white w-[95%] mb-20  rounded-3xl shadow-2xl flex">
              <div className={`rounded-l-3xl w-10 ${post.sidecolor}`}></div>
              <div>
                <div className="flex p-12 bg-white rounded-2xl">
                  <div className="ml-24 mt-2">
                    <p className="lg:text-[24px] font-semibold" id={post.tag}>
                      {post.tag}
                    </p>
                    <p className="lg:text-[14px] w-8/12 font-normal text-gray-400">
                      {post.offer}
                    </p>
                  </div>
                </div>
                <div className="faqs width1 relative left-[100px] pb-12">
                  {post.questions.map((faq, i) => (
                    <FAQ
                      faq={faq}
                      tag={post.tag}
                      index={i}
                      toggleFAQ={toggleFAQ}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Timeline1;
