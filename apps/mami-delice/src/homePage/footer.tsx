import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-16 px-6 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="space-y-4">
          <h3 className="font-serifTitle text-3xl text-white">
            Mami Délice
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Traiteur marocain haut de gamme pour vos réceptions privées et professionnelles.  
            Buffets raffinés, faits maison, livrés partout au Maroc.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serifTitle text-xl text-white">Contact</h4>

          <p className="flex items-center gap-3 text-gray-300">
            <FaPhoneAlt className="text-accent" /> +212 6 12 34 56 78
          </p>

          <p className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-accent" /> contact@mamidelice.ma
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serifTitle text-xl text-white">Suivez-nous</h4>

          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-300 hover:text-accent transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-300 hover:text-accent transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-14 pt-6 text-center border-t border-white/10">
        <p className="text-gray-400 text-xs tracking-wide">
          © {new Date().getFullYear()} Mami Délice — Tous droits réservés.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
