import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Body from "./components/Body";
const App = () => {
  return (
    <main className="bg-slate-100 min-h-screen w-full">
      <div className="main ">
        <div className="gradient" />
      </div>
      <div className="app ">
        <Hero />
        <Body />
      </div>
    </main>
  );
};

export default App;
