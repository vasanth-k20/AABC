import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KeyDates = () => {
  const dates = [
    { date: "OCTOBER 28, 2024", description: "Paper Submission Deadline – Final Extension" },
    { date: "JANUARY 20, 2025", description: "Author Acceptance Notification Description" },
    { date: "FEBRUARY 10, 2025", description: "Final Manuscript Submission Deadline" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 text-black py-17">
      <div className="text-center w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            KEY DATES
          </h2>
          <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
        </div>

      {/* Slider Container */}
      <div className="w-full xl:w-[65%] mx-auto px-4">
        <Slider {...settings}>
          {dates.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white text-black p-6 rounded-2xl shadow-md text-center h-full">
                <h3 className="text-xl font-semibold text-green-700">{item.date}</h3>
                <p className="mt-2 text-[17.2px]">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>  
    </div>
  );
};

export default KeyDates;