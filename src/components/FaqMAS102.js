import React, { useState } from "react";
import Data from "../data/FAQMAS102";
import Rectangle from "../images/Rectangle 52.png";

const FAQ = ({ faq, index, toggleFAQ }) => {
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

const FaqMAS102 = () => {
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
    <div className="mt-16 md:py-16 bg-blue-50">
     <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">FAQs
     </h1>
    <div className="faqs lg:w-[58%] md:w-[85%]  relative lg:left-[21%] md:left-[7%] md:bg-white md:py-10 py-5 lg:px-20 md:px-8 rounded-3xl">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  </div>
  );
};

export default FaqMAS102;