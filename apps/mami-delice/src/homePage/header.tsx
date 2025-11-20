import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="w-full text-white px-6 py-4  top-0 left-0 z-[100] ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <img
                src="/logo-mamidelice.png"
                alt="Mami Délice"
                className="h-12 w-auto"
              />
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="bg-[#c13a3a] p-3 rounded-full hover:bg-[#a24d4c] transition block"
          >
            <FaBars className="text-xl text-white" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white shadow-xl z-[100] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white text-2xl hover:text-[#c13a3a] transition"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center mt-20 gap-6 text-lg">
          <img
            src="/logo-mamidelice.png"
            className="h-16 mb-4"
            alt="Mami Délice"
          />

          <a onClick={closeMenu} href="/" className="hover:text-[#c13a3a] transition">Accueil</a>
          <a onClick={closeMenu} href="#services" className="hover:text-[#c13a3a] transition">Nos Services</a>
          <a onClick={closeMenu} href="#buffets" className="hover:text-[#c13a3a] transition">Nos Buffets</a>
          <a onClick={closeMenu} href="#galerie" className="hover:text-[#c13a3a] transition">Galerie</a>
          <a onClick={closeMenu} href="#contact" className="hover:text-[#c13a3a] transition">Contact</a>

          <a
            onClick={closeMenu}
            href="#contact"
            className="mt-6 bg-[#c13a3a] px-6 py-2 rounded-full font-semibold hover:bg-[#a24d4c] transition"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
