import  { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false); 

  const handleMouseEnter = () => {
    if (servicesMenuOpen) {
      setServicesMenuOpen(false); 
    }
  };

  return (
    <header className="bg-light-gray text-primary-blue py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <img src="/src/assets/images/logo.png" alt="Logo Acorad" className="h-20 ml-3" />
        </div>

        <div className="hidden lg:flex space-x-6 relative ml-auto">
          <Link to="accueil" className="text-xl font-semibold hover:text-soft-yellow transition cursor-pointer">Home</Link>
          <Link to="about" className="text-xl font-semibold hover:text-soft-yellow transition cursor-pointer">About</Link>
          <Link to="service" className="text-xl font-semibold hover:text-soft-yellow transition cursor-pointer">Services</Link>
          <Link to="event" className="text-xl font-semibold hover:text-soft-yellow transition cursor-pointer">Events</Link>
          <Link to="contact" className="text-xl font-semibold hover:text-soft-yellow transition cursor-pointer">Contact</Link>
        </div>

        <div className="lg:hidden flex items-center ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-light-gray focus:outline-none">
            <FaBars className="h-6 w-6 text-primary-blue mr-3" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-12 bg-primary-blue text-light-gray rounded-lg shadow-lg p-4">
              <Link to="accueil" className="block py-2">Home</Link>
              <Link to="about" className="block py-2">About</Link>
              
              <div
                className="relative"
                onMouseEnter={handleMouseEnter} 
              >
                <button
                  onClick={() => setServicesMenuOpen(!servicesMenuOpen)} 
                  className="block py-2 text-xl cursor-pointer"
                >
                  Services
                </button>
                {servicesMenuOpen && (
                  <div className="bg-primary-blue text-light-gray rounded-lg shadow-lg p-2 space-y-2">
                    <Link to="webinaire" className="block py-2 text-xl cursor-pointer">Webinaires</Link>
                    <Link to="consulting" className="block py-2 text-xl cursor-pointer">Consulting Stratégique</Link>
                    <Link to="digital-transformation" className="block py-2 text-xl cursor-pointer">Transformation Digitale</Link>
                    <Link to="custom-development" className="block py-2 text-xl cursor-pointer">Développement sur Mesure</Link>
                  </div>
                )}
              </div>

              <Link to="contact" className="block py-2">Contact</Link>
            </div>
          )}
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
