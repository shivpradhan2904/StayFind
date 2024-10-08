import React, { useState, useEffect, useRef } from "react";
import img from "../images/bm.jpg";

function Content() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Set isLoaded to true after a delay to trigger the animations
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowHamburgerMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleHover = () => setIsHovered(!isHovered);

  const toggleHamburgerMenu = () => {
    // Add a delay of 1 second (1000 ms) before changing the state
    setTimeout(() => {
      setShowHamburgerMenu((prev) => !prev);
    }, 100);
  };
  return (
    <div className="relative text-white">
      {/* Background Image */}
      <div className="relative w-full h-screen">
        <img className="object-cover w-full h-full" src={img} alt="nav" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Custom Navbar */}
        <nav className="absolute top-0 left-0 right-0 p-1 md:p-5 flex justify-between text-white bg-opacity-50">
          {/* Logo */}
          <div
            className=" font-forte text-3xl md:text-4xl transition-opacity duration-1000 ease-in-out opacity-0 transform scale-95"
            style={{ opacity: isLoaded ? 1 : 0 }}
          >
            StayFinder
          </div>

          <div className="md:w-[27rem] lg:w-[44rem] 2xl:w-[45rem] flex justify-between">
            {/* First UL with Links */}
            <ul className="hidden md:block text-lg font-high-tower">
              {["Explore", "Projects", "Best in Area"].map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-700 ease-in-out opacity-0 transform translate-x-[-20px] relative group ${
                    isLoaded ? "opacity-100 translate-x-0" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }} // Add delay based on index
                >
                  <a
                    href="/"
                    className="hover:text-gray-300 transition-all ease-in-out duration-300"
                  >
                    {item}
                  </a>
                  {/* Underline Animation */}
                  <span className="block h-[2px] bg-gray-300 absolute left-0 bottom-[-2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </li>
              ))}
            </ul>

            {/* Second UL with Interactions */}
            <ul className="hidden md:block text-lg font-high-tower">
              {["Budget", "Location", "Property type"].map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-700 ease-in-out opacity-0 transform translate-x-[-20px] relative group ${
                    isLoaded ? "opacity-100 translate-x-0" : ""
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }} // Add delay based on index
                >
                  <a
                    href="/"
                    className="hover:text-gray-300 transition-all ease-in-out duration-300"
                  >
                    {item}
                  </a>
                  {/* Underline Animation */}
                  <span className="block h-[2px] bg-gray-300 absolute left-0 bottom-[-2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </li>
              ))}
            </ul>

            {/* Hamburger Menu */}
            <div className="relative">
              <button
                onClick={toggleHamburgerMenu}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                className="text-white transition rounded p-2"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* First Line */}
                  <line
                    x1="2"
                    y1="6"
                    x2="22"
                    y2="6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className={`transition-all duration-500 ease-in-out ${
                      isHovered
                        ? "translate-y-[6px] rotate-45 origin-center"
                        : ""
                    }`}
                  />
                  {/* Second Line */}
                  <line
                    x1="10"
                    y1="12"
                    x2="22"
                    y2="12"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className={`transition-all duration-500 ease-in-out ${
                      isHovered ? "opacity-0" : ""
                    }`}
                  />
                  {/* Third Line */}
                  <line
                    x1="2"
                    y1="18"
                    x2="22"
                    y2="18"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className={`transition-all duration-500 ease-in-out ${
                      isHovered
                        ? "-translate-y-[6px] -rotate-45 origin-center"
                        : ""
                    }`}
                  />
                </svg>
              </button>

              {/* Hamburger Menu */}
              {showHamburgerMenu && (
                <div
                  ref={menuRef}
                  className={`absolute bg-white right-0 top-0 w-screen sm:w-[20rem] md:w-[25rem] lg:w-[39rem] xl:w-[46.5rem] h-[35rem] md:h-[35rem] lg:h-[30rem] xl:h-[42.5rem] md:rounded-xl text-black p-8 shadow-lg z-50 transition-transform duration-1000 ease-in-out transform ${
                    showHamburgerMenu
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  {/* Close Button and S Logo */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-black text-white text-lg rounded-sm w-5 h-5 flex justify-center items-center">
                      S
                    </div>
                    <button
                      className="text-black font-bold text-3xl hover:text-gray-500"
                      onClick={toggleHamburgerMenu}
                    >
                      &times;
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col py-6 justify-between h-full">
                    {/* Top Section */}
                    <div className="space-y-4 text-3xl md:text-6xl font-bold">
                      {["Explore", "Projects", "Disciplines"].map(
                        (item, index) => (
                          <div
                            key={index}
                            className={`hover:text-gray-600 cursor-pointer transition-transform duration-700 transform ${
                              showHamburgerMenu
                                ? "translate-x-0 opacity-100"
                                : "translate-y-[-20px] opacity-0"
                            }`}
                            style={{
                              transitionDelay: `${(index + 6) * 100}ms`,
                            }} // Delay for each item
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex flex-col">
                      {/* Left Column */}
                      <div className="space-y-4 flex gap-[5rem] xl:gap-[17rem] text-gray-400">
                        <div className="text-lg mt-4 md:mt-[11.5px]">
                          Properties
                        </div>
                        <a
                          href="/"
                          className="space-y-2 text-black font-serif pb-1"
                        >
                          {[
                            "View Properties",
                            "Property Types",
                            "Post Your Property",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`hover:text-gray-600 cursor-pointer transition-transform duration-700 transform ${
                                showHamburgerMenu
                                  ? "translate-x-0 opacity-100"
                                  : "translate-y-[-20px] opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${(index + 9) * 100}ms`, // Delay for each item
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </a>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4 flex gap-[7rem] xl:gap-[18.8rem] text-gray-400">
                        <div className="text-lg mt-4 md:mt-[11.5px]">Owner</div>
                        <a href="/" className="space-y-2 text-black font-serif">
                          {[
                            "Owner List",
                            "Owned Properties",
                            "Address",
                            "Contact",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`hover:text-gray-600 cursor-pointer transition-transform duration-700 transform ${
                                showHamburgerMenu
                                  ? "translate-x-0 opacity-100"
                                  : "translate-y-[-20px] opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${(index + 12) * 100}ms`, // Delay for each item
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Content Below Navbar */}
        <div className="absolute inset-x-0 md:top-[40px] top-[20px] flex flex-col md:gap-8 items-start left-[1rem] lg:left-[16rem] xl:left-[45rem] 2xl:left-[43rem] mt-[11rem] md:mt-[15rem] 2xl:mt-[10rem] xl:mt-[13rem] justify-center md:justify-start text-left px-4">
          <h1
            className={`xl:text-[5rem] text-3xl sm:text-[3rem] md:text-[4rem] font-serif 
        opacity-0 transform translate-x-[-20px] transition duration-700 
        ${isLoaded ? "opacity-100 translate-x-0" : ""}`}
            style={{ transitionDelay: `0ms` }}
          >
            Find Your Stay
          </h1>

          <div className="flex gap-1 justify-center h-[4rem] items-center">
            <button
              className={`bg-white mt-4 md:mt-0 hover:bg-black hover:border-[1px] flex justify-center mb-4 items-center gap-3 md:gap-2 hover:text-white px-5 py-2 md:py-1 duration-500 text-black text-sm md:px-6 rounded-md md:w-[11rem] shadow-lg transition group
        opacity-0 transform translate-x-[-20px] transition ${
          isLoaded ? "opacity-100 translate-x-0" : ""
        }`}>
              <div className="w-[15px] h-[10px] bg-black flex justify-center rounded-xl items-center transition duration-100 group-hover:bg-white">
                <div className="w-[10px] h-[5px] bg-white transition duration-100 rounded-xl group-hover:bg-black"></div>
              </div>
              Explore Images
            </button>
            <button
              className={`md:hidden flex items-center text-sm justify-center bg-transparent border-[1px] border-gray-100 text-white py-2 md:py-2 px-3 md:px-4 rounded-md shadow-lg hover:shadow-sm hover:shadow-white transition duration-600
        opacity-0 transform translate-x-[-20px] transition duration-700 ${
          isLoaded ? "opacity-100 translate-x-0" : ""
        }`}
              style={{ transitionDelay: `200ms` }}
            >
              <span className="mr-2">↓</span> {/* Down arrow symbol */}
              English
            </button>
          </div>
        </div>

        {/* Content Section with Hover Effects */}
        <div className="absolute inset-x-0 left-[-2.7rem] md:left-0 bottom-[2%] flex items-center justify-between px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] space-x-8">
          {/* Button with Arrow and Text */}
          <button
            className={`hidden md:block flex items-center hover:border-[2px] font-serif bg-transparent border-2 border-gray-100 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-md hover:shadow-white duration-300
        opacity-0 transform translate-x-[-20px] transition  ${
          isLoaded ? "opacity-100 translate-x-0" : ""
        }`}
          >
            <span className="mr-2">↓</span> {/* Down arrow symbol */}
            English
          </button>

          <div
            className={`hidden md:block flex flex-col gap-1 md:text-sm text-xs font-serif 
        opacity-0 transform translate-x-[-20px] transition duration-700 ${
          isLoaded ? "opacity-100 translate-x-0" : ""
        }`}
            style={{ transitionDelay: `400ms` }}
          >
            {/* Text with Underline Animation */}
            <span className="text-white">Opened in 2024</span>
            <div className="flex gap-4 md:mt-1">
              <a
                href="/"
                className={`text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 
            opacity-0 transform translate-x-[-20px] transition duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : ""
            }`}
                style={{ transitionDelay: `500ms` }}
              >
                Architecture
              </a>
              <a
                href="/"
                className={`text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 
            opacity-0 transform translate-x-[-20px] transition duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : ""
            }`}
                style={{ transitionDelay: `600ms` }}
              >
                Interior Design
              </a>
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 pl-2 md:text-sm text-xs font-serif 
        opacity-0 transform translate-x-[-20px] transition duration-700 ${
          isLoaded ? "opacity-100 translate-x-0" : ""
        }`}
            style={{ transitionDelay: `700ms` }}
          >
            <span className="text-white font-medium">Bhubaneswar, Odisha</span>
            <div className="md:hidden flex flex-col font-serif">
              {/* Text with Underline Animation */}
              <span className="text-white font-medium ">Opened in 2024</span>
              <div className="flex gap-4">
                <a
                  href="/"
                  className={`text-white font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 
              opacity-0 transform translate-x-[-20px] transition duration-700 ${
                isLoaded ? "opacity-100 translate-x-0" : ""
              }`}
                  style={{ transitionDelay: `800ms` }}
                >
                  Architecture
                </a>
                <a
                  href="/"
                  className={`text-white font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 
              opacity-0 transform translate-x-[-20px] transition duration-700 ${
                isLoaded ? "opacity-100 translate-x-0" : ""
              }`}
                  style={{ transitionDelay: `900ms` }}
                >
                  Interior Design
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
