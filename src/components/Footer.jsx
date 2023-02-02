import React from "react";
import Email from "../images/Email.png";
import LinkedIn from "../images/LinkedIn.png";
import GitHub from "../images/GitHub.png";

export default function Footer() {
  return (
    <footer className="justify-center bg-white">
      <ul className="flex flex-row flex-wrap justify-center py-8">
        <li>
          <a href="#about" className="px-4">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="px-4">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" className="px-4">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="px-4">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex flex-row flex-wrap bottom-5 w-full justify-center py-8">
        <li className="w-7 h-7 mx-2">
          <a href="https://www.linkedin.com/in/olivia-conley/" target="_blank">
            <img className="linkedin" src={LinkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li className="w-7 h-7 mx-2">
          <a href="https://github.com/oliviaconley" target="_blank">
            <img className="github" src={GitHub} alt="GitHub" />
          </a>
        </li>
        <li className="w-10 h-7 mx-2">
          <a href="/contact">
            <img className="email" src={Email} alt="Email" />
          </a>
        </li>
      </ul>
      <p className="text-center text-xs">
        © 2023 Olivia Conley, All Rights Reserved.
      </p>
    </footer>
  );
}
