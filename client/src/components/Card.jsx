import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";
import { BiCopy, BiDownload } from "react-icons/bi";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div
      className="group relative shadow-card ease-in-out duration-300 border-4 border-black
    border-r-8 border-b-8 hover:shadow-cardhover card hover:-translate-y-2"
    >
      <img className="w-full h-auto object-cover  " src={photo} alt={prompt} />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-white p-4 border-y-4 border-black -translate-y-4">
        <p className="text-black text-md font-bold overflow-y-auto prompt">
          {prompt}
        </p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold border-2 border-black">
              {name[0]}
            </div>
            <p className="font-unbounded text-black text-sm">{name}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(prompt);
                alert("copied prompt");
              }}
              className="group flex justify-center items-center w-10 h-10 border-2 border-black bg-[#FFD25A] py-1"
            >
              <BiCopy className="w-6 h-6 ease-in-out duration-300 hover:scale-110" />
            </button>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="flex justify-center items-center w-10 h-10 border-2 border-black bg-[#2EC4B6] "
            >
              {/* <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain"
              /> */}
              <BiDownload className="w-6 h-6 hover:animate-bounce " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
