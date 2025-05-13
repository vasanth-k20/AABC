import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-100" id="contact">
      <div className=" py-17 px-6 md:px-6 mx-auto w-full xl:w-[90%] 2xl:w-[65%] sm:px-6 lg:px-8">
        {/* Heading with Underline */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            CONTACT
          </h2>
          <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
        </div>

        {/* Card Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Section */}
          <div className="border-t-4 border-b-4 border-green-500 p-6 shadow-md rounded-md bg-white">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-green-700 flex items-center">
                <Globe className="mr-2 text-green-500" /> About International Forum
              </h3>
              <p className="text-gray-700 text-lg lg:text-[19px] text-justify mb-6">
              The Tokyo International Forum is a modern conference and event center in Chiyoda City, Tokyo. It features a stunning glass atrium and sleek steel framework. It is open for exhibitions, concerts, and business events.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <MapPin className="mr-2 text-green-500" /> Location
              </h3>
              <p className="text-gray-700 text-lg lg:text-[19px]">Chiyoda City, Tokyo, Japan</p>
            </div>

            {/* Google Map */}
            {/* <div className="mt-6">
              <iframe
                className="w-full h-48 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.488715259873!2d139.7635573152587!3d35.68123618019425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20International%20Forum!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp"
                loading="lazy"
                title="Tokyo International Forum Map"
              ></iframe>
            </div> */}
          </div>

          {/* Right Section */}
          <div className="border-t-4 border-b-4 border-green-500 p-6 shadow-md rounded-md bg-white">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <Globe className="mr-2 text-green-500" /> Transportation
              </h3>
              <p className="text-gray-700 text-lg lg:text-[19px]">
              Chiyoda has an efficient public transport system. Learn more via
                <a href="#"> this link</a>.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <Mail className="mr-2 text-green-500" /> Inquiry Email
              </h3>
              <p className="text-gray-700 text-lg lg:text-[19px]">x1y2z3@outlook.com</p>
            </div>
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <Phone className="mr-2 text-green-500" /> Call
              </h3>
              <p className="text-gray-700 text-lg">+6 0000012121</p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}