"use client";
import { useState } from "react";

const MENU = [
  { name: "HOME" },
  { name: "FAQ" },
  { name: "ABOUT" },
  { name: "CONSULTANT" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="backdrop-blur-xs border-b border-white/40 min-h-24 w-full text-white flex justify-between items-center p-5 relative z-50">
      <img
        src="/assets/images/logo-with-bg.png"
        className="rounded-tl-lg rounded-br-lg w-12 md:w-16 h-auto"
        alt="Logo"
      />

      <div className="hidden md:flex gap-5 items-center text-md cursor-pointer">
        {MENU.map((data, idx) => (
          <div key={idx}>{data.name}</div>
        ))}
      </div>

      <div
        className="md:hidden flex flex-col justify-center items-end gap-1 w-8 h-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-8 h-[3px] bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <div
          className={`w-8 h-[3px] bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-8 h-[3px] bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start px-8 py-4 pb-5 gap-4 md:hidden z-50">
          {MENU.map((data, idx) => (
            <div
              key={idx}
              className="text-xl w-full border-b border-white py-2"
            >
              {data.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
