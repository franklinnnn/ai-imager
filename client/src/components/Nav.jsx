import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
const Nav = () => {
  return (
    <header className="w-full sm:flex sm:flex-row justify-between items-center bg-gradient-to-tr from-cyan-500 to-blue-500 border-b-8 border-black sm:rounded-t-lg xs:flex-col">
      <Link
        to="/"
        className="flex flex-col items-center mx-4 sm:py-0 xs:mx-2 xs:py-4"
      >
        <h2 className="sm:text-7xl font-unbounded font-bold xs:text-4xl">
          AI Imager
        </h2>
        <div className="flex justify-start items-center w-full ml-4 xs:justify-center">
          <span className="font-barlow text-md font-bold ">Powered by</span>{" "}
          <img src={logo} alt="logo" className="w-24 object-contain mx-4" />
        </div>
      </Link>
      <div className="flex sm:border-t-0 xs:justify-evenly xs:border-t-4 border-black">
        <a
          href="#gallery"
          onClick={() =>
            document
              .getElementById("gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-center font-barlow font-bold text-lg uppercase sm:border-l-4 border-black sm:w-36 sm:py-10 bg-transparent hover:bg-[#14CC60] sm:hover:-translate-x-[0.4rem] sm:hover:shadow-[0.6rem_0_0_0_black] hover:font-unbounded ease-in-out duration-150 xs:py-0 xs:w-full xs:border-l-0 xs:hover:-translate-x-0 xs:hover:shadow-none"
        >
          gallery
        </a>
        <a
          href="#about"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-center font-barlow font-bold text-lg uppercase sm:border-l-4 border-black sm:w-36 sm:py-10 bg-transparent hover:bg-[#D90429] sm:hover:-translate-x-[0.4rem] hover:shadow-[0.6rem_0_0_0_black] hover:font-unbounded ease-in-out duration-150 xs:py-0 xs:w-full xs:border-l-4 xs:hover:-translate-x-0"
        >
          about
        </a>
      </div>
    </header>
  );
};

export default Nav;
