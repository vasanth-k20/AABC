import React from "react";
import { useNavigate } from "react-router-dom";

const committeeMembers = [
  {
    name: "Name",
    role: "General Co-Chair",
    university: "Collage",
    country: "Location",
    image: "img/user.png",  
  },
  {
    name: "Name",
    role: "General Co-Chair",
    university: "Collage",
    country: "Location",
    image: "img/user.png", 
  },
  {
    name: "Name",
    role: "General Co-Chair",
    university: "Collage",
    country: "Location",
    image: "img/user.png",  
  },
];

const committeeList = [
  {
    title: "General Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
  {
    title: "Technical Program Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
  {
    title: "Financial Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
  {
    title: "Publicity Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
  {
    title: "Local Arrangement Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
  {
    title: "DEI Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
  {
    title: "Sponsorship Co-Chairs",
    members: [
      "Name, Collage, Location",
      "Name, Collage, Location",
    ],
  },
];

const FullCommittee = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="w-full xl:w-[65%] mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">Organizing Committee</h2>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center transition-transform transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-30 h-30 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {member.name}
                </h3>
                <p className="mb-1">{member.role}</p>
                <div className="border-t-2 border-green-700 w-13 mb-4"></div>
                <p className="text-green-700 mb-2">{member.university}</p>
                <p className="text-gray-700">{member.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Committee List Section */}
        <div className="bg-white rounded-lg shadow-lg mt-10 p-6">
          {committeeList.map((section, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2 mt-5">{section.title}</h3>
              <ul className="text-gray-700 text-lg">
                {section.members.map((member, idx) => (
                  <li key={idx} className="mb-5">{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullCommittee;
