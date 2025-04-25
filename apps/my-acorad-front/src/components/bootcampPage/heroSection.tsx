
import { Link } from 'react-scroll';
import heroImage from '../../assets/bootcampHero.jpg';

export const HeroSection = () => {
    return (
<section
className="relative h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 sm:px-10"
style={{ backgroundImage: `url(${heroImage})` }}
role="region"
aria-label="Bootcamp hero banner"
>
<div className="absolute inset-0 bg-black opacity-60"></div>
<div className="relative z-10 text-white animate-fade-in-up motion-reduce:transition-none">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
    Entrepreneurship and Business Start-up Bootcamp
  </h1>
  <p className="text-xl sm:text-2xl font-medium mb-6">
    21 and 22 July 2024
  </p>
  <Link
    to="bootcamp-form"
    smooth={true}
    duration={500}
    offset={-50}
    className="inline-block bg-accent-blue text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-primary-blue transition-all cursor-pointer motion-reduce:transition-none"
    role="button"
    aria-label="Register for the bootcamp"
  >
    Register Now
  </Link>
</div>
</section>
    );
};


