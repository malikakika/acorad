import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Hero from './hero';
import Services from './services';
import Webinar from './webinar';

const LandingPage = () => {
  return (
    <div id="about">
      <Header />
      <Hero />
      <About />
      <Services />
      <Webinar />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
