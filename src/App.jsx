import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NourishSteps from './pages/NourishSteps.jsx';
import TripEasy from './pages/TripEasy.jsx';
import WorkUp from './pages/WorkUp.jsx';
import Sso from './pages/Sso.jsx';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nourishsteps" element={<NourishSteps />} />
        <Route path="/tripeasy" element={<TripEasy />} />
        <Route path="/workup" element={<WorkUp />} />
        <Route path="/sso" element={<Sso />} />
      </Routes>
    </>
  );
}

export default App;
