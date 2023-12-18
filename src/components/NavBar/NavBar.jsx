import { useState } from "react";
import Foto from "../image/logo.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "Explore", href: "#section1" },
    { label: "About us", href: "#about" },
    { label: "Book Now", href: "#section2" },
    { label: "Tours", href: "#section3" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        <img src={Foto} alt="landing foto" className="w-10 h-10" />

        <div className="lg:flex items-center space-x-6 text-black hidden md:block">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-xl">
              {item.label}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="block text-xl mb-2">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
