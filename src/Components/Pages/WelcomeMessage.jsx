import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="w-full lg:w-[65%] mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-green-600 mb-4">
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          / <span className="text-gray-700">Welcome Message from General Chairs</span>
        </nav>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Welcome Message from General Chairs
        </h2>

        {/* Message Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-lg lg:text-[19px] text-justify">
          <p className="text-gray-700 leading-7 mb-4">
            Dear <span className="font-semibold">Colleagues and Friends</span>,
          </p>
          <p className="text-gray-700 leading-7 mb-4 text-justify">
            We are pleased to invite you to the <span className="font-semibold">2025 International Conference on Advances in AI, Business Analytics, and Cloud Systems (AABC 2025)</span>. This prestigious event will take place from <span className="font-semibold">November 15th to 17th, 2025</span>, at the <span className="font-semibold">Grand Marina Bay Hotel</span> in the dynamic city of <span className="font-semibold">Singapore</span>.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            <span className="font-semibold">Singapore</span>, a global hub for technology and innovation, is home to a thriving ecosystem of <span className="font-semibold">AI research, business intelligence, and cloud computing</span>. With world-class infrastructure and a vibrant tech community, it serves as the perfect venue for <span className="font-semibold">AABC 2025</span>.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            The theme of <span className="font-semibold">AABC 2025</span>, <span className="font-semibold">"Harnessing AI, Business Analytics, and Cloud Systems for Digital Transformation"</span>, will explore cutting-edge advancements in <span className="font-semibold">artificial intelligence, data-driven decision-making, and cloud technologies</span> that are reshaping industries worldwide.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            We invite <span className="font-semibold">researchers, industry leaders, and professionals</span> from academia, corporations, and government agencies to submit their latest work and engage in insightful discussions on <span className="font-semibold">AI-powered analytics, cloud-driven business solutions, and transformative applications</span>.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Authors will have the opportunity to publish in special issues of leading journals, including <span className="font-semibold">IEEE Transactions on Artificial Intelligence, Journal of Business Analytics, and Cloud Computing Advances</span>. We also encourage submissions of extended versions of recently published conference papers with significant new contributions.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Your participation will be invaluable in making <span className="font-semibold">AABC 2025</span> a landmark event for the <span className="font-semibold">AI, business analytics, and cloud computing communities</span>. We extend our heartfelt gratitude to the <span className="font-semibold">organizing committee and sponsors</span> for their commitment to making this conference a success.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            We look forward to welcoming you to <span className="font-semibold">Singapore</span>, where we will experience not only a world-class conference but also the vibrant culture and innovation-driven spirit of the city.
          </p>

          {/* Signature */}
          <p className="font-semibold text-gray-900 mt-6">
            <span className="font-bold">Dr. Rajesh Kumar, Dr. Emily Chen, and Dr. Ahmed Al-Farsi</span>
          </p>
          <p className="font-semibold text-gray-700">General Co-Chairs, <span className="font-semibold">AABC 2025</span></p>
        </div>
        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-green-700 text-lg text-white rounded-sm hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
