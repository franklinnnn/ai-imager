import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
const Nav = () => {
  return (
    <header className="w-full flex justify-between items-center bg-gradient-to-tr from-cyan-500 to-blue-500  border-b-8 border-black">
      <Link to="/" className="flex flex-col items-center mx-4">
        <h2 className="text-7xl font-unbounded font-bold">AI Imager</h2>
        <div className="flex justify-start items-center w-full ml-4">
          <span className="font-barlow text-md font-bold">Powered by</span>{" "}
          <img src={logo} alt="logo" className="w-24 object-contain mx-4" />
        </div>
      </Link>
      {/* <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 mx-4 rounded-md"
      >
        Create
      </Link> */}
      <div className="flex ">
        <a
          href="#gallery"
          onClick={() =>
            document
              .getElementById("gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-center font-barlow font-bold text-lg uppercase border-l-4 border-black w-36 py-10 bg-transparent hover:bg-[#14CC60] hover:font-unbounded"
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
          className="text-center font-barlow font-bold text-lg uppercase border-l-4 border-black w-36 py-10 bg-transparent hover:bg-[#D90429] hover:font-unbounded"
        >
          about
        </a>
      </div>
    </header>
  );
};

export default Nav;
