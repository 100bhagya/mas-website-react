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
      <div className="faq-question md:text-lg text-[12px] font font-semibold text-gray-700">
        {faq.question}
      </div>
      <div className="faq-answer md:text-sm text-[11px] font flex font-medium text-gray-500">
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
      <div className="mb-16">
        <div className="flex lg:pl-28 pl-8 py-6 pt-24 top_bg bg-blue-50">
          <img
            src={QandA}
            alt="Question"
            className="h-20 w-20 mr-5 lg:h-[123px] lg:w-[123px]"
          />
          <p className="lg:pt-9 pt-4 lg:ml-10 lg:text-[40px] md:text-3xl text-2xl font-semibold  lg:font-medium">
            Frequently Asked Questions
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <div className="">
            {/* <div className={`ml-28 lg:w-4/5 my-20 ${position}`}> */}
            <div className={`ml-28 my-20 hidden lg:block lg:w-3/5 xl:w-4/5 `}>
              {Data.map((post) => {
                return (
                  <a href={`#${post.tag}`} className="cursor-pointer" key={post.id}>
                    <div className="flex p-6 bg-white border shadow rounded-2xl mt-6">
                      <img
                        src={post.icon}
                        alt="icon"
                        className={`px-5 py-5 w-16 h-16 rounded-lg bg-${post.id}`}
                      />
                      <div className="ml-6 w-72">
                        <p className="lg:text-lg font-medium">{post.tag}</p>
                        <p className="text-gray-400 lg:text-sm">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative xl:left-20 lg:h-[88vh] lg:overflow-y-scroll shadow faq_ques top-20 lg:overflow-x-hidden p-8 lg:border rounded-3xl">
            {Data.map((post) => {
              console.log(post);
              return (
                <div
                  className="lg:bg-white  lg:w-[95%] lg:rounded-3xl"
                  id={post.tag}
                >
                  <div className="flex ml-5 lg:p-6 p-3 lg:bg-white rounded-2xl border-2">
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
                        {post.description}
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
