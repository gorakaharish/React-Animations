import React from "react";
import Navbar from "./components/Navbar";
import LandinPage from "./components/LandinPage";
import Marquee from "./components/Marquee";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandinPage />
      <Marquee />
      <About />
    </div>
  );
};

export default App;
