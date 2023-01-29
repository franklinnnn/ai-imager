import React, { useState, useEffect } from "react";
import { Card, Form, Loader, Create, Gallery, About } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2
      className="mt-5 font-bold text-[#6449ff]
        text-xl uppercase"
    >
      {title}
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://ai-image-t4d7.onrender.com/api/v1/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      <Create />
      <Gallery allPosts={allPosts} loading={loading} />
      <About />
    </section>
  );
};

export default Home;
