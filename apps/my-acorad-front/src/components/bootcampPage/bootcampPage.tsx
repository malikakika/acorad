import {FormBootcamp} from './formBootcamp';
import { HeroSection } from './heroSection';
import { AboutSection } from './aboutSection';
import { ProgramSection } from './programSection';
import { IncludedSection } from './includedSection';
import { TrainerSection } from './trainerSection';
import { PaymentSection } from './PaymentSection';
import { PricingSection } from './PricingSection';
import { WhyJoinSection } from './whyJoinSection';
import { ScheduleSection } from './scheduleSection';

const Bootcamp = () => {
  return (
    <div className="text-gray-800">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <WhyJoinSection/>
      <IncludedSection />
      <ScheduleSection/>
      <TrainerSection />
      <PaymentSection />
      <PricingSection />
      <FormBootcamp />
    </div>
  );
};

export default Bootcamp;
