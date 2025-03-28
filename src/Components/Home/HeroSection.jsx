import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#528F62] px-5 h-full">
      <div className="w-full xl:w-[85%] 2xl:w-[65%] mx-auto flex flex-col items-center py-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-white font-bold py-5 text-[clamp(2rem,4vw,2.8rem)] leading-tight">
            International Conference on Advances in AI, Business Analytics, and Cloud Systems (AABC) 2025
            </h1>
            <p className="text-white text-[clamp(1rem,2vw,1.25rem)] pb-5 leading-relaxed">
            October 24-26, 2025, Tokyo, Japan <br />
            Venue: Tokyo International Forum, Chiyoda City
            </p>
            <button 
             onClick={() => navigate("/welcome-message")}
            className="border border-white px-6 py-3 rounded-full text-white hover:bg-green-700 transition text-lg md:text-xl">
              Welcome Message
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/tok1.jpg"
              alt="Venue"
              className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover xl:max-w-xl 2xl:max-w-2xl"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10 w-full px-4">
          {[
            "/img/tok2.jpg",
            "/img/tok3.jpg",
            "/img/tok4.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hyatt Regency ${index + 1}`}
              className="w-full h-52 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}