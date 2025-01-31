import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoBlanc from '../assets/logoBlanc.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };
  const linkClasses = `
    text-xl font-semibold transition cursor-pointer hover:border-b-4 hover:border-dark-purple hover:font-bold
  `;
  return (
    <header className="bg-primary-blue text-light-gray py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src={logoBlanc}
            alt="Logo Acorad"
            className="h-20 ml-3"
          />
        </div>

        <div className="hidden lg:flex space-x-6 relative ml-auto">
          <Link to="accueil" className={linkClasses}>
            Home
          </Link>
          <Link to="about" className={linkClasses}>
            About
          </Link>

          <div className="relative">
            <button className={linkClasses} onClick={handleServicesToggle}>
              Services
            </button>
            {servicesOpen && (
              <div className="absolute left-0 bg-primary-blue text-light-gray rounded-lg shadow-lg p-2 space-y-2 mt-2 linkClasses">
                <Link
                  to="services"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Training
                </Link>
                <Link
                  to="services"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Conference
                </Link>
                <Link
                  to="services"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Bootcamp
                </Link>
                <Link
                  to="services"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Consulting
                </Link>
                <Link
                  to="webinar"
                  className="block py-2 text-xl cursor-pointer"
                >
                  Webinaire
                </Link>
              </div>
            )}
          </div>

          <Link to="contact" className={linkClasses}>
            Contact
          </Link>
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
                <Link
                  to="accueil"
                  className="block py-2 text-xl cursor-pointer  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className="block py-2 text-xl cursor-pointer  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>

                <div className="relative">
                  <button
                    onClick={handleServicesToggle}
                    className="block py-2 text-xl cursor-pointer  transition"
                  >
                    Services
                  </button>
                  {servicesOpen && (
                    <div className="mt-2 pl-4 space-y-2">
                      <Link
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Training
                      </Link>
                      <Link
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Conference
                      </Link>
                      <Link
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Bootcamp
                      </Link>
                      <Link
                        to="services"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Consulting
                      </Link>
                      <Link
                        to="webianire"
                        className="block py-2 text-xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        Webinaire
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="contact"
                  className="block py-2 text-xl cursor-pointer  transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
