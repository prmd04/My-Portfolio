import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // Default to about
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting, update the active section
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // KEY FIX: rootMargin creates a "highlight zone" in the middle of the screen
        // -100px top: ignores the space covered by the navbar
        // -40% bottom: triggers the next section only when it comes up towards the middle
        rootMargin: "-100px 0px -40% 0px",
        threshold: 0.2 // Triggers when 20% of the section is in the zone
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const sec = document.getElementById(sectionId);
    // Smooth scroll that accounts for the fixed navbar height
    if (sec) {
        const yOffset = -80; // Height of your navbar
        const y = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
    // Note: 'contact' is not here, so if you scroll to contact, highlighting stops.
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[20vw] transition duration-300 ${
        isScrolled ? "bg-[#050414]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="text-[#8245ec]">&lt;</span>
          <span>Pramod</span>
          <span className="text-[#8245ec]">/</span>
          <span>Ade</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec] font-bold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/prmd04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pramod-ade/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-[#8245ec]/30">
          <ul className="flex flex-col items-center space-y-6 py-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-lg hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 mt-4">
              <a href="https://github.com/prmd04" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec]">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/pramod-ade/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec]">
                <FaLinkedin size={28} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;