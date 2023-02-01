import React from "react";
import { downloadImage } from "../utils";
import { BiCopy, BiDownload } from "react-icons/bi";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div
      className="group relative shadow-card ease-in-out duration-150 rounded-md border-4 border-black
    border-r-8 border-b-8 hover:shadow-cardhover card hover:-translate-y-2 hover:border-4 hover:border-t-8 hover:border-l-8"
    >
      <img className="w-full h-auto object-cover" src={photo} alt={prompt} />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-white p-4 border-y-4 border-black md:-translate-y-4 xs:-translate-y-0">
        <p className="text-black text-md font-bold overflow-y-auto prompt">
          {prompt}
        </p>

        <div className="md:mt-5 flex md:flex-row justify-between items-center gap-2 xs:mt-2">
          <div className="flex items-center gap-2">
            <div className="md:w-7 md:h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold border-2 border-black xs:w-5 xs:h-5">
              {name[0]}
            </div>
            <p className="font-unbounded text-black md:text-sm xs:text-[10px]">
              {name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(prompt);
                toast("Prompt copied!");
              }}
              className="group flex justify-center items-center md:w-10 md:h-10 rounded-md border-2 border-black bg-[#FFD25A] py-1 xs:w-6 xs:h-6"
            >
              <BiCopy className="md:w-6 md:h-6 xs:w-4 xs:h-4 ease-in-out duration-300 hover:scale-110" />
            </button>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="flex justify-center items-center md:w-10 md:h-10 rounded-md border-2 border-black  bg-[#2EC4B6] py-1 xs:w-6 xs:h-6"
            >
              {/* <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain"
              /> */}
              <BiDownload className="md:w-6 md:h-6 xs:w-4 xs:h-4 hover:animate-bounce " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
