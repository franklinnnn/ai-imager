import React from "react";

const About = () => {
  return (
    <section
      className="w-full mx-auto sm:rounded-b-lg border-black py-8 bg-gradient-to-r from-[#D90429] to-[#EF233C] xs:rounded-none"
      id="about"
    >
      <div className="md:mx-4 md:flex md:flex-row items-center gap-4 xs:flex-col xs:px-2">
        <h1 className="font-unbounded font-extrabold md:text-[60px] uppercase xs:text-4xl">
          ABOUT
        </h1>
        <p className="font-barlow font-bold uppercase mt-2 md:text-[24px] max-w-[500px] xs:text-lg">
          What is this app?
        </p>
      </div>
      <div className="sm:m-4 xs:m-2">
        <p className="p-4 font-bold">
          AI Imager uses{" "}
          <a
            href="https://openai.com/"
            target="_blank"
            className="underline hover:uppercase hover:text-white hover:no-underline"
          >
            OpenAI
          </a>{" "}
          to generate images from any text prompt.{" "}
        </p>
        <p className="p-4 font-bold">This app was built using a MERN stack.</p>
        <p className="p-4 font-bold">
          Repository can be found{" "}
          <a
            href="https://github.com/franklinnnn/ai-image-app"
            target="_blank"
            className="underline hover:uppercase hover:text-white hover:no-underline"
          >
            here
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
