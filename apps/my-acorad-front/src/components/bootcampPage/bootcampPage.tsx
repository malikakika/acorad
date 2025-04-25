import {FormBootcamp} from './formBootcamp';
import { HeroSection } from './heroSection';
import { AboutSection } from './aboutSection';
import { ProgramSection } from './programSection';
import { IncludedSection } from './inclludedSection';
import { TrainerSection } from './trainerSection';
import { PaymentSection } from './PaymentSection';
import { PricingSection } from './PricingSection';

const Bootcamp = () => {
  return (
    <div className="text-gray-800">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <IncludedSection />
      <TrainerSection />
      <PaymentSection />
      <PricingSection />
      <FormBootcamp />
    </div>
  );
};

export default Bootcamp;
