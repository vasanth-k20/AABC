import React from 'react'

function ScopeConference() {
  return (

   <div className="bg-gray-100 py-10">
      <div className="w-full lg:w-[65%] mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Scope Of The Conference
        </h2>

        {/* Message Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-lg lg:text-[19px] text-justify">

         <div className="w-full  mx-auto relative flex flex-col xl:flex-row items-center justify-between p-2">
                   <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[450px] mb-8 lg:mb-0">
                        <img
                            src="img/scope.webp"
                            alt="Conference"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

           <div className="w-full p-4 sm:p-8 flex flex-col items-center text-center">
            <p className="text-black leading-7 mb-4 text-justify">
            The International Conference on Advances in AI, Business Analytics, and Cloud Systems (AABC) 2025 aims to bring together researchers, industry professionals, and academicians to explore cutting-edge innovations and applications in the intersecting domains of Artificial Intelligence (AI), Business Analytics, and Cloud Computing. The conference provides a platform to discuss advancements in AI models, intelligent decision-making systems, and emerging trends in data-driven analytics that empower organizations to optimize operations and create business value.
          </p>
          <p className="text-black leading-7 mb-4 text-justify">
            AABC 2025 will also focus on scalable, secure, and efficient cloud-based infrastructures that support modern AI and analytics solutions. Emphasis will be placed on topics such as machine learning deployment on cloud platforms, real-time analytics, edge-cloud synergy, and ethical AI. Through technical sessions, paper presentations, and expert panels, the conference encourages collaboration, knowledge sharing, and the development of integrated systems that drive innovation in today's data-centric world.
          </p>
          </div>
         </div>
                   
          
        </div>
      </div>
    </div>


  )
}

export default ScopeConference


//    <div className='xl:w-[65%] items-center mx-auto px-4'>
            
//              {/* Title */}
//             <h2 className="text-3xl font-bold text-green-700 mt-10 mb-6 sm:items-center">Scope of Conference</h2>

//             {/* Content Section */}
//             <div className="w-full bg-gray-100 mb-10">
//                 <div className="w-full  mx-auto relative flex flex-col xl:flex-row items-center justify-between bg-gray-100 p-4 sm:p-8">
//                     {/* Right Image */}
//                     <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[450px] mb-8 lg:mb-0">
//                         <img
//                             src="img/scope.webp"
//                             alt="Conference"
//                             className="w-full h-full object-cover rounded-lg shadow-lg"
//                         />
//                     </div>

//                     {/* Left Content */}
//                     <div className="w-full p-4 sm:p-8 flex flex-col items-center text-center">
//                         <h3 className="text-2xl sm:text-3xl font-bold mb-4">
//                             Welcome to AABC 2025
//                         </h3>
//                         <p className="text-base sm:text-[18px] mb-4 text-justify">
//                            
//                         </p>
//                         <p className="text-base sm:text-[18px] mb-4 text-justify">
//                            
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>