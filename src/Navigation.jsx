import React from "react";

export default function Navigation() {
  return (
    <div className="hidden md:block w-full fixed z-40">
      <ul className="flex flex-col w-full p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm text-white md:font-medium md:border-0 md:bg-black">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
