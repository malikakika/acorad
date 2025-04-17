import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Bootcamp from '../components/bootcampPage';

const App = () => {
  return (
    <div className="bg-light-gray font-sans antialiased">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
      </Routes>
    </div>
  );
};

export default App;
