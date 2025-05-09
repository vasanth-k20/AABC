import {FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#528F62]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="/" className="flex justify-center text-white">
          <div className="flex items-center gap-4">
          <Link to="/">
          <img src="img/logo.png" alt="ISICAS 2025" className="h-15" />
          </Link>
        </div>
          </a>
          <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
            <li className="sm:my-0 my-2"><a href="/full-committee" className="text-white hover:text-gray-300">Committee</a></li>
            <li className="sm:my-0 my-2"><a href="/paper-submit" className="text-white hover:text-gray-300">Paper Submission</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-300">Support</a></li>
          </ul>
          <div className="flex space-x-4 sm:justify-center">
           <ul>
            <li className="text-lg text-white hover:text-gray-300"><strong>Contact :</strong> x1y2z3@outlook.com</li>
           </ul>
           {/* <div>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <BsTwitterX className="w-5 h-5 text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-900 flex justify-center items-center hover:bg-green-700">
              <FaYoutube className="w-5 h-5 text-white" />
            </a>
           </div> */}
          </div>
        </div>
        <div className="py-7 border-t border-green-700">
          <div className="flex items-center justify-center">
            <span className="text-white">
              © <a href="#" className="hover:text-green-300">AABC</a> 2025, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;