import React from "react";


import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

// function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
const NewFeatured = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <>
      <div className="bg-white px-5 py-10 lg:px-36 relative">
        <h1 className="font-bold text-2xl">New & Featured</h1>
      </div>
      <div className="px-5 py-10 lg:px-36 grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg relative">
          <img
            src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODI2fHxmYXNoaW9uJTIwbW9kZWwlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-[30rem] object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">
            <h2 className="text-xl font-semibold mb-2 text-white">
              New Spring Essentials
            </h2>
            <p className="text-gray-200">
              Take on anything spring weather throws your way in these
              functional styles. Shop now on Nike.com.
            </p>
          </div>
        </div>
        {/* Repeat this div block for each card */}
      </div>
    </>
  );
};

export default NewFeatured;
