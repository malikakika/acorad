import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import Services from '../components/services';
import Webinar from '../components/webinar';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';



const App = () => {
  return (
    <div className="bg-light-gray font-sans antialiased">
      <Header />
      <Hero/>
      <About />
      <Services />
      <Webinar />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
