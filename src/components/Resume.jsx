import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300 to-gray-800 flex flex-col items-center justify-center px-4 py-">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-500">
        My Resume
      </h2>
      <iframe
        src="/DIVYA S Updated.pdf"
        title="Resume PDF"
        className="w-full max-w-7xl h-[90vh] border-4 border-gray-600 rounded-xl shadow-2xl"
      ></iframe>
    </div>
  );
};

export default Resume;
