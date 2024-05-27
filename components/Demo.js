"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Demo = () => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articleLink, setArticleLink] = useState("");

  const handleChange = (event) => {
    setArticleLink(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setShowResult(false);

    try {
      const response = await axios.post("http://127.0.0.1:5000/detect", {
        article: articleLink,
      });

      const data = await response.data;

      setTimeout(() => {
        setLoading(false);
        setShowResult(true);
      }, 5000);

      setResult(data.result);
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div>
        {/* Search */}
        <div className="flex flex-col w-full gap-2">
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Image
              src="/link.svg"
              alt="link-icon"
              height={10}
              width={10}
              className="absolute left-0 my-2 ml-3 w-5"
            />

            <input
              onChange={handleChange}
              type="text"
              placeholder="Paste the article"
              required
              className="url_input peer"
            />
            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
            >
              <p>↵</p>
            </button>
          </form>
        </div>

        {/* Display Result */}
        <div className="my-10 max-w-full flex flex-col justify-center items-center">
          {loading && (
            <Image
              src="/loader.svg"
              alt="loader"
              height={10}
              width={10}
              className="w-20 h-20 object-contain"
            />
          )}

          {showResult && (
            <div>
              <h1 className="mt-4 font-bold text-gray-600 text-3xl">
                Result: <span className="blue_gradient">{result}</span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
