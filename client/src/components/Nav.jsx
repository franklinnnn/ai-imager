import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
const Nav = () => {
  return (
    <header className="w-full flex justify-between items-center bg-gradient-to-tr from-cyan-500 to-blue-500 border-b-8 border-black rounded-t-lg">
      <Link to="/" className="flex flex-col items-center mx-4">
        <h2 className="text-7xl font-unbounded font-bold">AI Imager</h2>
        <div className="flex justify-start items-center w-full ml-4">
          <span className="font-barlow text-md font-bold">Powered by</span>{" "}
          <img src={logo} alt="logo" className="w-24 object-contain mx-4" />
        </div>
      </Link>
      <div className="flex ">
        <a
          href="#gallery"
          onClick={() =>
            document
              .getElementById("gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-center font-barlow font-bold text-lg uppercase border-l-4 border-black w-36 py-10 bg-transparent hover:bg-[#14CC60] hover:-translate-x-[0.4rem] hover:shadow-[0.6rem_0_0_0_black] hover:font-unbounded ease-in-out duration-150"
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
          className="text-center font-barlow font-bold text-lg uppercase border-l-4 border-black w-36 py-10 bg-transparent hover:bg-[#D90429] hover:-translate-x-[0.4rem] hover:shadow-[0.6rem_0_0_0_black] hover:font-unbounded rounded-tr-lg ease-in-out duration-150"
        >
          about
        </a>
      </div>
    </header>
  );
};

export default Nav;
