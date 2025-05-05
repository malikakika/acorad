import { Link } from 'react-scroll';
import heroImage from '../../assets/bootcampHero.jpg';
import { FaCalendarAlt, FaRocket, FaArrowLeft } from 'react-icons/fa';

export const HeroSection = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 sm:px-10"
      style={{ backgroundImage: `url(${heroImage})` }}
      role="region"
      aria-label="Bootcamp hero banner"
    >
      <div className="absolute inset-0 bg-black/70" />

      {/* Back button */}
      <a
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 text-white border border-white px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition"
        aria-label="Back to main site"
      >
        <FaArrowLeft />
        Back
      </a>

      <div className="relative z-10 text-white animate-fade-in-up max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-xl">
          <FaRocket className="inline-block mr-3  animate-bounce" aria-hidden="true" />
          Empower Your Future: Business & Startup Bootcamp
        </h1>

        <p className="text-xl sm:text-2xl font-medium mb-6 flex items-center justify-center gap-3">
          <FaCalendarAlt className="text-lg animate-pulse" aria-hidden="true" />
          28 July to 2 August 2025 — Istanbul, Turkey
        </p>

        <Link
          to="bootcamp-form"
          smooth={true}
          duration={500}
          offset={-50}
          className="inline-block bg-accent-blue hover:bg-primary-blue text-white px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition-all cursor-pointer motion-reduce:transition-none"
          role="button"
          aria-label="Register for the bootcamp"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
};
