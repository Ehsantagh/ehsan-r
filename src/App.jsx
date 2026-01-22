// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import WorkList from './pages/WorkList';
import WorkTemplate from './pages/WorkTemplate';
import TorchPage from './pages/TorchPage';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';

export const BackgroundContext = React.createContext('#ffffff');

function AppContent() {
  const location = useLocation();
  const isWhiteFooter = location.pathname === '/torch' || location.pathname === '/contact';
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // Determine if footer should stay above fold (home, expertise, about only)
  const footerAboveFold = ['/', '/home', '/expertise', '/about'].includes(location.pathname.toLowerCase());

  // Apply background color to body element
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [backgroundColor]);

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/worklist" element={<WorkList />} />
          <Route path="/work/:id" element={<WorkTemplate />} />
          <Route path="/torch" element={<TorchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer isWhite={isWhiteFooter} backgroundColor={backgroundColor} aboveFold={footerAboveFold} />
      </>
    </BackgroundContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <Menu />
      <AppContent />
    </Router>
  );
}

export default App;