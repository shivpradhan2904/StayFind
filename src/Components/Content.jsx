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
        <nav className="absolute top-0 left-0 right-0 p-5 flex justify-between text-white bg-opacity-50">
          {/* Logo */}
          <div
            className=" font-forte text-3xl md:text-4xl transition-opacity duration-1000 ease-in-out opacity-0 transform scale-95"
            style={{ opacity: isLoaded ? 1 : 0 }}
          >
            StayFinder
          </div>

          <div className="md:w-[27rem] lg:w-[44rem] 2xl:w-[47rem] flex justify-between">
            {/* First UL with Links */}
            <ul className="hidden md:block text-lg font-high-tower">
              {["Explore", "Projects", "Best in Area"].map((item, index) => (
                <li
                  key={index}
                  className="transition-opacity duration-1000 ease-in-out opacity-0 transform translate-x-[-20px] relative group"
                  style={{ opacity: isLoaded ? 1 : 0 }}
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
                  className="transition-opacity duration-1000 ease-in-out opacity-0 transform translate-x-[-20px] relative group"
                  style={{ opacity: isLoaded ? 1 : 0 }}
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
                  className={`absolute bg-white right-0 top-0 w-[21rem] md:w-[25rem] lg:w-[39rem] xl:w-[46.5rem] h-[35rem] md:h-[35rem] lg:h-[30rem] xl:h-[42.5rem]  md:rounded-xl text-black p-8 shadow-lg z-50 transition-all duration-500 ease-in-out transform ${
                    showHamburgerMenu
                      ? "opacity-100 max-h-[100rem]"
                      : "opacity-0 max-h-0"
                  }`}
                  style={{
                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                  }}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-6 text-black font-bold text-3xl hover:text-gray-500"
                    onClick={toggleHamburgerMenu}
                  >
                    &times;
                  </button>

                  {/* Menu Items */}
                  <div className="flex flex-col justify-between h-full ">
                    {/* Top Section */}
                    <div className="space-y-6 text-6xl font-bold">
                      {["Explore", "Projects", "Disciplines"].map(
                        (item, index) => (
                          <div
                            key={index}
                            className={`hover:text-gray-600 cursor-pointer transition-transform duration-500 transform ${
                              showHamburgerMenu
                                ? "translate-y-0"
                                : "translate-y-[-20px] opacity-0"
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex flex-col">
                      {/* Left Column */}
                      <div className="space-y-4 flex gap-[5rem] xl:gap-[17rem] text-gray-400">
                        <div className="text-lg">Properties</div>
                        <div className="space-y-2 text-black font-serif pb-1">
                          {[
                            "View Properties",
                            "Property Types",
                            "Post Your Property",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`hover:text-gray-600 cursor-pointer transition-transform duration-500 transform ${
                                showHamburgerMenu
                                  ? "translate-y-0"
                                  : "translate-y-[-20px] opacity-0"
                              }`}
                              style={{
                                animationDelay: `${index * 0.1 + 0.3}s`,
                              }} // Add delay for bottom divs
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4 flex gap-[7rem] xl:gap-[17rem] text-gray-400">
                        <div className="text-lg">Owner</div>
                        <div className="space-y-2 text-black font-serif">
                          {[
                            "Owner List",
                            "Owned Properties",
                            "Address",
                            "Contact",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`hover:text-gray-600 cursor-pointer transition-transform duration-500 transform ${
                                showHamburgerMenu
                                  ? "translate-y-0"
                                  : "translate-y-[-20px] opacity-0"
                              }`}
                              style={{
                                animationDelay: `${index * 0.1 + 0.6}s`,
                              }} // Add delay for bottom divs
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Content Below Navbar */}
        <div className="absolute inset-x-0 md:top-[40px] top-[30px] flex flex-col gap-8 items-start left-0 lg:left-[16rem] xl:left-[45rem] 2xl:left-[43rem]  mt-[10rem] md:mt-[15rem] 2xl:mt-[10rem] xl:mt-[13rem] justify-center md:justify-start text-left px-4">
          <h1 className="xl:text-[5rem] text-2xl sm:text-[3rem] md:text-[4rem] md:font-serif">
            Find Your Stay
          </h1>

          <div className="flex gap-2 justify-center items-center">
            <a
              href="/bom.html"
              className="bg-white hover:bg-black flex justify-center mb-4 items-center gap-2 hover:text-white  py-1 duration-500 text-black text-sm px-6 rounded-lg w-[11rem] shadow-lg transition mt-4 group"
            >
              <div className="w-[15px] h-[10px] bg-black flex justify-center rounded-xl items-center transition duration-500 group-hover:bg-white">
                <div className="w-[10px] h-[5px] bg-white transition duration-500 rounded-xl group-hover:bg-black"></div>
              </div>
              Explore Images
            </a>
            <button className=" md:hidden flex items-center justify-center bg-transparent border-2 border-gray-100 text-white py-2 px-4 rounded-lg shadow-lg hover:border-[#6bf6b3] transition duration-600">
              <span className="mr-2">↓</span> {/* Down arrow symbol */}
              English
            </button>
          </div>
        </div>

        {/* Content Section with Hover Effects */}
        <div className="absolute inset-x-0 bottom-0 left-[-2.7rem] md:left-0 md:bottom-[2%] flex items-center justify-between px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] space-x-8">
          {/* Button with Arrow and Text */}
          <button className="hidden md:block flex items-center hover:border-[2px] font-serif bg-transparent border-2 border-gray-100 text-white py-2 px-4 rounded-lg shadow-lg hover:border-[#216645a0] z">
            <span className="mr-2">↓</span> {/* Down arrow symbol */}
            English
          </button>

          <div
            className={`hidden md:block flex flex-col gap-1 font-serif ${
              showHamburgerMenu ? "hidden" : "block"
            }`}
          >
            {/* Text with Underline Animation */}
            <span className="text-white">Opened in 2024</span>
            <div className="flex gap-4">
              <a
                href="/"
                className="text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Archetecture
              </a>
              <a
                href="/"
                className="text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Interior Design
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 font-serif">
            <span className="text-white font-medium">Bhubaneswer, Odisha</span>
            <div className=" md:hidden flex flex-col font-serif">
              {/* Text with Underline Animation */}
              <span className="text-white font-medium ">Opened in 2024</span>
              <div className="flex gap-4">
                <a
                  href="/"
                  className="text-white font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Archetecture
                </a>
                <a
                  href="/"
                  className="text-white font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
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
