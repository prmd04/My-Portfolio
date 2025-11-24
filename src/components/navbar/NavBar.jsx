import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useScrollSpy from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const activeSection = useScrollSpy(menuItems.map(i => i.id), 140);

  const handleMenuItemClick = (id) => {
    setIsOpen(false);
    const sec = document.getElementById(id);
    if (sec) {
      window.scrollTo({
        top: sec.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#050414]/70 backdrop-blur-md shadow-lg z-50 px-[7vw] lg:px-[15vw]">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="text-[#8245ec]">&lt;</span>Pramod
          <span className="text-[#8245ec]">/</span>Ade
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition ${
                activeSection === item.id ? "text-[#8245ec] font-bold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
          href="https://github.com/prmd04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8245ec]"
          ><FaGithub size={24} /></a>
         <a
          href="https://www.linkedin.com/in/pramod-ade"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8245ec]"
          ><FaLinkedin size={24} /></a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#050414]/95 py-6 rounded-lg border border-[#8245ec]/20">
          <ul className="flex flex-col items-center space-y-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`text-lg cursor-pointer ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
