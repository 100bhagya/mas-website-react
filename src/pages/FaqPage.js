import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import QandA from "../images/question-and-answer.png";
import Data from "../data/FaqData";
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
      <div className="faq-question md:text-lg text-[12px] font font-semibold">
        {faq.question}
      </div>
      <div className="faq-answer md:text-sm text-[11px] font flex font-medium">
        <img
          src={Rectangle}
          alt="rectangle"
          className="lg:w-4 w-3 lg:h-1 h-[3px] lg:mr-7 mr-4 relative lg:my-5 my-4 lg:left-1 rounded-xl"

        />
        {faq.answer}
      </div>
    </div>
  );
}

const FaqPage = () => {
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
    <div>
      <Navbar />
      <div className="lg:bg-gradient-to-b lg:from-blue-300 lg:to-blue-100 pb-20">
        <div className="flex lg:ml-28 pl-8 lg:pl-0 pt-24 top_bg">
          <img
            src={QandA}
            alt="Question"
            className="h-20 w-20 mr-5 lg:h-[123px] lg:w-[123px]"
          />
          <p className="lg:pt-9 pt-4 lg:ml-20 lg:text-[40px] md:text-3xl text-2xl font-semibold  lg:font-medium">
            Frequently Asked Questions
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <div className="">
            {/* <div className={`ml-28 lg:w-4/5 my-20 ${position}`}> */}
            <div className={`ml-28 lg:4/5 my-20 hidden lg:block`}>

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
          <div className="relative lg:left-20 lg:h-[88vh] lg:overflow-y-scroll faq_ques top-20 lg:w-[59%] lg:overflow-x-hidden">

            {Data.map((post) => {
              console.log(post);
              return (
                <div
                  className="lg:bg-white  lg:w-[95%] lg:mb-20  lg:rounded-3xl"
                  id={post.tag}
                >
                  <div className="flex ml-5 lg:p-12 lg:bg-white rounded-2xl">
                    <img
                      src={post.icon}
                      alt="icon"
                      className={`px-4 lg:px-5 py-4 rounded-lg bg-${post.id}`}
                    />
                    <div className="lg:ml-6 ml-3 mt-2">
                      <p className="md:text-[22px] text-xl font-medium">
                        {post.tag}
                      </p>
                      <p className="md:text-[16px] text-[13px] font-normal text-gray-400">
                        New around here? Start with the basics.
                      </p>
                    </div>
                  </div>
                  <div className="faqs relative lg:w-[80%] lg:max-w-[750px] lg:left-[135px] pb-12">

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
      <Footer />
    </div>
  );
};

export default FaqPage;
