/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useState } from "react";
import {
  UserIcon,
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";
import CloseIcon from "../images/cross_head.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const initialValues = { name: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    switch (name) {
      case "name":
        delete formErrors.username;
      case "email":
        delete formErrors.email;
      case "phone":
        delete formErrors.phone;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = validate(formValues);
    console.log(errors);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_9op7uj3",
          "template_490hug5",
          event.target,
          "3vmuR0ErzxVHYZeNw"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      setIsSubmit(true);
      setFormValues(initialValues);
      console.log(isSubmit);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email!";
    }
    if (!phoneRegex.test(values.phone)) {
      errors.phone = "This is not a valid Phone Number!";
    }
    return errors;
  };

  return (
    <section className="p-12 mb-12">  
      <h1 className="py-12 text-3xl font-bold text-center text-gray-900  lg:text-4xl">
        Contact Us
      </h1> 
      <div className="p-12">
        {isSubmit ? (
          <div className="absolute h-[100%] w-[100%] z-[10000] backdrop-blur-sm bg-white/30 flex items-center justify-center">
            <div className="relative flex flex-col items-center max-w-md px-12 py-8 space-y-8 shadow-2xl bg-card rounded-2xl">
              <img
                src={CloseIcon}
                onClick={() => setIsSubmit(false)}
                alt="close"
                className="absolute w-4 h-4 cursor-pointer right-5 top-5"
              />
              <div className="">
                <p className="mb-2 font-serif text-xl text-center text-green-400">
                  Your response has been submitted successfully.
                </p>
                <p className="text-base text-center text-slate-800">
                  We will get back to you shortly.
                </p>
              </div>
              <button
                className="px-8 py-2 text-lg text-white bg-blue-600 shadow-xl rounded-xl"
                onClick={() => setIsSubmit(false)}
              >
                Okay, Got it
              </button>
            </div>
          </div>
        ) : null}
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto space-y-6 text-white lg:flex-row lg:space-y-0 lg:space-x-12 rounded-xl">
          <div className="w-full px-6 py-8 text-gray-600 bg-white border-2 border-gray-200 border-solid shadow-xl rounded-xl lg:p-12 md:w-2/3 lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full space-y-1 font-pop lg:w-10/12"
            >
              <h1 className="text-xl mb-2 font-bold">Get in touch</h1>
              <div>
                <label htmlFor="" className="text-sm font-semibold">
                  Name
                </label>

                <UserIcon className="relative z-10 h-5 text-gray-400 top-3 left-2" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <p className=" text-[12px] md:text-[16px]">{formErrors.name}</p>

              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Email
                </label>

                <MailIcon className="relative z-10 h-5 text-gray-400 top-3 left-2" />
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <p className="text-red-500 relative bottom-7 text-[12px] md:text-[16px]">
                {formErrors.email}
              </p>
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Phone Number
                </label>

                <PhoneIcon className="relative z-10 h-5 text-gray-400 top-3 left-2" />
                <input
                  type="text"
                  placeholder="Enter your number here"
                  required
                  name="phone"
                  onChange={handleChange}
                  value={formValues.phone}
                  class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <p className="text-red-500 relative bottom-7 text-[12px] md:text-[16px]">
                {formErrors.phone}
              </p>
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Enter your message
                </label>
                <ChatAltIcon className="relative z-10 h-5 text-gray-400 top-3 left-2" />
                <textarea
                  placeholder="Type your message here"
                  name="message"
                  rows="4"
                  required
                  class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button className="self-end inline-block w-full px-6 py-3 text-sm font-bold text-white uppercase bg-blue-600 rounded-lg ">
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col-reverse items-center justify-between w-full space-y-8 lg:flex-col md:w-1/2">
            <div className="py-6">
              <h3 className="text-lg font-semibold tracking-wide text-slate-900 lg:text-2xl md:text-xl">
                Office Address
              </h3>
              <a href="/#">
                <p className="pt-4 text-sm text-slate-600 ">
                  HP Keluskar marg Opp Equinox Business <br></br> Center, BKC
                  Crossing, Mumbai,<br></br> Maharashtra 400070
                </p>
              </a>
            </div>

            <div className="">
              <div className="flex items-center w-3/5 px-4 py-2 mb-4 space-x-4 bg-blue-200 rounded-3xl md:w-2/5 flex-start">
                <LocationMarkerIcon className="w-5 h-5 text-blue-900" />
                <p className="text-sm text-blue-900 font">View us on map</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d60333.716951423754!2d72.8769323!3d19.0700103!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c8931a0a8ae1%3A0xde7d09e4bd547394!2sOmkar%20Meridia%20BKC%20Crossing%20Lal%20Bahadur%20Shastri%20Rd%2C%20BMC%20Colony%2C%20Kurla%20West%2C%20Kurla%20Mumbai%2C%20Maharashtra%20400070!3m2!1d19.0700103!2d72.87693229999999!5e0!3m2!1sen!2sin!4v1645357321858!5m2!1sen!2sin"
                width="450"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
