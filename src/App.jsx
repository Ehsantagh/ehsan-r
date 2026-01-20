// src/App.jsx
import React from 'react';
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

function AppContent() {
  const location = useLocation();
  const isWhiteFooter = location.pathname === '/torch' || location.pathname === '/contact';

  return (
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
      <Footer isWhite={isWhiteFooter} />
    </>
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