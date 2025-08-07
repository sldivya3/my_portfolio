import React from "react";
import myImg from "../assets/Images/myImg.png";

const HeroSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 h-[90vh] gap-5 bg-gradient-to-r from-white via-gray-300 to-gray-800">
        <div className="mx-10 text-center text-[40px]">
          <div className="my-40 animate-fade-in-up text-center space-y-4">
            <p className="text-[40px]">
              Hi, I'm Divya. I build things for the web.
            </p>
            <p className="mx-60 text-[30px] text-gray-600 overflow-hidden whitespace-nowrap border-r-2 border-gray-600 w-0 animate-typewriter">
              Design. Develop. Deliver.
            </p>

            <div className="space-x-5">
                <button className="text-xl border p-3 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-all duration-300">
              Contact
            </button>

             <button className="text-xl border p-3 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-all duration-300">
             <a href="/DIVYA S Updated.pdf" download>Download CV</a>
            </button>
            </div>
          </div>

         <div className="px-6 py-1 animate-fade-in-up bg-[#0d1117]">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-white tracking-wide">
    Tech Stack & Tools
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6 text-white">
    {[
      { icon: "fab fa-html5", color: "text-orange-500", name: "HTML" },
      { icon: "fab fa-css3-alt", color: "text-blue-400", name: "CSS" },
      { icon: "fab fa-js-square", color: "text-yellow-300", name: "JavaScript" },
      { icon: "fab fa-react", color: "text-cyan-400", name: "React" },
      { icon: "fas fa-code", color: "text-green-300", name: "Tailwind CSS" },
      { icon: "fa-brands fa-github", color: "text-white", name: "GitHub" },
      { icon: "fa-brands fa-microsoft", color: "text-purple-300", name: "Microsoft Office" },
      { icon: "fa-brands fa-linux", color: "text-yellow-600", name: "Linux" },
      { icon: "fa-brands fa-windows", color: "text-blue-700", name: "Windows" },
    ].map((tool, index) => (
      <div
        key={index}
        className="bg-[#161b22] hover:bg-[#21262d] rounded-2xl p-6 flex flex-col items-center justify-center transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        <i className={`${tool.icon} text-4xl mb-3 ${tool.color}`}></i>
        <p className="text-sm font-medium">{tool.name}</p>
      </div>
    ))}
  </div>
</div>

        </div>

        <div className="mx-20 items-center">
          <img
            src={myImg}
            className=" opacity-0 animate-fade-in flex justify-center h-[90vh] w-[85vh]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
