import React, { useState } from "react";
import { footerLinks } from "../data/FooterLinks";
import HamburgerIcon from "../../public/Assets/icons/burger-menu.png";
import CloseIcon from "../../public/Assets/icons/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allLinks = footerLinks.flatMap((col) => col.links);

  return (
    <nav className="w-full h-20 bg-[#FAF9F7] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#Home">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src="/Assets/Logo.png" alt="Logo" />
            </div>
            <span className="font-semibold text-lg text-[#2E2E2E]">Salsa</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#2E2E2E] font-medium">
          {allLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#B08968] transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Burger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Logika ganti gambar berdasarkan state isOpen */}
            {isOpen ? (
              <img src={CloseIcon} alt="Close Menu" className="w-7 h-7" />
            ) : (
              <img src={HamburgerIcon} alt="Open Menu" className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-20 right-0 h-screen w-2/3 max-w-75 bg-[#FAF9F7] shadow-2xl z-15 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {allLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <a
                href={link.href}
                className="text-[#2E2E2E] font-medium text-lg hover:text-[#B08968]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
