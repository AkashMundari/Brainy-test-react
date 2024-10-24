// import React, { useState, useEffect } from "react";

// import { GiHamburgerMenu } from "react-icons/gi";

// const HeroNav = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if page is scrolled
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div
//         className={`hero-sub-section transition-all duration-300 ease-in-out
//         ${
//           isScrolled
//             ? "fixed top-0 left-0 w-full bg-white backdrop-blur-sm pb-4 pt-5 px-5 z-30"
//             : ""
//         }
//         flex justify-between`}
//       >
//         <div className="logo"></div>
//         <div
//           className={`flex items-center h-auto px-4 text-white ${
//             isScrolled ? "text-black" : ""
//           }`}
//         >
//           <GiHamburgerMenu size={40} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroNav;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";

const HeroNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Agenda", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Benefits", href: "#" },
  ];

  return (
    <>
      <div
        className={`transition-all duration-300 ease-in-out px-5 py-4 shadow-md hero-sub-section
        ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white backdrop-blur-sm shadow-sm z-30"
            : "relative"
        }
        flex justify-between items-center`}
      >
        <div className="logo">{/* Add your logo here */}</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center p-2 rounded-md transition-colors
            ${
              isScrolled
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
        >
          <Menu size={40} />
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full flex flex-col relative p-5 poppins-light">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <X size={40} />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col justify-center items-center h-full">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-4xl md:text-5xl text-gray-800 hover:text-gray-600 mb-8 font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeroNav;
