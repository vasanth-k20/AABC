import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${isScrolled ? "bg-[#3A6A4A] shadow-md" : "bg-[#528F62]"} 
        text-white py-5 flex justify-center items-center sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center max-w-[1300px] w-full mx-auto px-6 text-lg lg:text-[18px]">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="img/logo.png" alt="ISICAS 2025" className="h-15" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {/* Home */}
          <Link to="/" className="hover:text-gray-300 transition text-lg">
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("About")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("About")}
              className="flex items-center hover:text-gray-300 transition text-lg"
            >
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === "About" && (
              <ul
                className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50"
                onMouseEnter={() => handleMouseEnter("About")}
                onMouseLeave={handleMouseLeave}
              >
                <li className="hover:bg-gray-200">
                  <Link to="/welcome-message" className="block px-4 py-2 w-full">
                    Welcome Message
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link to="/full-committee" className="block px-4 py-2 w-full">
                    Organizing Committee
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Authors Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("Authors")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("Authors")}
              className="flex items-center hover:text-gray-300 transition text-lg"
            >
              Authors <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === "Authors" && (
              <ul
                className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50"
                onMouseEnter={() => handleMouseEnter("Authors")}
                onMouseLeave={handleMouseLeave}
              >
                <li className="hover:bg-gray-200">
                  <Link to="/registration" className="block px-4 py-2 w-full">
                    Registration Details
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link to="/paper-submit" className="block px-4 py-2 w-full">
                    Paper Submission
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <Link to="/contact" className="hover:text-gray-300 transition text-lg">
            Contact
          </Link>

          {/* Registration Button */}
          <Link
            to="/paper-submit"
            className="border border-white px-6 py-2 rounded-full hover:bg-green-700 transition text-lg"
          >
            Registration
          </Link>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-[50%] w-64 bg-green-800 text-white flex flex-col items-center justify-center transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <ul className="flex flex-col space-y-6 text-lg">
            <Link
              to="/"
              className="hover:text-gray-300 transition text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("About")}
                className="flex items-center hover:text-gray-300 transition"
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "About" && (
                <ul className="absolute left-[-50%] mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                  <li className="hover:bg-gray-200">
                    <Link
                      to="/welcome-message"
                      className="block px-4 py-2 w-full"
                      onClick={() => {
                        setDropdownOpen(null);
                        setMenuOpen(false);
                      }}
                    >
                      Welcome Message
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200">
                    <Link
                      to="/full-committee"
                      className="block px-4 py-2 w-full"
                      onClick={() => {
                        setDropdownOpen(null);
                        setMenuOpen(false);
                      }}
                    >
                      Organizing Committee
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Authors Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("Authors")}
                className="flex items-center hover:text-gray-300 transition"
              >
                Authors <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "Authors" && (
                <ul className="absolute left-[-50%] mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                  <li className="hover:bg-gray-200">
                    <Link
                      to="/registration"
                      className="block px-4 py-2 w-full"
                      onClick={() => {
                        setDropdownOpen(null);
                        setMenuOpen(false);
                      }}
                    >
                      Registration Details
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200">
                    <Link
                      to="/paper-submit"
                      className="block px-4 py-2 w-full"
                      onClick={() => {
                        setDropdownOpen(null);
                        setMenuOpen(false);
                      }}
                    >
                      Paper Submission
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <Link
              to="/contact"
              className="hover:text-gray-300 transition text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </ul>

          <Link
            to="/paper-submit"
            className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-green-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
}