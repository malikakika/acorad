import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-light-gray py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">À propos de Acorad</h3>
          <p className="text-sm">
            Acorad est une agence de marketing digital dédiée à la transformation numérique des entreprises. Nous créons des solutions sur mesure pour booster votre croissance.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#accueil" className="hover:underline">Accueil</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">À propos</a>
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
          <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
          <p className="text-sm">Email: contact@acorad.com</p>
          <p className="text-sm">Téléphone: +212 1 23 45 67 89</p>
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green">
              <FaYoutube className="h-6 w-6" />
            </a> 
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-light-gray pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Acorad. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
