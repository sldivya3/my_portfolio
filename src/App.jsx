import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePageComponents/HomePage";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
             
              
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
