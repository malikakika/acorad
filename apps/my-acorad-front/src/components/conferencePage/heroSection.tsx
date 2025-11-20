
import { Link } from 'react-scroll';
import conferenceImage from '../../assets/casaCity.jpeg';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = () => {
    return (
<section
className="relative h-[100vh] max-h-[90vh] flex items-center justify-center text-center px-4 sm:px-10 text-white overflow-hidden"
aria-label="ICDAMI 2025 Conference Hero"
>
<div
  className="absolute inset-0 bg-center bg-cover"
  style={{
    backgroundImage: `url(${conferenceImage})`,
    filter: 'brightness(0.5) ',
  }}
  aria-hidden="true"
></div>

<div className="relative z-10 max-w-4xl">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
    ICDAMI 2025 – Morocco
  </h1>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base font-medium mb-6 drop-shadow">
    <div className="flex items-center gap-2">
      <FaCalendarAlt className="text-accent-blue" />
      <span>13–14 November 2025</span>
    </div>
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-accent-blue" />
      <span>Casablanca, Morocco</span>
    </div>
  </div>
  <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 drop-shadow">
    International Conference on the Cross-Disciplinary Approach to
    Managing Innovation
  </p>
  <Link
  to="conference-form"
            smooth={true}
            duration={500}
            offset={-50}
            className="inline-block bg-accent-blue text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-primary-blue transition-all cursor-pointer motion-reduce:transition-none"
            role="button"
            aria-label="Register for the bootcamp">
    Register Now
  </Link>
</div>
</section>
  );
};

export default HeroSection;