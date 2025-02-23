import { useEffect, useState } from "react";
import TheamController from "./TheamController";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/languages">Languages</a>
      </li>

      <li>
        <a href="/about">About</a>
      </li>

      <li>
        <a href="/contect">Contact</a>
      </li>
    </>
  );

  return (
    <div
      className={`navbar bg-base-100 max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed left-0 top-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-800 duration-200 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden dark:bg-slate-900 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-900 dark:text-white"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          techEd
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        {/* search bar */}
        <div className="hidden md:block mr-4">
          <label className="px-3 py-2 border rounded-md flex items-center gap-2">
            <input
              type="text"
              className="grow outline-none dark:bg-slate-900 dark:text-white"
              placeholder="Search"
            />
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

        <div className="mr-3">
          <TheamController />
        </div>

        <a
          className=" text-white bg-blue-400 py-2 px-4 rounded-md hover:bg-blue-500"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login
        </a>
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
