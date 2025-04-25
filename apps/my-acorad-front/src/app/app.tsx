import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Bootcamp from '../components/bootcampPage/bootcampPage';
import Footer from '../components/footer';

const App = () => {
  return (
<div className="bg-light-gray font-sans antialiased relative z-0">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
      </Routes>
      <Footer /> {/* Facultatif : pareil pour Footer */}
    </div>
  );
};

export default App;
