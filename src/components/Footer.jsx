import React from "react";
import { footerLinks } from "../data/FooterLinks";
import IconInstagram from "../../public/Assets/icons/instagram.png";
import IconEmail from "../../public/Assets/icons/email.png";
import IconTiktok from "../../public/Assets/icons/tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-[#F5F3EF] py-24 px-6 md:px-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* SISI KIRI: Brand/Logo */}
        <a
          href="#Home"
          className="flex items-center gap-3 w-full md:w-1/4 mb-10 md:mb-0"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/Assets/Logo.png" alt="Logo" className="object-contain" />
          </div>
          <span className="font-bold text-xl text-[#2E2E2E]">Salsa</span>
        </a>

        {/* SISI TENGAH: Link Navigasi (Jarak diperlebar) */}
        <div className="flex flex-1 flex-row justify-start md:justify-center gap-24 md:gap-48 mb-10 md:mb-0">
          {footerLinks.map((col, index) => (
            <div key={index} className="flex flex-col gap-5">
              {col.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#2E2E2E] font-bold text-lg hover:text-[#B08968] transition-colors duration-300 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* SISI KANAN: Social Media */}
        <div className="flex flex-col gap-4 w-full md:w-1/4 items-start md:items-end">
          <h3 className="text-[#2E2E2E] font-bold text-lg">Contact Me</h3>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/salsaliee_/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={IconInstagram}
                alt="Instagram"
                className="w-7 h-7 object-contain"
              />
            </a>

            <a
              href="mailto:Liesalsa23@gmail.com"
              className="transition-transform hover:scale-110"
            >
              <img
                src={IconEmail}
                alt="Email"
                className="w-7 h-7 object-contain"
              />
            </a>

            <a
              href="https://www.tiktok.com/@cacakh?_r=1&_t=ZS-930gQshnArY"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={IconTiktok}
                alt="Tiktok"
                className="w-7 h-7 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
