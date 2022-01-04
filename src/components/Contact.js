import React from "react";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 bg-white w-full max-w-6xl p-8 sm:p-12 rounded-xl text-white">
        <div className="bg-white rounded-xl shadow-xl p-12 py-20 relative lg:right-28 text-gray-600 md:w-3/5">
          <form action="" className="flex flex-col space-y-4 md:w-10/12">
            <h1 className="font-bold text-lg">Get in touch.</h1>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Email
              </label>

              <MailIcon className="h-5 relative top-5 left-2 z-10 text-gray-300" />
              <input
                type="text"
                placeholder="Email Address"
                class="ring-1 ring-gray-300 w-full rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Phone Number
              </label>

              <PhoneIcon className="h-5 relative top-5 left-2 z-10 text-gray-300" />
              <input
                type="text"
                placeholder="Enter your number here"
                class="ring-1 ring-gray-300 w-full rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Enter your message
              </label>
              <ChatAltIcon className="h-5 relative top-5 left-2 z-10 text-gray-300" />
              <textarea
                placeholder="Type your message here"
                rows="4"
                class="ring-1 ring-gray-300 w-full rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <button className="inline-block self-end w-full bg-blue-700 text-white font-bold rounded-lg px-6 py-3 uppercase text-sm ">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col space-y-8  px-8 ml-8 justify-between w-full md:w-3/5">
          <div className="py-6">
            <h3 className="font-bold text-2xl text-blue-700 tracking-wide">
              Office Address
            </h3>
            <a href="/#">
              <p className="pt-2 text-2xl text-black ">
                HP Keluskar marg Opp Equinox Business <br></br> Center, BKC
                Crossing, Mumbai,<br></br> Maharashtra 400070
              </p>
            </a>
          </div>
          <div className="inline-flex space-y-6 bg-blue-200 rounded-3xl w-2/5 relative top-2 md:top-12 justify-center items-center">
            <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
            <p className="text-blue-700 ml-4 text-sm relative bottom-3.5 right-1">
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
