import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-light-gray py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">About Acorad</h3>
          <p className="text-sm">
            ACORAD is dedicated to empowering academicians, researchers, and professionals by providing platforms for knowledge creation and research. We offer tailored training programs across business, social sciences, and management to support academic and corporate growth. Our mission is to foster innovation and socio-economic development globally, with a growing presence in Morocco, England, and the UAE.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#accueil" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-4">Contact us</h3>
          <div className="text-sm flex items-center justify-center md:justify-end mb-2">
            <FaEnvelope className="mr-2 h-5 w-5" />
            <a href="mailto:contact@acorad.com" className="hover:underline">contact@acorad.com</a>
          </div>
          <div className="text-sm flex items-center justify-center md:justify-end mb-4">
            <FaPhone className="mr-2 h-5 w-5" />
            <a href="tel:+212123456789" className="hover:underline">+212 1 23 45 67 89</a>
          </div>
          <div className="mt-4 flex justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green">
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-light-gray pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Acorad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
