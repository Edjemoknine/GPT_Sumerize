import React from "react";
import logo from "../assets/Psychology Logo good.png";

const Hero = () => {
  return (
    <header className="w-full container mx-auto flex justify-center items-center flex-col">
      <nav className="w-full  flex justify-between items-center mt-4 mb-10">
        <img
          src={logo}
          alt=""
          className="w-[50px]  rounded-full object-cover"
        />
        <button
          className="bg-black text-xs rounded-2xl p-2 text-white"
          onClick={() => window.open("https://github.com/Edjemoknine")}
        >
          GitHub
        </button>
      </nav>
      <h1 className=" text-5xl text-center mb-6 font-extrabold">
        Summarisz Articles with <br className="max-md:hidden" />{" "}
        <span className="bg-gradient-to-l bg-clip-text text-transparent from-cyan-500 to-emerald-300">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="desc text-center">
        Choose your words wisely in your reports, an open-source article
        summarizer that make your lenghty articles in clear and efficeint words
      </h2>
    </header>
  );
};

export default Hero;
