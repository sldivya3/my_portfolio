import React from "react";
import myImg from "../assets/Images/myImg2.png";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-800 min-h-screen flex items-center justify-center px-6 py-">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl w-full max-w-9xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-500 hover:scale-[1.01]">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={myImg}
            alt="My Profile"
            className="rounded-2xl shadow-xl w-[300px] h-[400px] object-cover border-4 border-white/30 hover:shadow-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="w-full  text-black">
          <h2 className="text-5xl font-extrabold text-center md:text-left mb-4 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-500">
            ABOUT ME
          </h2>
          <p className="text-center md:text-left text-gray-900 font-medium mb-2 text-xl">
             MCA Graduate | React Enthusiast
          </p>
          <p className="text-base md:text-lg mb-6 text-justify text-gray-800 leading-relaxed">
            I am passionate about learning, growing, and contributing through a mix of
hard work and creative thinking. I believe consistent effort and a positive
mindset lead to meaningful achievements. I seek an opportunity to
showcase my potential and add genuine value to the organization while
building a strong professional foundation
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <InfoItem icon="fa-briefcase" label="Role:" value="Software Development" />
              <InfoItem icon="fa-phone" label="Phone:" value="+91 9092215396" />
              <InfoItem icon="fa-location-dot" label="Location:" value="Pondicherry" />
            </div>

            <div className="space-y-4">
              <InfoItem icon="fa-graduation-cap" label="Degree:" value="M.C.A - Master of Computer Application" />
              <InfoItem icon="fa-envelope" label="Email:" value="sldivya604@gmail.com" />
              <InfoItem icon="fa-cake-candles" label="DOB:" value="03-12-2002" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 text-base md:text-lg text-gray-900">
    <i className={`fa-solid ${icon} text-gray-700 mt-1 animate-pulse`}></i>
    <p>
      <span className="font-semibold text-gray-900">{label}</span> {value}
    </p>
  </div>
);

export default About;
