import React from 'react'

export default function ConferenceTracks() {
  return (
    <div  className='xl:w-[65%] items-center mx-auto px-4'>

       {/* Title */}
            <h2 className="text-3xl font-bold text-green-700 mt-10 mb-6 sm:items-center">Conference Tracks</h2>


<div className="mb-12 px-4">
  <div className="max-w-7xl mx-auto text-center">
    {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Conference Tracks</h2> */}
    <p className="text-black mb-12 text-xl">Explore diverse and innovative research areas at the intersection of science, engineering, and technology.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
        title: "AI for Smart Materials & Nanotech",
        desc: "Harnessing AI and data analytics in the design, simulation, and optimization of advanced materials and nanostructures for multidisciplinary applications."
        },
        {
        title: "AI & Machine Learning Innovations",
        desc: "Breakthroughs in deep learning, generative AI, computer vision, and intelligent systems transforming industries, healthcare, and digital ecosystems."
        },
        {
        title: "Analytics in Renewable Energy Systems",
        desc: "Data-driven insights and AI models for optimizing solar, wind, and green technologies to improve sustainability and energy efficiency."
        },
        {
        title: "Autonomous Systems & Intelligent Control",
        desc: "Advances in robotics, AI-powered automation, IoT integration, and real-time control systems for smart manufacturing and services."
        },
        {
        title: "Cloud Computing & Secure Data Infrastructure",
        desc: "Next-gen solutions in cloud architecture, data security, 5G/6G networks, and scalable analytics platforms for modern enterprises."
        },
        {
        title: "AI in Biomedical & Health Informatics",
        desc: "AI-enabled diagnostics, predictive healthcare analytics, and cloud-based health informatics driving innovation in medical technologies."
        },
        {
        title: "Smart Infrastructure & AI in Civil Systems",
        desc: "Leveraging AI, digital twins, and analytics for intelligent transportation, urban planning, structural health monitoring, and sustainability."
        },
        {
        title: "AI for Environmental & Climate Solutions",
        desc: "AI-driven models and analytics for pollution monitoring, climate forecasting, ecological modeling, and sustainable environment management."
        }
      ].map((track, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-left">
          <h3 className="text-xl font-semibold text-green-700 mb-2">{track.title}</h3>
          <p className="text-gray-700 text-[17px]">{track.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
  )
}
