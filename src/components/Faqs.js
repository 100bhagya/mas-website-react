import React, { useState } from "react";
import "../index.css";
import QandA from "../images/question-and-answer.png";
import Data from "../components/Data_Faq";
import Rectangle from "../images/Rectangle 52.png";

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
      <div className="faq-answer text-sm font flex font-medium">
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

const Faqs = () => {
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
    <div className="gradient">
      <div className="flex ml-28 pt-12">
        <img src={QandA} alt="Question" />
        <p className="pt-9 ml-20 lg:text-[40px] font-medium">
          Frequently Asked Questions
        </p>
      </div>
      <div className="flex ">
        <div className="">
          {/* <div className={`ml-28 lg:w-4/5 my-20 ${position}`}> */}
          <div className={`ml-28 lg:4/5 my-20`}>
            {Data.map((post) => {
              return (
                <a href={`#${post.tag}`}>
                  <div className="flex p-6 bg-white rounded-2xl mt-6">
                    <img
                      src={post.icon}
                      alt="icon"
                      className={`px-5 py-5 rounded-lg bg-${post.id}`}
                    />
                    <div className="ml-6 w-72">
                      <p className="lg:text-lg font-medium">{post.tag}</p>
                      <p className="text-gray-400">
                        New around here? Start with the basics.
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="relative left-20 h-[80vh] overflow-y-scroll faq_ques top-20 w-[59%] overflow-x-hidden">
          {Data.map((post) => {
            console.log(post);
            return (
              <div
                className="bg-white w-[95%] mb-20  rounded-3xl"
                id={post.tag}
              >

                <div className="flex p-12 bg-white rounded-2xl">
                  <img
                    src={post.icon}
                    alt="icon"
                    className={`px-5 py-4 rounded-lg bg-${post.id}`}
                  />
                  <div className="ml-6 mt-2">
                    <p className="lg:text-[22px] font-medium">{post.tag}</p>
                    <p className="lg:text-[16px] font-normal text-gray-400">
                      New around here? Start with the basics.
                    </p>
                  </div>
                </div>
                <div className="faqs width1 relative left-[135px] pb-12">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
