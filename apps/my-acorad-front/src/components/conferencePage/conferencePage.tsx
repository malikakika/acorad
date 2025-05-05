import HeroSection from './heroSection';
import AboutSection from './aboutSection';
import ThemeSection from './themeSection';
import KeyDateSection from './keyDateSection';
import SpeakersSection from './speakersSection';
import JournalsSection from './journalsSection';
import EventsSection from './eventSection';
import RegistrationSection from './registartionSection';

const ConferencePage = () => {
  return (
    <main
      className="bg-white text-gray-800 font-sans text-sm sm:text-base"
      role="main"
    >
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <KeyDateSection />
      <SpeakersSection />
      <JournalsSection />
      <EventsSection/>
    
      <RegistrationSection/>
    </main>
  );
};

export default ConferencePage;
