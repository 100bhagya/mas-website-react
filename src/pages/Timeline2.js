import React, { useState } from "react";

import Data from "../data/Timeline2Data";
import Rectangle from "../images/Rectangle 52.webp";


function FAQ({ faq, index, toggleFAQ, tag }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      name={tag}
      onClick={() => toggleFAQ(index, tag)}
    >
      <div className="text-lg font-semibold faq-question font">
        {faq.question}
      </div>
      <div className="text-sm faq-answer font">
        <div className="mt-2 text-lg font-normal">{faq.Status}</div>
        <div className="mt-10 mb-3">
          {faq.answer.map((post) => {
            return (
              <div className="flex">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="relative w-4 h-1 my-5 mr-7 left-3 bottom-3 rounded-xl"
                />
                <div className="">{post.role}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-sm faq-answer font">
        <div className="text-lg font-normal">{faq?.Status1}</div>
        <div className="mt-10 mb-3">
          {faq?.answer1?.map((post) => {
            return (
              <div className="flex">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="relative w-4 h-1 my-5 mr-7 left-3 bottom-3 rounded-xl"
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

const Timeline2 = () => {
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
      
      <div className="justify-center text-center lg:flex pt-28 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="pb-20 mt-4 lg:pt-16 md:mt-0 lg:bottom-12">
          <h1 className="md:font-medium font-semibold text-center justify-center relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
            Timeline
          </h1>

          <p className="relative justify-center mt-8 text-sm leading-8 text-black md:mt-0 lg:top-5 md:text-lg font">
            The complete timeline of the course
          </p>
        </div>
      </div>
      <div className="relative lg:left-96 md:left-12 faq_ques top-20 lg:w-[59%] md:w-[93%] pb-32">
        {Data.map((post) => {
          return (
            <div className="md:bg-white bg-back w-[95%] md:mb-20 mb-12  rounded-3xl md:shadow-2xl flex">
              <div className={`rounded-l-3xl w-10 ${post.sidecolor}`}></div>
              <div>
                <div className="flex md:p-12 md:bg-white bg-back rounded-2xl">
                  <div className="px-4 lg:ml-24 md:ml-8 md:mt-2 md:px-0">
                    <p
                      className="lg:text-[24px] md:text-xl text-lg font-medium md:font-semibold"

                      id={post.tag}
                    >
                      {post.tag}
                    </p>
                    <p className="md:text-[14px] md:w-8/12 text-[12px] font-normal text-gray-400">

                      {post.offer}
                    </p>
                  </div>
                </div>
                <div className="faqs lg:w-[80%] md:w-[87%] md:max-w-[750px] relative lg:left-[100px] md:left-[60px] md:pb-12">

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
     
    </div>
  );
};

export default Timeline2;
