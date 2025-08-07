import React from "react";
import myImg from "../assets/Images/myImg.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen bg-gradient-to-r from-white via-gray-300 to-gray-800 px-4 sm:px-10 lg:px-20 py-10">
        
        
        <div className="text-center lg:text-left space-y-6">
          <div className="animate-fade-in-up space-y-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
  Hi, I'm Divya — a passionate Software Developer.
</p>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 overflow-hidden whitespace-nowrap border-r-2 border-gray-600 w-0 animate-typewriter mx-auto lg:mx-0">
              Design. Develop. Deliver
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button className="text-lg sm:text-xl border px-5 py-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-all duration-300">
                Contact
              </button>

              <a
                href="/Divya.pdf"
                download
                className="text-lg sm:text-xl border px-5 py-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-all duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

         
          <div className="animate-fade-in-up mt-10 bg-[#0d1117] rounded-2xl p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-8 text-center">
              Tech Stack & Tools
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-white">
              {[
                { icon: "fab fa-html5", color: "text-orange-500", name: "HTML" },
                { icon: "fab fa-css3-alt", color: "text-blue-400", name: "CSS" },
                { icon: "fab fa-js-square", color: "text-yellow-300", name: "JavaScript" },
                { icon: "fab fa-react", color: "text-cyan-400", name: "React" },
                { icon: "fas fa-code", color: "text-green-300", name: "Tailwind CSS" },
                { icon: "fab fa-github", color: "text-white", name: "GitHub" },
                { icon: "fab fa-microsoft", color: "text-purple-300", name: "Microsoft Office" },
                { icon: "fab fa-linux", color: "text-yellow-600", name: "Linux" },
                { icon: "fab fa-windows", color: "text-blue-700", name: "Windows" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="bg-[#161b22] hover:bg-[#21262d] rounded-xl p-4 flex flex-col items-center justify-center transition duration-300 shadow-md hover:shadow-lg"
                >
                  <i className={`${tool.icon} text-3xl sm:text-4xl mb-2 ${tool.color}`}></i>
                  <p className="text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="mt-10 lg:mt-0 flex justify-center items-center">
          <img
            src={myImg}
            alt="Divya"
            className="opacity-0 animate-fade-in h-auto w-[350px] sm:w-[300px] md:w-[400px] lg:w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
