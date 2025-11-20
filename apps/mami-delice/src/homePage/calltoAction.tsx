import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/bgGlobal.png";
import img2 from "../assets/heroImage.jpg";
import img3 from "../assets/image.png"; 



const images = [img1, img2, img3];

const CallToActionSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full bg-black py-20 text-white overflow-hidden">
      
      <h2 className="text-center font-serifTitle text-3xl sm:text-5xl font-normal mb-10">
        Un événement à organiser ? <br />
        <span className="text-accent">Mami Délice s’occupe du buffet.</span>
      </h2>

      <div className="relative w-full h-[380px] sm:h-[500px]">

        {/* IMAGE */}
        <img
          src={images[index]}
          alt="Gallery slide"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        {/* Overlay sombre pour contraste */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-full hover:bg-black/80 transition"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-full hover:bg-black/80 transition"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
      <h2 className="text-center font-serifTitle text-3xl sm:text-5xl font-normal mt-10">

La passion de l’excellence, l’élégance dans chaque détail.       </h2>

      <div className="text-center mt-10">
        <a
          href="#contact"
          className="px-8 py-3 bg-accent text-white rounded-full font-semibold text-lg shadow-lg  transition"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
