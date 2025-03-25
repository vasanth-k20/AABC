import React from "react";

const About = () => {
    return (
        <section className="py-17">
            <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">
                        ABOUT US
                    </h2>
                    <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* About Content */}
                    <div>
                        <p className=" text-lg lg:text-[19px] mb-4 text-justify">
                        The International Conference on Advances in AI, Business Analytics, and Cloud Systems (AABC) is a premier global event 
                        uniting researchers, industry experts, and academics to explore innovations in AI, Business Analytics, and Cloud Systems. 
                        Featuring keynote speeches, technical sessions, workshops, and industry panels, AABC addresses cutting-edge topics like 
                        machine learning, data analytics, cloud security, and AI ethics. The conference fosters collaboration, knowledge sharing, 
                        and practical solutions to real-world challenges. Whether you're a researcher, practitioner, or student, AABC offers a 
                        platform to network, learn, and contribute to the future of technology and business. Join us to shape the next wave of 
                        innovation! Discover the latest trends, gain actionable insights, and connect with a global community driving advancements 
                        in AI, analytics, and cloud technologies. Don’t miss this opportunity to be part of a transformative experience!
                        </p>
                       
                    </div>

                    {/* Image or Additional Content */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/img/tok5.jpg" // Replace with your image path
                            alt="About ICSET"
                            className="rounded-lg shadow-lg w-full h-[400px] max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;