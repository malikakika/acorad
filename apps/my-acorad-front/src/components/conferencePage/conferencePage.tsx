import HeroSection from './heroSection';
import AboutSection from './aboutSection';
import KeyDateSection from './keyDateSection';
import SpeakersSection from './speakersSection';
import JournalsSection from './journalsSection';
import EventsSection from './eventSection';
import RegistrationSection from './registartionSection';
import ThemesAndPublicationsSection from './ThemesAndPublicationsSection';
import CoorganiserAndCommitteeSection from './CoorganiserAndCommitteeSection';
import VisaInvitationSection from './visaSection';

const ConferencePage = () => {
  return (
    <main
      className="bg-white text-gray-800 font-sans text-sm sm:text-base"
      role="main"
    >
      <HeroSection />
      <AboutSection />
      <ThemesAndPublicationsSection/>
      <KeyDateSection />
      <SpeakersSection />
      <CoorganiserAndCommitteeSection/>
      <VisaInvitationSection/>
      <JournalsSection />
      <EventsSection/>
      <RegistrationSection/>
    </main>
  );
};

export default ConferencePage;
