import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Card from "./Card";
import languages from "../../../public/languages.json";

const Languages = () => {
  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto my-12 md:px-20 px-4 flex flex-col   ">
          <span>
            <h1 className="flex justify-center text-3xl mt-28 md:mt-48 font-medium md:text-4xl md:font-semibold ">
              Decode the Digital World
            </h1>
            <p className="flex justify-center mt-4 md:mt-10 text-xl font-normal text-center mx-5">
              Break barriers with programming—where every line of code
              transforms logic into innovation.
            </p>

            <div className=" md:mt-10 md:w-3/4 md:ml-40 w-3/4 mt-10  ml-12">
              <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:shadow-slate-600 dark:shadow-md">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <div>
              <h1 className="md:mt-36  md:text-3xl md:ml-32 text-xl font-medium mt-20 ml-10">
                Programming Languages
              </h1>
            </div>

            <div className="mt-10 flex flex-wrap justify-center">
              {languages.map((language) => {
                return <Card language={language} key={language.id} />;
              })}
            </div>
          </span>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Languages;
