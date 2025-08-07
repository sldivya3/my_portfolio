import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container max-w-full bg-gradient-to-r from-white via-gray-300 to-gray-800">
      <div className="flex justify-between h-20 px-20 items-center cursor-pointer">
        <div className="text-[45px] font-bold">
          <p>Divya S</p>
        </div>

        <div className="flex space-x-20 text-3xl font-semibold text-gray-600">
        <Link to="/" className="relative text-gray-700 hover:text-gray-800 transition-colors duration-300 group">
  Home
  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link to="/about" className="relative text-gray-700 hover:text-gray-800 transition-colors duration-300 group">
  About
  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
</Link>

        <Link to='/resume'>  <p className="relative text-gray-700 hover:text-gray-800  transition-colors duration-300 group">
            Resume
             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800  transition-all duration-300 group-hover:w-full"></span>
            </p></Link>
          <Link to='/contact'>
          <p className="relative text-gray-700 hover:text-gray-800  transition-colors duration-300 group">
            Contact
             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800  transition-all duration-300 group-hover:w-full"></span>
          </p>

          </Link>
        </div>

        <div className="space-x-10 text-4xl text-gray-200">
      
          
            <a href="https://github.com/sldivya3"><i class="fa-brands fa-github"></i></a>
        
          <a href="https://www.linkedin.com/in/divya-sl/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
