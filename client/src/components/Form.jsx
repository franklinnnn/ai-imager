import React from "react";

const Form = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  ref,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block font-barlow md:text-[40px] font-bold text-black md:mb-[-1rem] uppercase xs:text-[20px] xs:mb-0"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-unbounded font-semibold text-sx bg-[#ecf1f1] py-1 px-2 bg-red-500 rounded-md border-2 border-b-4 border-r-4 border-black text-black hover:bg-[#FCBA04] ease-in-out duration-100 hover:border-2 hover:border-t-4 hover:border-l-4"
          >
            Surprise me{" "}
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-white/20 rounded-md border-2 border-b-4 border-r-4 border-black font-barlow placeholder-gray-900 text-gray/50 text-m outline-none block w-full p-3 focus:bg-white"
      />
    </div>
  );
};

export default Form;
