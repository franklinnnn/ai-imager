import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Form, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (form.prompt && form.photo) {
  //     setLoading(true);
  //     try {
  //       const response = await fetch("http://localhost:8080/api/v1/post", {
  //         method: "POST",
  //         header: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ ...form }),
  //       });
  //       await response.json();
  //       alert("success");
  //       navigate("/");
  //     } catch (error) {
  //       alert(error);
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     alert("Enter prompt and generate image");
  //   }
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGenerateImg(true);
        const response = await fetch("http://localhost:8080/api/v1/ai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpg;base64, ${data.photo}` });
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        setGenerateImg(false);
      }
    } else {
      alert("Enter prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert("Success");
        navigate("/");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text=[#000] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500]">
          Generate images with AI boi
        </p>
      </div>
      <form className="mp-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Form
            labalName="your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <Form
            labalName="prompt"
            type="text"
            name="prompt"
            placeholder="a painting of a fox in the style of Starry Night"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-bue-500 focus:border-blue-500 w-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generateImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 font-medium rounded-fm text-sm w-full sm:w-auto px-5 py-2"
          >
            {generateImg ? "generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text=[#666e75] text-[14px]">
            Share image with others
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#4648ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2 text-center"
          >
            {loading ? "sharing.. " : "share"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
