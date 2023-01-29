import React, { useState } from "react";
import { Form, Card, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2
      className="mt-5 font-unbounded font-bold text-black
          text-xl uppercase"
    >
      {title}
    </h2>
  );
};

const Gallery = ({ allPosts, loading }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section
      className="w-full mx-auto border-b-8 border-black py-8 bg-gradient-to-br from-[#14CC60] to-[#27FB6B]"
      id="gallery"
    >
      <div className="mx-4 flex items-center gap-4">
        <h1 className="font-unbounded font-extrabold text-[60px] uppercase">
          gallery
        </h1>
        <p className="font-barlow font-bold uppercase mt-2 text-[24px] max-w-[500px]">
          browse generated images
        </p>
      </div>
      <div className="m-4">
        <Form
          labelName="search"
          type="text"
          name="search"
          placeholder="search posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="my-10 mx-4">
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <Loader />{" "}
          </div>
        ) : (
          <div>
            {searchText && (
              <h2 className="font-medium text-black text-xl mb-3">
                Results for{" "}
                <span className="font-unbounded text-black">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No search results found"
                />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
