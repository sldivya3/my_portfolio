import React from "react";
import p1 from '../assets/Images/p1.png'
import p2 from '../assets/Images/p2.png'

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300 to-gray-800 px-6 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-500">
        My Resume
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full">
        <img
          src={p1}
          alt="Resume Left Side"
          className="w-full border-4 border-gray-600 rounded-xl shadow-2xl"
        />
        <img
          src={p2}
          alt="Resume Right Side"
          className="w-full border-4 border-gray-600 rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Resume;
