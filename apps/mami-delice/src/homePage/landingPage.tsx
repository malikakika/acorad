import HeroSection from './heroSection';
import Header from './header';
import EventFeaturesSection from './eventFeaturesSection';
import ServicesSection from './serviceSection';
import CallToActionSection from './calltoAction';
import Footer from './footer';
import bgGlobal from '../assets/bgGlobal.png';


const LandingPage = () => {
  return (
 <div
  className="min-h-screen w-full text-white font-sans overflow-x-hidden relative"
  style={{
    backgroundImage: `url(${bgGlobal})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

  <div className="relative z-10">
    <Header />
    <HeroSection />
    <EventFeaturesSection />
    <ServicesSection />
    <CallToActionSection />
    <Footer />
  </div>
</div>


  );
};

export default LandingPage;
