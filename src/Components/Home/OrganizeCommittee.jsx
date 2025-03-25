import React from "react";
import { useNavigate } from "react-router-dom";

const committeeMembers = [
  {
    name: "Takaaki Kajita",
    role: "General Co-Chair",
    university: "Tokyo Institute of Technology (Tokyo Tech)",
    country: "Japan",
    image: "img/comm8.jpg", 
  },
  {
    name: "Yoshinori Ohsumi",
    role: "General Co-Chair",
    university: "The University of Tokyo (UTokyo)",
    country: "Japan",
    image: "img/comm8.jpg", 
  },
  {
    name: "Hiroshi Ishikawa ",
    role: "General Co-Chair",
    university: "Waseda University",
    country: "Japan",
    image: "img/comm8.jpg", 
  },
];

const OrganizingCommittee = () => {
  const navigate = useNavigate();

  return (
    <section className="py-17">
      <div className="w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            ORGANIZING COMMITTEE
          </h2>
          <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-green-700">
                  {member.name}
                </h3>
                <p className="">{member.role}</p>
                <p className="text-gray-700">{member.university}</p>
                <p className="text-gray-700">{member.country}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/full-committee")}
            className="text-green-600 hover:underline text-lg font-medium"
          >
            View the full list of Organizing Committee
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;