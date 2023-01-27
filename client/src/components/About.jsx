import React from "react";

const About = () => {
  return (
    <section
      className="w-full mx-auto border-b-8 border-black py-8 bg-gradient-to-r from-[#D90429] to-[#EF233C]"
      id="about"
    >
      <div className="mx-4 flex items-center gap-4">
        <h1 className="font-unbounded font-extrabold text-[60px]">ABOUT</h1>
        <p className="font-barlow font-bold uppercase mt-2 text-[24px] max-w-[500px]">
          This is basically just DALL-E
        </p>
      </div>
    </section>
  );
};

export default About;
