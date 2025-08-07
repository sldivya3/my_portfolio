import React, { useState, useEffect } from "react";
import s1 from '../assets/Images/s3.jpeg'
import s2 from '../assets/Images/s1.jpeg'
import s3 from '../assets/Images/s4.jpeg'

const images = [
  s1,s2,s3
];

const Projects = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

  
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Project
      </h2>

      {/* Image Auto-Slider */}
      <div className="relative max-w-7xl mx-auto mb-12">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto rounded-lg shadow-lg border border-gray-300 transition-all duration-500"
        />

        {/* Manual Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 bg-white bg-opacity-70 px-3 py-1 rounded-full hover:bg-opacity-100"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 bg-white bg-opacity-70 px-3 py-1 rounded-full hover:bg-opacity-100"
        >
          ›
        </button>
      </div>

      {/* Project Description */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Restaurant Table Reservation System
        </h3>

        <p className="text-gray-700 mb-4">
          This live project was developed during my internship at{" "}
          <span className="font-semibold">Vilora Technologies</span>. The system
          allows users to view available tables, make reservations, and manage
          bookings. It includes both customer-facing and admin-side
          functionalities.
        </p>

        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Frontend: React.js with responsive design</li>
          <li>Backend: Node.js + Express</li>
          <li>Database: MySQL</li>
          <li>Features: Authentication, real-time booking status, admin dashboard</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
