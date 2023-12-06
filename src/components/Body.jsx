import React from "react";
import { useState } from "react";
import { useLazyGetArticleQuery } from "../container/ArticleApi";
import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";

const Body = () => {
  const [getArticle, { isFetching, error }] = useLazyGetArticleQuery();
  const [change, setChange] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copy, setCopy] = useState("");

  useEffect(() => {
    const articleFLStorage = JSON.parse(localStorage.getItem("articles"));
    if (articleFLStorage) {
      setAllArticles(articleFLStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getArticle({ articleUrl: change.url });
    if (data?.summary) {
      const newArticle = { ...change, summary: data.summary };

      setChange(newArticle);
      setAllArticles([newArticle, ...allArticles]);
      localStorage.setItem(
        "articles",
        JSON.stringify([newArticle, ...allArticles])
      );
    }
  };
  const handleCopy = (copyUrl) => {
    setCopy(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <section className="container  mx-auto mt-16 max-w-xl w-full">
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative peer flex justify-center items-center"
        >
          <input
            className="w-full border-none outline-none shadow-lg rounded-md p-3"
            type="url"
            value={change.url}
            placeholder="Entre a URL "
            onChange={(e) => setChange({ ...change, url: e.target.value })}
            required
          />
          <button
            className="absolute right-0 peer-focus:border-gray-500: px-2 text-gray-400 font-bold"
            type="submit"
          >
            {"<-"}
          </button>
        </form>
        <div className="history flex flex-col overflow-y-auto max-h-60">
          {allArticles.map((article, index) => (
            <div
              className="bg-slate-50 flex items-center gap-3 shadow-2xl rounded-md p-3"
              onClick={() => setChange(article)}
              key={index}
            >
              <div onClick={() => handleCopy(article.url)} className="copy">
                <img src="copyIcons" alt="" />
                {copy === article.url ? <b>X</b> : <b>G</b>}
              </div>
              <p className=" flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {article.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* result */}
      <div className="summary my-10 max-w-full justify-center flex items-center ">
        {isFetching ? (
          <ScaleLoader color="#36d7b7" />
        ) : error ? (
          <div className="font-inter font-bold text-black text-center">
            Well, That was not supposed to happen ...!
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </div>
        ) : (
          change.summary && (
            <div className=" flex flex-col gap-3">
              <h1 className="font-satoshi text-gray-600 font-bold text-xl">
                Article{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Summary
                </span>
              </h1>
              <div className="text-gray-600">{change?.summary}</div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Body;
