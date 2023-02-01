import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { preview } from "../assets";
import { getRandomPrompt, downloadImage } from "../utils";
import { Form, Loader } from "./index";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const ref = useRef(null);

  const [generatingImg, setGeneratingImg] = useState(false);
  const [options, setOptions] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://ai-image-t4d7.onrender.com/api/v1/ai",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        toast(err);
      } finally {
        setGeneratingImg(false);
        setOptions(true);
      }
    } else {
      toast("Please provide proper prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://ai-image-t4d7.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
      } catch (err) {
        toast(err);
      } finally {
        setLoading(false);
        window.location.reload(false);
        document
          .getElementById("gallery")
          .scrollIntoView({ behavior: "smooth" });
        toast("Image posted successfully");
      }
    } else {
      toast("Please generate an image with proper details");
    }
  };

  return (
    <section className="w-full mx-auto border-b-8 border-black md:py-8 bg-gradient-to-br from-[#FCBA04] to-[#D36135] xs:py-6">
      <div className="md:mx-4 md:flex md:flex-row items-center gap-4 xs:flex-col xs:px-2 ">
        <h1 className="font-unbounded font-extrabold md:text-[60px] uppercase xs:text-4xl">
          CREATE
        </h1>
        <p className="font-barlow font-bold uppercase mt-2 md:text-[24px] max-w-[500px] xs:text-lg">
          Generate image from text
        </p>
      </div>

      <form className="m-4 w-full mx-auto">
        <div className="flex flex-col gap-5 mx-4">
          <Form
            labelName="NAME"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />

          <Form
            labelName="PROMPT"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative self-center bg-blue-50 rounded-md border-4 border-r-8 border-b-8 border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 md:w-80 md:h-80 p-2 flex justify-center items-center hover:border-4 hover:border-t-8 hover:border-l-8 hover:-translate-y-2 ease-in-out duration-150 xs:w-60 xs:h-60">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain rounded-sm"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="font-unbounded font-bold text-lg bg-violet-500 md:w-80 py-4 rounded-md border-2 border-r-4 border-b-4 border-black hover:bg-green-500 ease-in-out duration-300 hover:-translate-y-1 xs:w-60"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        {options && (
          <div className="mt-8 flex flex-col justify-center items-center pb-6">
            <p className="font-barlow font-bold md:text-lg mt-2 xs:text-base px-6">
              Image is ready. You can save your image or post it to the gallery.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <button
                onClick={() => downloadImage(form.prompt, form.photo)}
                className="font-unbounded font-bold bg-purple-500 md:w-36 xs:w-28 py-4 rounded-md border-2 border-r-4 border-b-4 border-black hover:bg-orange-500 ease-in-out duration-300 hover:-translate-y-1"
              >
                Save
              </button>
              <button
                onClick={handleSubmit}
                className="font-unbounded font-bold bg-purple-500 md:w-36 xs:w-28 py-4 rounded-md border-2 border-r-4 border-b-4 border-black hover:bg-orange-500 ease-in-out duration-300 hover:-translate-y-1"
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </div>
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </form>
    </section>
  );
};

export default CreatePost;
