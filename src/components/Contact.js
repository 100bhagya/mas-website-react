/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";

const Contact = () => {
  const initialValues = { username: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    switch (name) {
      case "username":
        formErrors.username = "";
      case "email":
        formErrors.email = "";
      case "phone":
        formErrors.phone = "";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
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
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0  w-full max-w-6xl p-4 lg:p-12 rounded-xl text-white">
        <div className="bg-white rounded-xl border-solid border-2 border-gray-200 md:border-gray-100 shadow-xl lg:p-12 p-4 pb-8 py-20 relative lg:right-28 text-gray-600 md:w-3/5">
          <form
            action="https://formsubmit.co/admin@myanalyticsschool.com"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col font-pop space-y-4 lg:w-10/12"
          >
            <h1 className="font-bold text-lg">Get in touch.</h1>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                required
                name="username"
                value={formValues.username}
                onChange={handleChange}
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <p className=" text-[12px] md:text-[16px]">{formErrors.username}</p>

            <div>
              <label htmlFor="" className="text-sm font-medium">
                Email
              </label>

              <MailIcon className="h-5 relative top-5 left-2 z-10 text-gray-300" />
              <input
                type="text"
                placeholder="Email Address"
                required
                name="email"
                value={formValues.email}
                onChange={handleChange}
                class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <p className="text-red-500 relative bottom-7 text-[12px] md:text-[16px]">
              {formErrors.email}
            </p>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Phone Number
              </label>

              <PhoneIcon className="h-5 relative top-5 left-2 z-10 text-gray-300" />
              <input
                type="text"
                placeholder="Enter your number here"
                required
                name="phone"
                onChange={handleChange}
                value={formValues.phone}
                class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <p className="text-red-500 relative bottom-7 text-[12px] md:text-[16px]">
              {formErrors.phone}
            </p>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Enter your message
              </label>
              <ChatAltIcon className="h-5 relative top-5 left-2 z-10 text-gray-300" />
              <textarea
                placeholder="Type your message here"
                rows="4"
                required
                class="ring-1 ring-gray-300 w-full text-[14px] md:text-[16px]  rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <button className="inline-block self-end w-full bg-blue-700 text-white font-bold rounded-lg px-6 py-3 uppercase text-sm ">
              Submit
            </button>

            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="text-green-500 justify-center text-center text-[12px] md:text-[16px]">
                Submitted successfully!!
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
        <div className="flex lg:flex-col flex-col-reverse space-y-8  md:px-8 md:ml-8 justify-between w-full md:w-3/5">
          <div className="py-6">
            <h3 className="lg:font-bold lg:text-2xl text-lg md:text-xl font-semibold text-blue-700 tracking-wide">
              Office Address
            </h3>
            <a href="/#">
              <p className="pt-2 md:text-xl lg:text-2xl text-sm font text-black ">
                HP Keluskar marg Opp Equinox Business <br></br> Center, BKC
                Crossing, Mumbai,<br></br> Maharashtra 400070
              </p>
            </a>
          </div>
          <div className="inline-flex md:space-y-6 space-y-5 bg-blue-200  rounded-3xl lg:w-2/5 md:w-[60%] w-[45%] relative top-0 md:top-12 justify-center items-center">
            <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
            <p className="text-blue-700 md:ml-4 ml-3 font md:text-lg text-[12px] lg:text-sm relative md:bottom-3.5 bottom-3 right-1">
              View us on map
            </p>
          </div>
          <div className="relative md:bottom-4 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60333.685390438026!2d72.87721700000002!3d19.070097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8931a0a8ae1%3A0xde7d09e4bd547394!2sOmkar%20Meridia%2C%20BKC%20Crossing%2C%20Lal%20Bahadur%20Shastri%20Rd%2C%20BMC%20Colony%2C%20Kurla%20West%2C%20Kurla%2C%20Mumbai%2C%20Maharashtra%20400070%2C%20India!5e0!3m2!1sen!2sus!4v1641314551635!5m2!1sen!2sus"
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
  );
};

export default Contact;
