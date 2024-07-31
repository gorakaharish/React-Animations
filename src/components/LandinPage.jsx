import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandinPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] rounded-md w-[8vw] h-[5vw] relative top-[1.8vw]  bg-red-500"></div>
                )}
                <h1 className=" pt-[1vw]  text-[6.5vw] uppercase leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-20 py-5">
        {[
          "For Public and Private Companies",
          "From The First Pitch to IPO",
        ].map((it, ind) => (
          <p
            key={ind}
            className="text-md font-light tracking-tight leading-none"
          >
            {it}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-400 text-md font-light  rounded-full uppercase">
            Start The Project
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full border-[2px] border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandinPage;
