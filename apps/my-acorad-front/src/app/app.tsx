import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Bootcamp from '../components/bootcampPage';
import Footer from '../components/footer';
import ConferencePage from '../components/conferencePage/conferencePage';

const App = () => {
  return (
<div className="bg-light-gray font-sans antialiased relative z-0">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/conference" element={<ConferencePage />} />

      </Routes>
      <Footer /> {/* Facultatif : pareil pour Footer */}
    </div>
  );
};

export default App;
