import About from './about';
import Contact from './contact';
import Header from './header';
import Hero from './hero';
import Services from './services';
import Webinar from './webinar';

const LandingPage = () => {
  return (
    <div >
      <Header />
      <Hero />
      <About />
      <Services />
      <Webinar />
      <Contact />
    </div>
  );
};

export default LandingPage;
