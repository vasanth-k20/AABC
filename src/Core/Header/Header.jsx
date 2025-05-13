import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = (menu) => {
    if (menu === "About") {
      return [
        "/about-conference",
        "/scope-conference",
        "/full-committee",
        "/editorial-board",
      ].includes(location.pathname);
    } else if (menu === "Authors") {
      return [
        "/conference-tracks",
        "/registration",
        "/paper-submit",
      ].includes(location.pathname);
    }
    return false;
  };

  return (
    <nav
      className={`${isScrolled ? "bg-[#3A6A4A] shadow-md" : "bg-[#528F62]"
        } text-white py-5 flex justify-center items-center sticky top-0 z-50 transition-colors duration-300`}
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
          <Link
            to="/"
            className={`hover:text-gray-300 transition text-lg ${isActive("/") ? "font-semibold underline text-[#2cff00]" : ""
              }`}
          >
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
              className={`flex items-center hover:text-gray-300 transition text-lg ${isDropdownActive("About") ? "font-semibold underline text-[#2cff00]" : ""
                }`}
            >
              About <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === "About" && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                <li className={`hover:bg-gray-200 ${isActive("/about-conference") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/about-conference" className="block px-4 py-2 w-full">
                    About the Conference
                  </Link>
                </li>
                <li className={`hover:bg-gray-200 ${isActive("/scope-conference") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/scope-conference" className="block px-4 py-2 w-full">
                    Scope Of The Conference
                  </Link>
                </li>
                <li className={`hover:bg-gray-200 ${isActive("/full-committee") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/full-committee" className="block px-4 py-2 w-full">
                    Organizing Committee
                  </Link>
                </li>
                <li className={`hover:bg-gray-200 ${isActive("/editorial-board") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/editorial-board" className="block px-4 py-2 w-full">
                    Editorial Board
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
              className={`flex items-center hover:text-gray-300 transition text-lg ${isDropdownActive("Authors") ? "font-semibold underline text-[#2cff00]" : ""
                }`}
            >
              Authors <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === "Authors" && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                <li className={`hover:bg-gray-200 ${isActive("/conference-tracks") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/conference-tracks" className="block px-4 py-2 w-full">
                    Conference Tracks
                  </Link>
                </li>
                <li className={`hover:bg-gray-200 ${isActive("/registration") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/registration" className="block px-4 py-2 w-full">
                    Registration Details
                  </Link>
                </li>
                <li className={`hover:bg-gray-200 ${isActive("/paper-submit") ? "bg-gray-100 font-semibold" : ""}`}>
                  <Link to="/paper-submit" className="block px-4 py-2 w-full">
                    Paper Submission
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className={`hover:text-gray-300 transition text-lg ${isActive("/contact") ? "font-semibold underline text-[#2cff00]" : ""
              }`}
          >
            Contact
          </Link>

          {/* Registration Button */}
          <Link
            to="/paper-submit"
            className={`border border-white px-6 py-2 rounded-full hover:bg-green-700 transition text-lg ${isActive("/paper-submit") ? "bg-green-700" : ""
              }`}
          >
            Registration
          </Link>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-[50%] w-64 bg-green-800 text-white flex flex-col items-center justify-center transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"
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
              className={`hover:text-gray-300 transition text-lg ${isActive("/") ? "font-semibold underline text-[#2cff00]" : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("About")}
                className={`flex items-center hover:text-gray-300 transition ${isDropdownActive("About") ? "font-semibold underline text-[#2cff00]" : ""
                  }`}
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "About" && (
                <ul className="absolute left-[-50%] mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                  <li className={`hover:bg-gray-200 ${isActive("/about-conference") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/about-conference" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      About the Conference
                    </Link>
                  </li>
                  <li className={`hover:bg-gray-200 ${isActive("/scope-conference") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/scope-conference" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      Scope of Conference
                    </Link>
                  </li>
                  <li className={`hover:bg-gray-200 ${isActive("/full-committee") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/full-committee" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      Organizing Committee
                    </Link>
                  </li>
                  <li className={`hover:bg-gray-200 ${isActive("/editorial-board") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/editorial-board" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      Editorial Board
                    </Link>
                  </li>
                </ul>
              )}

            </li>

            {/* Authors Dropdown (Mobile) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("Authors")}
                className={`flex items-center hover:text-gray-300 transition ${isDropdownActive("Authors") ? "font-semibold underline text-[#2cff00]" : ""
                  }`}
              >
                Authors <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "Authors" && (
                <ul className="absolute left-[-50%] mt-2 bg-white text-black shadow-md rounded-md py-2 w-64 z-50">
                  <li className={`hover:bg-gray-200 ${isActive("/conference-tracks") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/conference-tracks" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      Conference Tracks
                    </Link>
                  </li>
                  <li className={`hover:bg-gray-200 ${isActive("/registration") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/registration" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      Registration Details
                    </Link>
                  </li>
                  <li className={`hover:bg-gray-200 ${isActive("/paper-submit") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/paper-submit" className="block px-4 py-2 w-full" onClick={() => { setDropdownOpen(null); setMenuOpen(false); }}>
                      Paper Submission
                    </Link>
                  </li>
                </ul>
              )}

            </li>

            <Link
              to="/contact"
              className={`hover:text-gray-300 transition text-lg ${isActive("/contact") ? "font-semibold underline text-[#2cff00]" : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </ul>

          <Link
            to="/paper-submit"
            className={`mt-6 border border-white px-6 py-2 rounded-full hover:bg-green-600 transition ${isActive("/paper-submit") ? "bg-green-600" : ""
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
}
