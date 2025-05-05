import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import logoBlanc from '../../assets/logoBlanc.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };
  const ScrollLinkClasses = `
    text-xl font-semibold transition cursor-pointer hover:border-b-4 hover:border-dark-purple hover:font-bold
  `;
  return (
<header className="bg-primary-blue text-light-gray py-4 shadow-lg overflow-visible">
<nav className="container mx-auto flex justify-between items-center overflow-visible">
        <div>
          <img src={logoBlanc} alt="Logo Acorad" className="h-20 ml-3" />
        </div>

        <div className="hidden lg:flex space-x-6 relative ml-auto">
          <ScrollLink to="accueil" className={ScrollLinkClasses}>
            Home
          </ScrollLink>
          <ScrollLink to="about" className={ScrollLinkClasses}>
            About
          </ScrollLink>

          <div className="relative">
            <button
              className={ScrollLinkClasses}
              onClick={handleServicesToggle}
            >
              Services
            </button>
            {servicesOpen && (
              <div className="absolute left-0 z-50 bg-primary-blue text-light-gray rounded-lg shadow-lg p-2 space-y-2 mt-2">
              <ScrollLink
                  to="services"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Training
                </ScrollLink>
                <NavLink
                  to="/conference"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Conference
                </NavLink>
                <NavLink
                  to="/bootcamp"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Bootcamp
                </NavLink>

                <ScrollLink
                  to="services"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Consulting
                </ScrollLink>
                <ScrollLink
                  to="webinar"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Webinaire
                </ScrollLink>
              </div>
            )}
          </div>

          <ScrollLink to="contact" className={ScrollLinkClasses}>
            Contact
          </ScrollLink>
        </div>

        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-light-gray focus:outline-none"
          >
            <FaBars className="h-6 w-6 text-vanilla mr-3" />
          </button>

          {menuOpen && (
            <div className="fixed top-0 right-0 h-full w-64 bg-primary-blue bg-opacity-80 text-light-gray shadow-lg z-50 transform translate-x-0 transition-transform duration-300">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-light-gray text-2xl focus:outline-none"
              >
                <FaTimes />
              </button>

              <div className="mt-16 p-4">
                <ScrollLink
                  to="accueil"
                  className="block py-2 text-xl cursor-pointer  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  className="block py-2 text-xl cursor-pointer  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </ScrollLink>

                <div className="relative">
                  <button
                    onClick={handleServicesToggle}
                    className="block py-2 text-xl cursor-pointer  transition"
                  >
                    Services
                  </button>
                  {servicesOpen && (
                    <div className="mt-2 pl-4 space-y-2">
                      <ScrollLink
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Training
                      </ScrollLink>
                      <ScrollLink
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Conference
                      </ScrollLink>
                      <NavLink
                        to="/bootcamp"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        Bootcamp
                      </NavLink>
                      <ScrollLink
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Consulting
                      </ScrollLink>
                      <ScrollLink
                        to="webianire"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Webinaire
                      </ScrollLink>
                    </div>
                  )}
                </div>

                <ScrollLink
                  to="contact"
                  className="block py-2 text-xl cursor-pointer  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
