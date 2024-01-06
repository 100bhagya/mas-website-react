import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SomethingLost from "../images/something-lost.png";

const Page404 = () => {
  return (
    <Fragment>
      <Navbar />
      <div class="flex flex-col  h-screen bg-center bg-cover bg-no-repeat bg-gray-100">
        <div class="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white border bg-opacity-70 rounded-xl shadow-lg space-y-5 text-center cursor-pointer">
          <img 
            src={SomethingLost}
            alt="404"
            class="w-96 mx-auto"
          />

          <h1 class="text-xl font-bold uppercase text-sky-800 transition duration-500">
            Oops, looks like the page is lost.
          </h1>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Page404;
