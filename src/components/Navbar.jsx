import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-gradient-to-r from-white via-gray-300 to-gray-800 shadow-md">
      <div className="flex justify-between items-center h-20 px-6 md:px-20">
        <div className="text-3xl md:text-[45px] font-bold text-gray-800">
          <p>Divya S</p>
        </div>
        <div className="md:hidden text-3xl text-gray-500" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

       
        <div className="hidden md:flex space-x-10 text-xl lg:text-3xl md:text-xl font-semibold text-gray-600 items-center">
          <Link
            to="/"
            className="relative hover:text-gray-900 transition-colors duration-300 group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative hover:text-gray-900 transition-colors duration-300 group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/resume"
            className="relative hover:text-gray-900 transition-colors duration-300 group"
          >
            Resume
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
            <Link
            to="/project"
            className="relative hover:text-gray-900 transition-colors duration-300 group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="relative hover:text-gray-900 transition-colors duration-300 group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

     
        <div className="hidden md:flex space-x-6 text-2xl text-gray-200">
          <a href="https://github.com/sldivya3" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/divya-sl/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white px-6 pb-4 text-lg font-medium text-gray-800 space-y-4">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/resume" onClick={toggleMenu}>Resume</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>

          <div className="flex space-x-6 text-2xl pt-2">
            <a href="https://github.com/sldivya3" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/divya-sl/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
