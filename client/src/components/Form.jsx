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
          className="block font-barlow text-[40px] font-bold text-black mb-[-1rem] uppercase"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-unbounded font-semibold text-sx bg-[#ecf1f1] py-1 px-2 bg-red-500 border-2 border-b-4 border-r-4 border-black text-black hover:bg-[#FCBA04]"
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
        className="bg-white/20 border-2 border-b-4 border-r-4 border-black font-barlow placeholder-gray-900 text-gray/50 text-m outline-none block w-full p-3 focus:bg-white"
      />
    </div>
  );
};

export default Form;
