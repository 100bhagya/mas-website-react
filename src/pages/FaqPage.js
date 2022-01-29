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
          className="md:w-4 w-3 md:h-1 h-[3px] md:mr-7 mr-4 relative md:my-5 my-4 md:left-1 rounded-xl"
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
      <div className="md:bg-gradient-to-b md:from-blue-300 md:to-blue-100 pb-20">
        <div className="flex md:ml-28 pl-8 md:pl-0 pt-24 top_bg">
          <img
            src={QandA}
            alt="Question"
            className="h-20 w-20 mr-5 md:h-[123px] md:w-[123px]"
          />
          <p className="md:pt-9 pt-4 md:ml-20 lg:text-[40px] text-2xl font-semibold  md:font-medium">
            Frequently Asked Questions
          </p>
        </div>
        <div className="flex ">
          <div className="">
            {/* <div className={`ml-28 lg:w-4/5 my-20 ${position}`}> */}
            <div className={`ml-28 lg:4/5 my-20 hidden md:block`}>
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
          <div className="relative md:left-20 md:h-[88vh] md:overflow-y-scroll faq_ques top-20 md:w-[59%] md:overflow-x-hidden">

            {Data.map((post) => {
              console.log(post);
              return (
                <div
                  className="md:bg-white  md:w-[95%] md:mb-20  md:rounded-3xl"
                  id={post.tag}
                >
                  <div className="flex ml-5 md:p-12 md:bg-white rounded-2xl">
                    <img
                      src={post.icon}
                      alt="icon"
                      className={`px-4 md:px-5 py-4 rounded-lg bg-${post.id}`}
                    />
                    <div className="md:ml-6 ml-3 mt-2">
                      <p className="lg:text-[22px] text-xl font-medium">
                        {post.tag}
                      </p>
                      <p className="lg:text-[16px] text-[13px] font-normal text-gray-400">
                        New around here? Start with the basics.
                      </p>
                    </div>
                  </div>
                  <div className="faqs relative md:w-[80%] md:max-w-[750px] md:left-[135px] pb-12">
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
