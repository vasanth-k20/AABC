import React from 'react'

export default function AbtConference() {
    return (
        <div className='xl:w-[65%] items-center mx-auto px-4'>
            
             {/* Title */}
            <h2 className="text-3xl font-bold text-green-700 mt-10 mb-6 sm:items-center">About AABC</h2>

            {/* Content Section */}
            <div className="w-full bg-gray-100 mb-10">
                <div className="w-full  mx-auto relative flex flex-col xl:flex-row items-center justify-between bg-gray-100 p-4 sm:p-8">
                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[450px] mb-8 lg:mb-0">
                        <img
                            src="img/about.webp"
                            alt="Conference"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Left Content */}
                    <div className="w-full  bg-gray-100 p-4 sm:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Welcome to AABC 2025
                        </h3>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            The International Conference on Advances in AI, Business Analytics, and Cloud Systems (AABC) 2025 is a globally recognized platform that brings together leading researchers, industry professionals, and academic scholars to explore the rapid developments in artificial intelligence, data analytics, and cloud technologies. With the digital landscape evolving faster than ever, this conference aims to bridge the gap between theoretical research and real-world implementation.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            At the heart of AABC 2025 lies a focus on innovation and collaboration. The event will feature keynote speeches from renowned experts, technical paper presentations, panel discussions, and workshops covering key topics such as machine learning, generative AI, predictive analytics, cloud-native infrastructure, and intelligent business solutions. It provides a unique space for thought leaders to share breakthroughs and best practices across diverse sectors.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            Participants will gain valuable insights into how AI and analytics are driving smarter decision-making, while scalable cloud systems are enabling seamless digital transformation. Real-world case studies, demos, and interactive sessions will showcase how businesses and institutions are leveraging these technologies to solve complex challenges and unlock new opportunities.
                        </p>
                        <p className="text-base sm:text-[18px] mb-4 text-justify">
                            AABC 2025 is more than just a conference—it's a hub for forward-thinking dialogue, knowledge exchange, and strategic networking. Whether you're a researcher, data scientist, cloud architect, entrepreneur, or policy-maker, this event offers the opportunity to engage with the global tech community and contribute to shaping the future of intelligent, data-driven systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
