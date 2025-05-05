import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import LandingPage from '../components/landingPage';
import Bootcamp from '../components/bootcampPage';
import Footer from '../components/footer';
import ConferencePage from '../components/conferencePage/conferencePage';
=======
import Bootcamp from '../components/bootcampPage/bootcampPage';
import Footer from '../components/homePgae/footer';
import LandingPage from '../components/homePgae/landingPage';
import { CookieBanner } from '../components/cookieBanner';
>>>>>>> main

const App = () => {
  return (
<div className="bg-light-gray font-sans antialiased relative z-0">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/conference" element={<ConferencePage />} />

      </Routes>
      <Footer /> 
      <CookieBanner />

    </div>
  );
};

export default App;
